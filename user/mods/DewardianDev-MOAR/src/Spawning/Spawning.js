"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWaves = void 0;
const mapConfig_json_1 = __importDefault(require("../../config/mapConfig.json"));
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const GlobalValues_1 = require("../GlobalValues");
const utils_1 = require("../utils");
const constants_1 = require("./constants");
const buildBossWaves_1 = require("./buildBossWaves");
const buildZombieWaves_1 = __importDefault(require("./buildZombieWaves"));
const buildScavMarksmanWaves_1 = __importDefault(require("./buildScavMarksmanWaves"));
const buildPmcs_1 = __importDefault(require("./buildPmcs"));
const utils_2 = require("./utils");
const buildWaves = (container) => {
    const configServer = container.resolve("ConfigServer");
    const Logger = container.resolve("WinstonLogger");
    const pmcConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.PMC);
    const botConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.BOT);
    const locationConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.LOCATION);
    locationConfig.rogueLighthouseSpawnTimeSettings.waitTimeSeconds = 60;
    locationConfig.enableBotTypeLimits = false;
    locationConfig.fitLootIntoContainerAttempts = 1; // Move to ALP
    locationConfig.addCustomBotWavesToMaps = false;
    locationConfig.customWaves = { boss: {}, normal: {} };
    const databaseServer = container.resolve("DatabaseServer");
    const { locations, bots, globals } = databaseServer.getTables();
    let config = (0, utils_1.cloneDeep)(GlobalValues_1.globalValues.baseConfig);
    const preset = (0, utils_1.getRandomPresetOrCurrentlySelectedPreset)();
    Object.keys(GlobalValues_1.globalValues.overrideConfig).forEach((key) => {
        if (config[key] !== GlobalValues_1.globalValues.overrideConfig[key]) {
            config.debug &&
                console.log(`[MOAR] overrideConfig ${key} changed from ${config[key]} to ${GlobalValues_1.globalValues.overrideConfig[key]}`);
            config[key] = GlobalValues_1.globalValues.overrideConfig[key];
        }
    });
    // Set from preset if preset above is not empty
    Object.keys(preset).forEach((key) => {
        if (config[key] !== preset[key]) {
            config.debug &&
                console.log(`[MOAR]  preset ${GlobalValues_1.globalValues.currentPreset}:  ${key} changed from ${config[key]} to ${preset[key]}`);
            config[key] = preset[key];
        }
    });
    config.debug &&
        console.log(GlobalValues_1.globalValues.forcedPreset === "custom"
            ? "custom"
            : GlobalValues_1.globalValues.currentPreset);
    const { bigmap: customs, factory4_day: factoryDay, factory4_night: factoryNight, interchange, laboratory, lighthouse, rezervbase, shoreline, tarkovstreets, woods, sandbox: gzLow, sandbox_high: gzHigh, } = locations;
    let locationList = [
        customs,
        factoryDay,
        factoryNight,
        interchange,
        laboratory,
        lighthouse,
        rezervbase,
        shoreline,
        tarkovstreets,
        woods,
        gzLow,
        gzHigh,
    ];
    // This resets all locations to original state
    if (!GlobalValues_1.globalValues.locationsBase) {
        GlobalValues_1.globalValues.locationsBase = locationList.map(({ base }) => (0, utils_1.cloneDeep)(base));
    }
    else {
        locationList = locationList.map((item, key) => ({
            ...item,
            base: (0, utils_1.cloneDeep)(GlobalValues_1.globalValues.locationsBase[key]),
        }));
    }
    pmcConfig.convertIntoPmcChance = {
        default: {
            assault: { min: 0, max: 0 },
            cursedassault: { min: 0, max: 0 },
            pmcbot: { min: 0, max: 0 },
            exusec: { min: 0, max: 0 },
            arenafighter: { min: 0, max: 0 },
            arenafighterevent: { min: 0, max: 0 },
            crazyassaultevent: { min: 0, max: 0 },
        },
        factory4_day: { assault: { min: 0, max: 0 } },
        laboratory: { pmcbot: { min: 0, max: 0 } },
        rezervbase: { pmcbot: { min: 0, max: 0 } },
    };
    (0, utils_2.setEscapeTimeOverrides)(locationList, mapConfig_json_1.default, Logger, config);
    // Make main waves
    (0, buildScavMarksmanWaves_1.default)(config, locationList, botConfig);
    // BOSS RELATED STUFF!
    (0, buildBossWaves_1.buildBossWaves)(config, locationList);
    //Zombies
    if (config.zombiesEnabled) {
        (0, buildZombieWaves_1.default)(config, locationList, bots);
    }
    (0, buildPmcs_1.default)(config, locationList);
    constants_1.originalMapList.forEach((name, index) => {
        if (!locations[name]) {
            console.log("[MOAR] OH CRAP we have a problem!", name);
        }
        else {
            locations[name] = locationList[index];
        }
    });
};
exports.buildWaves = buildWaves;
//# sourceMappingURL=Spawning.js.map