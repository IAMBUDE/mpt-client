"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("../config/config.json"));
const eftQuestSettings_json_1 = __importDefault(require("../config/eftQuestSettings.json"));
const zoneAndItemQuestPositions_json_1 = __importDefault(require("../config/zoneAndItemQuestPositions.json"));
const CommonUtils_1 = require("./CommonUtils");
const BotLocationUtil_1 = require("./BotLocationUtil");
const PMCConversionUtil_1 = require("./PMCConversionUtil");
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const GameEditions_1 = require("C:/snapshot/project/obj/models/enums/GameEditions");
const MemberCategory_1 = require("C:/snapshot/project/obj/models/enums/MemberCategory");
const modName = "SPTQuestingBots";
const spawningModNames = ["SWAG", "DewardianDev-MOAR", "PreyToLive-BetterSpawnsPlus", "RealPlayerSpawn", "acidphantasm-botplacementsystem"];
class QuestingBots {
    commonUtils;
    botUtil;
    pmcConversionUtil;
    logger;
    configServer;
    databaseServer;
    databaseTables;
    localeService;
    questHelper;
    fileSystem;
    httpResponseUtil;
    randomUtil;
    weightedRandomHelper;
    botController;
    botNameService;
    iBotConfig;
    iPmcConfig;
    iLocationConfig;
    basePScavConversionChance;
    preSptLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        const staticRouterModService = container.resolve("StaticRouterModService");
        const dynamicRouterModService = container.resolve("DynamicRouterModService");
        // Get config.json settings for the bepinex plugin
        staticRouterModService.registerStaticRouter(`StaticGetConfig${modName}`, [{
                url: "/QuestingBots/GetConfig",
                action: async () => {
                    return JSON.stringify(config_json_1.default);
                }
            }], "GetConfig");
        if (!config_json_1.default.enabled) {
            return;
        }
        // Apply a scalar factor to the SPT-AKI PScav conversion chance
        dynamicRouterModService.registerDynamicRouter(`DynamicAdjustPScavChance${modName}`, [{
                url: "/QuestingBots/AdjustPScavChance/",
                action: async (url) => {
                    const urlParts = url.split("/");
                    const factor = Number(urlParts[urlParts.length - 1]);
                    this.iBotConfig.chanceAssaultScavHasPlayerScavName = Math.round(this.basePScavConversionChance * factor);
                    this.commonUtils.logInfo(`Adjusted PScav spawn chance to ${this.iBotConfig.chanceAssaultScavHasPlayerScavName}%`);
                    return JSON.stringify({ resp: "OK" });
                }
            }], "AdjustPScavChance");
        // Get all EFT quest templates
        // NOTE: This includes custom quests added by mods
        staticRouterModService.registerStaticRouter(`GetAllQuestTemplates${modName}`, [{
                url: "/QuestingBots/GetAllQuestTemplates",
                action: async () => {
                    return JSON.stringify({ templates: this.questHelper.getQuestsFromDb() });
                }
            }], "GetAllQuestTemplates");
        // Get override settings for EFT quests
        staticRouterModService.registerStaticRouter(`GetEFTQuestSettings${modName}`, [{
                url: "/QuestingBots/GetEFTQuestSettings",
                action: async () => {
                    return JSON.stringify({ settings: eftQuestSettings_json_1.default });
                }
            }], "GetEFTQuestSettings");
        // Get override settings for quest zones and items
        staticRouterModService.registerStaticRouter(`GetZoneAndItemQuestPositions${modName}`, [{
                url: "/QuestingBots/GetZoneAndItemQuestPositions",
                action: async () => {
                    return JSON.stringify({ zoneAndItemPositions: zoneAndItemQuestPositions_json_1.default });
                }
            }], "GetZoneAndItemQuestPositions");
        // Get Scav-raid settings to determine PScav conversion chances
        staticRouterModService.registerStaticRouter(`GetScavRaidSettings${modName}`, [{
                url: "/QuestingBots/GetScavRaidSettings",
                action: async () => {
                    return JSON.stringify({ maps: this.iLocationConfig.scavRaidTimeSettings.maps });
                }
            }], "GetScavRaidSettings");
        // Get the chance that a PMC will be a USEC
        staticRouterModService.registerStaticRouter(`GetUSECChance${modName}`, [{
                url: "/QuestingBots/GetUSECChance",
                action: async () => {
                    return JSON.stringify({ usecChance: this.iPmcConfig.isUsec });
                }
            }], "GetUSECChance");
        // Intercept the EFT bot-generation request to include a PScav conversion chance
        container.afterResolution("BotCallbacks", (_t, result) => {
            result.generateBots = async (url, info, sessionID) => {
                const bots = await this.generateBots({ conditions: info.conditions }, sessionID, info.GeneratePScav);
                return this.httpResponseUtil.getBody(bots);
            };
        }, { frequency: "Always" });
    }
    postDBLoad(container) {
        this.configServer = container.resolve("ConfigServer");
        this.databaseServer = container.resolve("DatabaseServer");
        this.localeService = container.resolve("LocaleService");
        this.questHelper = container.resolve("QuestHelper");
        this.fileSystem = container.resolve("FileSystemSync");
        this.httpResponseUtil = container.resolve("HttpResponseUtil");
        this.randomUtil = container.resolve("RandomUtil");
        this.weightedRandomHelper = container.resolve("WeightedRandomHelper");
        this.botController = container.resolve("BotController");
        this.botNameService = container.resolve("BotNameService");
        this.iBotConfig = this.configServer.getConfig(ConfigTypes_1.ConfigTypes.BOT);
        this.iPmcConfig = this.configServer.getConfig(ConfigTypes_1.ConfigTypes.PMC);
        this.iLocationConfig = this.configServer.getConfig(ConfigTypes_1.ConfigTypes.LOCATION);
        this.databaseTables = this.databaseServer.getTables();
        this.commonUtils = new CommonUtils_1.CommonUtils(this.logger, this.databaseTables, this.localeService);
        this.botUtil = new BotLocationUtil_1.BotUtil(this.commonUtils, this.databaseTables, this.iLocationConfig, this.iBotConfig, this.iPmcConfig);
        this.pmcConversionUtil = new PMCConversionUtil_1.PMCConversionUtil(this.commonUtils, this.iPmcConfig, this.iBotConfig);
        if (!config_json_1.default.enabled) {
            return;
        }
        if (!this.doesFileIntegrityCheckPass()) {
            config_json_1.default.enabled = false;
            return;
        }
        if (!this.areArraysValid()) {
            config_json_1.default.enabled = false;
            return;
        }
    }
    postSptLoad(container) {
        if (!config_json_1.default.enabled) {
            this.commonUtils.logInfo("Mod disabled in config.json", true);
            return;
        }
        const presptModLoader = container.resolve("PreSptModLoader");
        this.pmcConversionUtil.removeBlacklistedBrainTypes();
        // Disable the Questing Bots spawning system if another spawning mod has been loaded
        if (this.shouldDisableSpawningSystem(presptModLoader.getImportedModsNames())) {
            config_json_1.default.bot_spawns.enabled = false;
        }
        // Make Questing Bots control PScav spawning
        this.basePScavConversionChance = this.iBotConfig.chanceAssaultScavHasPlayerScavName;
        if (config_json_1.default.adjust_pscav_chance.enabled || (config_json_1.default.bot_spawns.enabled && config_json_1.default.bot_spawns.player_scavs.enabled)) {
            this.iBotConfig.chanceAssaultScavHasPlayerScavName = 0;
        }
        this.configureSpawningSystem();
    }
    configureSpawningSystem() {
        if (!config_json_1.default.bot_spawns.enabled) {
            return;
        }
        this.commonUtils.logInfo("Configuring game for bot spawning...");
        // Overwrite BSG's chances of bots being friendly toward each other
        this.botUtil.adjustAllBotHostilityChances();
        // Remove all of BSG's PvE-only boss waves
        this.botUtil.disablePvEBossWaves();
        // Currently these are all PMC waves, which are unnecessary with PMC spawns in this mod
        this.botUtil.disableBotWaves(this.iLocationConfig.customWaves.boss, "boss");
        // Disable all of the extra Scavs that spawn into Factory
        this.botUtil.disableBotWaves(this.iLocationConfig.customWaves.normal, "Scav");
        // Disable SPT's PMC wave generator
        this.botUtil.disableBotWaves(this.iPmcConfig.customPmcWaves, "PMC");
        // Use EFT's bot caps instead of SPT's
        this.botUtil.useEFTBotCaps();
        // If Rogues don't spawn immediately, PMC spawns will be significantly delayed
        if (config_json_1.default.bot_spawns.limit_initial_boss_spawns.disable_rogue_delay && (this.iLocationConfig.rogueLighthouseSpawnTimeSettings.waitTimeSeconds > -1)) {
            this.iLocationConfig.rogueLighthouseSpawnTimeSettings.waitTimeSeconds = -1;
            this.commonUtils.logInfo("Removed SPT Rogue spawn delay");
        }
        this.commonUtils.logInfo("Configuring game for bot spawning...done.");
    }
    async generateBots(info, sessionID, shouldBePScavGroup) {
        const bots = await this.botController.generate(sessionID, info);
        if (!shouldBePScavGroup) {
            return bots;
        }
        for (const bot in bots) {
            if (bots[bot].Info.Settings.Role !== "assault") {
                this.commonUtils.logDebug(`Tried generating a player Scav, but a bot with role ${bots[bot].Info.Settings.Role} was returned`);
                continue;
            }
            this.botNameService.addRandomPmcNameToBotMainProfileNicknameProperty(bots[bot]);
            this.setRandomisedGameVersionAndCategory(bots[bot].Info);
        }
        return bots;
    }
    setRandomisedGameVersionAndCategory(botInfo) {
        /* SPT CODE - BotGenerator.setRandomisedGameVersionAndCategory(bot.Info) */
        // Special case
        if (botInfo.Nickname?.toLowerCase() === "nikita") {
            botInfo.GameVersion = GameEditions_1.GameEditions.UNHEARD;
            botInfo.MemberCategory = MemberCategory_1.MemberCategory.DEVELOPER;
            return botInfo.GameVersion;
        }
        // Choose random weighted game version for bot
        botInfo.GameVersion = this.weightedRandomHelper.getWeightedValue(this.iPmcConfig.gameVersionWeight);
        // Choose appropriate member category value
        switch (botInfo.GameVersion) {
            case GameEditions_1.GameEditions.EDGE_OF_DARKNESS:
                botInfo.MemberCategory = MemberCategory_1.MemberCategory.UNIQUE_ID;
                break;
            case GameEditions_1.GameEditions.UNHEARD:
                botInfo.MemberCategory = MemberCategory_1.MemberCategory.UNHEARD;
                break;
            default:
                // Everyone else gets a weighted randomised category
                botInfo.MemberCategory = Number.parseInt(this.weightedRandomHelper.getWeightedValue(this.iPmcConfig.accountTypeWeight), 10);
        }
        // Ensure selected category matches
        botInfo.SelectedMemberCategory = botInfo.MemberCategory;
        return botInfo.GameVersion;
    }
    doesFileIntegrityCheckPass() {
        const path = `${__dirname}/..`;
        if (this.fileSystem.exists(`${path}/quests/`)) {
            this.commonUtils.logWarning("Found obsolete quests folder 'user\\mods\\DanW-SPTQuestingBots\\quests'. Only quest files in 'BepInEx\\plugins\\DanW-SPTQuestingBots\\quests' will be used.");
        }
        if (this.fileSystem.exists(`${path}/log/`)) {
            this.commonUtils.logWarning("Found obsolete log folder 'user\\mods\\DanW-SPTQuestingBots\\log'. Logs are now saved in 'BepInEx\\plugins\\DanW-SPTQuestingBots\\log'.");
        }
        if (this.fileSystem.exists(`${path}/../../../BepInEx/plugins/SPTQuestingBots.dll`)) {
            this.commonUtils.logError("Please remove BepInEx/plugins/SPTQuestingBots.dll from the previous version of this mod and restart the server, or it will NOT work correctly.");
            return false;
        }
        return true;
    }
    areArraysValid() {
        if (!this.isChanceArrayValid(config_json_1.default.questing.bot_quests.eft_quests.level_range, true)) {
            this.commonUtils.logError("questing.bot_quests.eft_quests.level_range has invalid data. Mod disabled.");
            return false;
        }
        if (!this.isChanceArrayValid(config_json_1.default.bot_spawns.pmcs.fraction_of_max_players_vs_raidET, false)) {
            this.commonUtils.logError("bot_spawns.pmcs.fraction_of_max_players_vs_raidET has invalid data. Mod disabled.");
            return false;
        }
        if (!this.isChanceArrayValid(config_json_1.default.bot_spawns.pmcs.bots_per_group_distribution, true)) {
            this.commonUtils.logError("bot_spawns.pmcs.bots_per_group_distribution has invalid data. Mod disabled.");
            return false;
        }
        if (!this.isChanceArrayValid(config_json_1.default.bot_spawns.pmcs.bot_difficulty_as_online, true)) {
            this.commonUtils.logError("bot_spawns.pmcs.bot_difficulty_as_online has invalid data. Mod disabled.");
            return false;
        }
        if (!this.isChanceArrayValid(config_json_1.default.bot_spawns.player_scavs.bots_per_group_distribution, true)) {
            this.commonUtils.logError("bot_spawns.player_scavs.bots_per_group_distribution has invalid data. Mod disabled.");
            return false;
        }
        if (!this.isChanceArrayValid(config_json_1.default.bot_spawns.player_scavs.bot_difficulty_as_online, true)) {
            this.commonUtils.logError("bot_spawns.player_scavs.bot_difficulty_as_online has invalid data. Mod disabled.");
            return false;
        }
        if (!this.isChanceArrayValid(config_json_1.default.adjust_pscav_chance.chance_vs_time_remaining_fraction, false)) {
            this.commonUtils.logError("adjust_pscav_chance.chance_vs_time_remaining_fraction has invalid data. Mod disabled.");
            return false;
        }
        return true;
    }
    isChanceArrayValid(array, shouldLeftColumnBeIntegers) {
        if (array.length === 0) {
            return false;
        }
        for (const row of array) {
            if (row.length !== 2) {
                return false;
            }
            if (shouldLeftColumnBeIntegers && !Number.isInteger(row[0])) {
                this.commonUtils.logError("Found a chance array with an invalid value in its left column. Please ensure you are not using an outdated version of config.json.");
                return false;
            }
        }
        return true;
    }
    shouldDisableSpawningSystem(importedModNames) {
        if (!config_json_1.default.bot_spawns.enabled) {
            return false;
        }
        for (const spawningModName of spawningModNames) {
            if (importedModNames.includes(spawningModName)) {
                this.commonUtils.logWarning(`${spawningModName} detected. Disabling the Questing Bots spawning system.`);
                return true;
            }
        }
        return false;
    }
}
module.exports = { mod: new QuestingBots() };
//# sourceMappingURL=mod.js.map