import {
  IBossLocationSpawn,
  IWave,
  WildSpawnType,
} from "@spt/models/eft/common/ILocationBase";
import _config from "../../config/config.json";
import { ILocation } from "@spt/models/eft/common/ILocation";
import { defaultEscapeTimes } from "./constants";
import { ILogger } from "@spt/models/spt/utils/ILogger";

export const waveBuilder = (
  totalWaves: number,
  timeLimit: number,
  waveDistribution: number,
  wildSpawnType: "marksman" | "assault",
  difficulty: number,
  isPlayer: boolean,
  maxSlots: number,
  combinedZones: string[] = [],
  specialZones: string[] = [],
  offset?: number,
  starting?: boolean,
  moreGroups?: boolean
): IWave[] => {
  if (totalWaves === 0) return [];

  const averageTime = timeLimit / totalWaves;
  const firstHalf = Math.round(averageTime * (1 - waveDistribution));
  const secondHalf = Math.round(averageTime * (1 + waveDistribution));
  let timeStart = offset || 0;
  const waves: IWave[] = [];
  let maxSlotsReached = Math.round(1.3 * totalWaves);
  while (
    totalWaves > 0 &&
    (waves.length < totalWaves || specialZones.length > 0)
  ) {
    const accelerate = totalWaves > 5 && waves.length < totalWaves / 3;
    const stage = Math.round(
      waves.length < Math.round(totalWaves * 0.5)
        ? accelerate
          ? firstHalf / 3
          : firstHalf
        : secondHalf
    );

    const min = !offset && waves.length < 1 ? 0 : timeStart;
    const max = !offset && waves.length < 1 ? 0 : timeStart + 60;

    if (waves.length >= 1 || offset) timeStart = timeStart + stage;
    const BotPreset = getDifficulty(difficulty);
    // console.log(wildSpawnType, BotPreset);
    // Math.round((1 - waves.length / totalWaves) * maxSlots) || 1;
    let slotMax = Math.round(
      (moreGroups ? Math.random() : Math.random() * Math.random()) * maxSlots
    );

    if (slotMax < 1) slotMax = 1;
    let slotMin = (Math.round(Math.random() * slotMax) || 1) - 1;

    if (wildSpawnType === "marksman" && slotMin < 1) slotMin = 1;
    waves.push({
      BotPreset,
      BotSide: getBotSide(wildSpawnType),
      SpawnPoints: getZone(
        specialZones,
        combinedZones,
        waves.length >= totalWaves
      ),
      isPlayers: isPlayer,
      slots_max: slotMax,
      slots_min: slotMin,
      time_min: starting || !max ? -1 : min,
      time_max: starting || !max ? -1 : max,
      WildSpawnType: wildSpawnType as WildSpawnType,
      number: waves.length,
      sptId: wildSpawnType + waves.length,
      SpawnMode: ["regular", "pve"],
    });
    maxSlotsReached -= slotMax;
    // if (wildSpawnType === "assault") console.log(slotMax, maxSlotsReached);
    if (maxSlotsReached <= 0) break;
  }
  // console.log(waves.map(({ slots_min }) => slots_min));
  return waves;
};

const getZone = (specialZones, combinedZones, specialOnly) => {
  if (!specialOnly && combinedZones.length)
    return combinedZones[
      Math.round((combinedZones.length - 1) * Math.random())
    ];
  if (specialZones.length) return specialZones.pop();
  return "";
};

export const getDifficulty = (diff: number) => {
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

export const shuffle = <n>(array: any): n => {
  let currentIndex = array.length,
    randomIndex;

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

const getBotSide = (
  spawnType: "marksman" | "assault" | "pmcBEAR" | "pmcUSEC"
) => {
  switch (spawnType) {
    case "pmcBEAR":
      return "Bear";
    case "pmcUSEC":
      return "Usec";
    default:
      return "Savage";
  }
};

export const buildBossBasedWave = (
  BossChance: number,
  BossEscortAmount: string,
  BossEscortType: string,
  BossName: string,
  BossZone: string,
  raidTime?: number
): IBossLocationSpawn => {
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

export const zombieTypes = [
  "infectedassault",
  "infectedpmc",
  "infectedlaborant",
  "infectedcivil",
];

export const zombieTypesCaps = [
  "infectedAssault",
  "infectedPmc",
  "infectedLaborant",
  "infectedCivil",
];

export const getRandomDifficulty = (num: number = 1.5) =>
  getDifficulty(Math.round(Math.random() * num * 10) / 10);

export const getRandomZombieType = () =>
  zombieTypesCaps[Math.round((zombieTypesCaps.length - 1) * Math.random())];

export const buildPmcWaves = (
  pmcTotal: number,
  escapeTimeLimit: number,
  config: typeof _config,
  bossZones: string[],
  hotZones: string[]
): IBossLocationSpawn[] => {
  // console.log(pmcTotal)
  if (!pmcTotal) return [];
  const halfIndex = Math.round(bossZones.length * 0.75); //Put hotzones in the 2 - 4 spawns
  // console.log(bossZones.length);
  bossZones = [
    ...bossZones.slice(0, halfIndex),
    ...hotZones,
    ...bossZones.slice(halfIndex),
  ];

  // console.log(bossZones.length, hotZones.length);
  // console.log(bossZones);
  pmcTotal = pmcTotal + hotZones.length;

  let {
    pmcMaxGroupSize,
    pmcDifficulty,
    startingPmcs,
    morePmcGroups,
    pmcWaveDistribution,
  } = config;

  const averageTime = (escapeTimeLimit * 0.8) / pmcTotal;

  const waves: IBossLocationSpawn[] = [];
  let maxSlotsReached = pmcTotal;

  while (pmcTotal > 0) {
    let bossEscortAmount = Math.round(
      (morePmcGroups ? 1 : Math.random()) *
        Math.random() *
        (pmcMaxGroupSize - 1)
    );

    if (bossEscortAmount < 0) bossEscortAmount = 0;

    // const totalCountThisWave = bossEscortAmount + 1;
    const totalCountThusFar = pmcTotal - maxSlotsReached;

    const timeToUse =
      totalCountThusFar < pmcTotal * pmcWaveDistribution
        ? Math.round(
            averageTime * (1 - pmcWaveDistribution) * totalCountThusFar
          )
        : Math.round(
            escapeTimeLimit * (1 - pmcWaveDistribution) +
              (1 - pmcWaveDistribution) * totalCountThusFar * averageTime
          );

    let timeStart =
      (startingPmcs ? totalCountThusFar * totalCountThusFar * 3 : timeToUse) ||
      -1;

    const side = Math.random() > 0.5 ? "pmcBEAR" : "pmcUSEC";

    const BossDifficult = getDifficulty(pmcDifficulty);

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
    if (maxSlotsReached <= 0) break;
  }
  // console.log(
  //   escapeTimeLimit,
  //   waves.map(({ Time }) => Time)
  // );
  return waves;
};

export const buildZombie = (
  totalWaves: number,
  escapeTimeLimit: number,
  waveDistribution: number,
  BossChance: number = 100
): IBossLocationSpawn[] => {
  if (!totalWaves) return [];
  const averageTime = (escapeTimeLimit * 60) / totalWaves;
  const firstHalf = Math.round(averageTime * (1 - waveDistribution));
  const secondHalf = Math.round(averageTime * (1 + waveDistribution));
  let timeStart = 90;
  const waves: IBossLocationSpawn[] = [];
  let maxSlotsReached = Math.round(1.3 * totalWaves);

  while (totalWaves > 0) {
    const accelerate = totalWaves > 5 && waves.length < totalWaves / 3;
    const stage = Math.round(
      waves.length < Math.round(totalWaves * 0.5)
        ? accelerate
          ? firstHalf / 3
          : firstHalf
        : secondHalf
    );

    if (waves.length >= 1) timeStart = timeStart + stage;
    const main = getRandomZombieType();
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
      Supports: new Array(
        Math.round(Math.random() * 4) /* <= 4 AddthistoConfig */
      )
        .fill("")
        .map(() => ({
          BossEscortType: getRandomZombieType(),
          BossEscortDifficult: ["normal"],
          BossEscortAmount: "1",
        })),
      TriggerId: "",
      TriggerName: "",
      spawnMode: ["regular", "pve"],
    });

    maxSlotsReached -= 1 + waves[waves.length - 1].Supports.length;
    if (maxSlotsReached <= 0) break;
  }

  return waves;
};

export interface MapSettings {
  EscapeTimeLimit?: number;
  maxBotPerZoneOverride?: number;
  maxBotCapOverride?: number;
  pmcHotZones?: string[];
  scavHotZones?: string[];
  pmcWaveCount: number;
  scavWaveCount: number;
  zombieWaveCount: number;
}

export const getHealthBodyPartsByPercentage = (num: number) => {
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

export interface MapConfigType {
  spawnMinDistance: number;
  pmcWaveCount: number;
  scavWaveCount: number;
  zombieWaveCount?: number;
  scavHotZones?: string[];
  pmcHotZones?: string[];
  EscapeTimeLimitOverride?: number;
}

export const setEscapeTimeOverrides = (
  locationList: ILocation[],
  mapConfig: Record<string, MapConfigType>,
  logger: ILogger,
  config: typeof _config
) => {
  for (let index = 0; index < locationList.length; index++) {
    const mapSettingsList = Object.keys(mapConfig) as Array<
      keyof typeof mapConfig
    >;

    const map = mapSettingsList[index];
    const override = mapConfig[map].EscapeTimeLimitOverride;
    const hardcodedEscapeLimitMax = 5;

    if (
      !override &&
      locationList[index].base.EscapeTimeLimit / defaultEscapeTimes[map] >
        hardcodedEscapeLimitMax
    ) {
      const maxLimit = defaultEscapeTimes[map] * hardcodedEscapeLimitMax;
      logger.warning(
        `[MOAR] EscapeTimeLimit set too high on ${map}\nEscapeTimeLimit changed from ${locationList[index].base.EscapeTimeLimit} => ${maxLimit}\n`
      );
      locationList[index].base.EscapeTimeLimit = maxLimit;
    }

    if (override && locationList[index].base.EscapeTimeLimit !== override) {
      console.log(
        `[Moar] Set ${map}'s Escape time limit to ${override} from ${locationList[index].base.EscapeTimeLimit}\n`
      );
      locationList[index].base.EscapeTimeLimit = override;
      locationList[index].base.EscapeTimeLimitCoop = override;
      locationList[index].base.EscapeTimeLimitPVE = override;
    }

    if (
      config.startingPmcs &&
      locationList[index].base.EscapeTimeLimit / defaultEscapeTimes[map] > 2
    ) {
      logger.warning(
        `[MOAR] Average EscapeTimeLimit is too high (greater than 2x) to enable starting PMCS\nStarting PMCS has been turned off to prevent performance issues.\n`
      );
      config.startingPmcs = false;
    }
  }
};
