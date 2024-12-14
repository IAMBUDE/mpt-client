"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = buildPmcs;
const mapConfig_json_1 = __importDefault(require("../../config/mapConfig.json"));
const constants_1 = require("./constants");
const utils_1 = require("./utils");
function buildPmcs(config, locationList) {
    for (let index = 0; index < locationList.length; index++) {
        const mapSettingsList = Object.keys(mapConfig_json_1.default);
        const map = mapSettingsList[index];
        locationList[index].base.BotLocationModifier.AdditionalHostilitySettings =
            constants_1.defaultHostility;
        const { pmcHotZones = [] } = mapConfig_json_1.default?.[map] || {};
        const pmcZones = (0, utils_1.shuffle)([
            ...new Set([...locationList[index].base.SpawnPointParams]
                .filter(({ Categories, BotZoneName }) => !!BotZoneName &&
                Categories.includes("Player") &&
                !BotZoneName.includes("snipe"))
                .map(({ BotZoneName }) => BotZoneName)),
            ...pmcHotZones,
        ]);
        // console.log(pmcZones);
        // const pmcZones = shuffle<string[]>([
        //   ...new Set(
        //     [...locationList[index].base.BossLocationSpawn]
        //       .filter(
        //         ({ BossName }) =>
        //           BossName && ["pmcBEAR", "pmcUSEC"].includes(BossName)
        //       )
        //       .map(({ BossZone }) => BossZone)
        //   ),
        //   ...pmcHotZones,
        // ]);
        const timeLimit = locationList[index].base.EscapeTimeLimit * 60;
        const { pmcWaveCount } = mapConfig_json_1.default[map];
        const escapeTimeLimitRatio = Math.round(locationList[index].base.EscapeTimeLimit / constants_1.defaultEscapeTimes[map]);
        const totalWaves = Math.round(pmcWaveCount * config.pmcWaveQuantity * escapeTimeLimitRatio);
        if (config.debug) {
            console.log(`${map} PMC count ${totalWaves} \n`);
            escapeTimeLimitRatio !== 1 &&
                console.log(`${map} PMC wave count changed from ${pmcWaveCount} to ${totalWaves} due to escapeTimeLimit adjustment`);
        }
        const waves = (0, utils_1.buildPmcWaves)(pmcWaveCount, timeLimit, config, pmcZones);
        // apply our new waves
        locationList[index].base.BossLocationSpawn = [
            ...waves,
            ...locationList[index].base.BossLocationSpawn,
        ];
    }
}
//# sourceMappingURL=buildPmcs.js.map