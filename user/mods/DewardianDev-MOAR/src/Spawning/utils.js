"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEscapeTimeOverrides = exports.getHealthBodyPartsByPercentage = exports.buildZombie = exports.buildPmcWaves = exports.getRandomZombieType = exports.getRandomDifficulty = exports.zombieTypesCaps = exports.zombieTypes = exports.buildBossBasedWave = exports.shuffle = exports.getDifficulty = exports.waveBuilder = void 0;
const constants_1 = require("./constants");
const waveBuilder = (totalWaves, timeLimit, waveDistribution, wildSpawnType, difficulty, isPlayer, maxSlots, combinedZones = [], specialZones = [], offset, starting, moreGroups) => {
    if (totalWaves === 0)
        return [];
    const averageTime = timeLimit / totalWaves;
    const firstHalf = Math.round(averageTime * (1 - waveDistribution));
    const secondHalf = Math.round(averageTime * (1 + waveDistribution));
    let timeStart = offset || 0;
    const waves = [];
    let maxSlotsReached = Math.round(1.3 * totalWaves);
    while (totalWaves > 0 &&
        (waves.length < totalWaves || specialZones.length > 0)) {
        const accelerate = totalWaves > 5 && waves.length < totalWaves / 3;
        const stage = Math.round(waves.length < Math.round(totalWaves * 0.5)
            ? accelerate
                ? firstHalf / 3
                : firstHalf
            : secondHalf);
        const min = !offset && waves.length < 1 ? 0 : timeStart;
        const max = !offset && waves.length < 1 ? 0 : timeStart + 10;
        if (waves.length >= 1 || offset)
            timeStart = timeStart + stage;
        const BotPreset = (0, exports.getDifficulty)(difficulty);
        // console.log(wildSpawnType, BotPreset);
        // Math.round((1 - waves.length / totalWaves) * maxSlots) || 1;
        const slotMax = Math.round((moreGroups ? Math.random() : Math.random() * Math.random()) * maxSlots) || 1;
        const slotMin = (Math.round(Math.random() * slotMax) || 1) - 1;
        waves.push({
            BotPreset,
            BotSide: getBotSide(wildSpawnType),
            SpawnPoints: getZone(specialZones, combinedZones, waves.length >= totalWaves),
            isPlayers: isPlayer,
            slots_max: slotMax,
            slots_min: slotMin,
            time_min: starting || !max ? -1 : min,
            time_max: starting || !max ? -1 : max,
            WildSpawnType: wildSpawnType,
            number: waves.length,
            sptId: wildSpawnType + waves.length,
            SpawnMode: ["regular", "pve"],
        });
        maxSlotsReached -= slotMax;
        // if (wildSpawnType === "assault") console.log(slotMax, maxSlotsReached);
        if (maxSlotsReached <= 0)
            break;
    }
    // console.log(waves.map(({ slots_min }) => slots_min));
    return waves;
};
exports.waveBuilder = waveBuilder;
const getZone = (specialZones, combinedZones, specialOnly) => {
    if (!specialOnly && combinedZones.length)
        return combinedZones[Math.round((combinedZones.length - 1) * Math.random())];
    if (specialZones.length)
        return specialZones.pop();
    return "";
};
const getDifficulty = (diff) => {
    const randomNumb = Math.random() + diff;
    switch (true) {
        case randomNumb < 0.55:
            return "easy";
        case randomNumb < 1.4:
            return "normal";
        case randomNumb < 1.85:
            return "hard";
        default:
            return "impossible";
    }
};
exports.getDifficulty = getDifficulty;
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
};
exports.shuffle = shuffle;
const getBotSide = (spawnType) => {
    switch (spawnType) {
        case "pmcBEAR":
            return "Bear";
        case "pmcUSEC":
            return "Usec";
        default:
            return "Savage";
    }
};
const buildBossBasedWave = (BossChance, BossEscortAmount, BossEscortType, BossName, BossZone, raidTime) => {
    return {
        BossChance,
        BossDifficult: "normal",
        BossEscortAmount,
        BossEscortDifficult: "normal",
        BossEscortType,
        BossName,
        BossPlayer: false,
        BossZone,
        Delay: 0,
        ForceSpawn: false,
        IgnoreMaxBots: true,
        RandomTimeSpawn: false,
        Time: raidTime ? Math.round(Math.random() * (raidTime * 5)) : -1,
        Supports: null,
        TriggerId: "",
        TriggerName: "",
        spawnMode: ["regular", "pve"],
    };
};
exports.buildBossBasedWave = buildBossBasedWave;
exports.zombieTypes = [
    "infectedassault",
    "infectedpmc",
    "infectedlaborant",
    "infectedcivil",
];
exports.zombieTypesCaps = [
    "infectedAssault",
    "infectedPmc",
    "infectedLaborant",
    "infectedCivil",
];
const getRandomDifficulty = (num = 1.5) => (0, exports.getDifficulty)(Math.round(Math.random() * num * 10) / 10);
exports.getRandomDifficulty = getRandomDifficulty;
const getRandomZombieType = () => exports.zombieTypesCaps[Math.round((exports.zombieTypesCaps.length - 1) * Math.random())];
exports.getRandomZombieType = getRandomZombieType;
const buildPmcWaves = (totalWaves, escapeTimeLimit, config, bossZones) => {
    let { pmcMaxGroupSize, pmcDifficulty, startingPmcs, morePmcGroups, pmcWaveDistribution, } = config;
    const averageTime = escapeTimeLimit / totalWaves;
    const firstHalf = Math.round(averageTime * (1 - pmcWaveDistribution));
    const secondHalf = Math.round(averageTime * (1 + pmcWaveDistribution));
    let timeStart = -1;
    const waves = [];
    let maxSlotsReached = totalWaves;
    while (totalWaves > 0) {
        const bossEscortAmount = Math.round((morePmcGroups ? 1 : Math.random()) *
            Math.random() *
            (pmcMaxGroupSize - 1));
        const accelerate = totalWaves > 5 && waves.length < totalWaves / 3;
        const stage = startingPmcs
            ? 10
            : Math.round(waves.length < Math.round(totalWaves * 0.5)
                ? accelerate
                    ? firstHalf / 3
                    : firstHalf
                : secondHalf);
        if (waves.length >= 1)
            timeStart = timeStart + stage;
        // console.log(timeStart, BossEscortAmount);
        const side = Math.random() > 0.5 ? "pmcBEAR" : "pmcUSEC";
        const BossDifficult = (0, exports.getDifficulty)(pmcDifficulty);
        waves.push({
            BossChance: 9999,
            BossDifficult,
            BossEscortAmount: bossEscortAmount.toString(),
            BossEscortDifficult: "normal",
            BossEscortType: side,
            BossName: side,
            BossPlayer: false,
            BossZone: bossZones.pop() || "",
            Delay: 0,
            DependKarma: false,
            DependKarmaPVE: false,
            ForceSpawn: true,
            IgnoreMaxBots: true,
            RandomTimeSpawn: false,
            Time: timeStart,
            Supports: null,
            TriggerId: "",
            TriggerName: "",
            spawnMode: ["regular", "pve"],
        });
        maxSlotsReached -= 1 + bossEscortAmount;
        if (maxSlotsReached <= 0)
            break;
    }
    return waves;
};
exports.buildPmcWaves = buildPmcWaves;
const buildZombie = (totalWaves, escapeTimeLimit, waveDistribution, BossChance = 100) => {
    const averageTime = (escapeTimeLimit * 60) / totalWaves;
    const firstHalf = Math.round(averageTime * (1 - waveDistribution));
    const secondHalf = Math.round(averageTime * (1 + waveDistribution));
    let timeStart = 90;
    const waves = [];
    let maxSlotsReached = Math.round(1.3 * totalWaves);
    while (totalWaves > 0) {
        const accelerate = totalWaves > 5 && waves.length < totalWaves / 3;
        const stage = Math.round(waves.length < Math.round(totalWaves * 0.5)
            ? accelerate
                ? firstHalf / 3
                : firstHalf
            : secondHalf);
        if (waves.length >= 1)
            timeStart = timeStart + stage;
        const main = (0, exports.getRandomZombieType)();
        waves.push({
            BossChance,
            BossDifficult: "normal",
            BossEscortAmount: "0",
            BossEscortDifficult: "normal",
            BossEscortType: main,
            BossName: main,
            BossPlayer: false,
            BossZone: "",
            Delay: 0,
            IgnoreMaxBots: true,
            RandomTimeSpawn: false,
            Time: timeStart,
            Supports: new Array(Math.round(Math.random() * 4) /* <= 4 AddthistoConfig */)
                .fill("")
                .map(() => ({
                BossEscortType: (0, exports.getRandomZombieType)(),
                BossEscortDifficult: ["normal"],
                BossEscortAmount: "1",
            })),
            TriggerId: "",
            TriggerName: "",
            spawnMode: ["regular", "pve"],
        });
        maxSlotsReached -= 1 + waves[waves.length - 1].Supports.length;
        if (maxSlotsReached <= 0)
            break;
    }
    return waves;
};
exports.buildZombie = buildZombie;
const getHealthBodyPartsByPercentage = (num) => {
    const num35 = Math.round(35 * num);
    const num100 = Math.round(100 * num);
    const num70 = Math.round(70 * num);
    const num80 = Math.round(80 * num);
    return {
        Head: {
            min: num35,
            max: num35,
        },
        Chest: {
            min: num100,
            max: num100,
        },
        Stomach: {
            min: num100,
            max: num100,
        },
        LeftArm: {
            min: num70,
            max: num70,
        },
        RightArm: {
            min: num70,
            max: num70,
        },
        LeftLeg: {
            min: num80,
            max: num80,
        },
        RightLeg: {
            min: num80,
            max: num80,
        },
    };
};
exports.getHealthBodyPartsByPercentage = getHealthBodyPartsByPercentage;
const setEscapeTimeOverrides = (locationList, mapConfig, logger, config) => {
    for (let index = 0; index < locationList.length; index++) {
        const mapSettingsList = Object.keys(mapConfig);
        const map = mapSettingsList[index];
        const override = mapConfig[map].EscapeTimeLimitOverride;
        const hardcodedEscapeLimitMax = 5;
        if (!override &&
            locationList[index].base.EscapeTimeLimit / constants_1.defaultEscapeTimes[map] >
                hardcodedEscapeLimitMax) {
            const maxLimit = constants_1.defaultEscapeTimes[map] * hardcodedEscapeLimitMax;
            logger.warning(`[MOAR] EscapeTimeLimit set too high on ${map}\nEscapeTimeLimit changed from ${locationList[index].base.EscapeTimeLimit} => ${maxLimit}\n`);
            locationList[index].base.EscapeTimeLimit = maxLimit;
        }
        if (override && locationList[index].base.EscapeTimeLimit !== override) {
            console.log(`[Moar] Set ${map}'s Escape time limit to ${override} from ${locationList[index].base.EscapeTimeLimit}\n`);
            locationList[index].base.EscapeTimeLimit = override;
            locationList[index].base.EscapeTimeLimitCoop = override;
            locationList[index].base.EscapeTimeLimitPVE = override;
        }
        if (config.startingPmcs &&
            locationList[index].base.EscapeTimeLimit / constants_1.defaultEscapeTimes[map] > 2) {
            logger.warning(`[MOAR] Average EscapeTimeLimit is too high (greater than 2x) to enable starting PMCS\nStarting PMCS has been turned off to prevent performance issues.\n`);
            config.startingPmcs = false;
        }
    }
};
exports.setEscapeTimeOverrides = setEscapeTimeOverrides;
//# sourceMappingURL=utils.js.map