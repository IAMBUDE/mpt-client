"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bossLegionData = exports.bossPunisherData = exports.gifterData = exports.exUsecData = exports.pmcBotLaboratoryData = exports.pmcBotReserveData = exports.pmcBotData = exports.arenaFighterEventData = exports.sectantPriestData = exports.bossPartisanData = exports.bossKojaniyData = exports.bossBoarData = exports.bossKolontayData = exports.bossSanitarData = exports.bossGluharData = exports.bossZryachiyData = exports.bossKillaData = exports.bossTagillaData = exports.bossBullyData = exports.bossKnightData = void 0;
exports.bossKnightData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "bossKnight",
        "BossPlayer": false,
        "BossZone": "ZoneScavBase",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": true,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": [
            {
                "BossEscortAmount": "1",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerBigPipe"
            },
            {
                "BossEscortAmount": "1",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerBirdEye"
            }
        ],
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossBullyData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "4",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerBully",
        "BossName": "bossBully",
        "BossPlayer": false,
        "BossZone": "ZoneDormitory,ZoneGasStation,ZoneScavBase",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossTagillaData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "0",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerBully",
        "BossName": "bossTagilla",
        "BossPlayer": false,
        "BossZone": "BotZone",
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossKillaData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "0",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerTagilla",
        "BossName": "bossKilla",
        "BossPlayer": false,
        "BossZone": "ZoneCenterBot,ZoneCenter,ZoneOLI,ZoneIDEA,ZoneGoshan",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossZryachiyData = [{
        "BossChance": 100,
        "BossDifficult": "normal",
        "BossEscortAmount": "2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerZryachiy",
        "BossName": "bossZryachiy",
        "BossPlayer": false,
        "BossZone": "Zone_Island",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossGluharData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerGluharSecurity",
        "BossName": "bossGluhar",
        "BossPlayer": false,
        "BossZone": "ZoneRailStrorage,ZonePTOR2,ZoneBarrack,ZoneSubStorage",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": [
            {
                "BossEscortAmount": "2",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerGluharAssault"
            },
            {
                "BossEscortAmount": "2",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerGluharSecurity"
            },
            {
                "BossEscortAmount": "2",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerGluharScout"
            }
        ],
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossSanitarData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerSanitar",
        "BossName": "bossSanitar",
        "BossPlayer": false,
        "BossZone": "ZoneGreenHouses,ZoneSanatorium1,ZoneGreenHouses,ZoneSanatorium2,ZonePort",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossKolontayData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerKolontaySecurity",
        "BossName": "bossKolontay",
        "BossPlayer": false,
        "BossZone": "ZoneClimova,ZoneMvd",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": [
            {
                "BossEscortAmount": "2",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerKolontayAssault"
            },
            {
                "BossEscortAmount": "2",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerKolontaySecurity"
            },
            {
                "BossEscortAmount": "0",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerGluharScout"
            }
        ],
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossBoarData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "6",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerBoar",
        "BossName": "bossBoar",
        "BossPlayer": false,
        "BossZone": "ZoneCarShowroom",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": [
            {
                "BossEscortAmount": "4",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerBoar"
            },
            {
                "BossEscortAmount": "1",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerBoarClose1"
            },
            {
                "BossEscortAmount": "1",
                "BossEscortDifficult": [
                    "normal"
                ],
                "BossEscortType": "followerBoarClose2"
            }
        ],
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossKojaniyData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "followerKojaniy",
        "BossName": "bossKojaniy",
        "BossPlayer": false,
        "BossZone": "ZoneWoodCutter",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossPartisanData = [{
        "BossChance": 30,
        "BossDifficult": "normal",
        "BossEscortAmount": "0",
        "BossEscortDifficult": "normal",
        "BossEscortType": "sectantWarrior",
        "BossName": "bossPartisan",
        "BossPlayer": false,
        "BossZone": "",
        "Delay": 0,
        "DependKarma": true,
        "DependKarmaPVE": false,
        "ForceSpawn": true,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "PARTISAN_TRIGGER",
        "TriggerName": "botEvent"
    }];
exports.sectantPriestData = [{
        "BossChance": 15,
        "BossDifficult": "normal",
        "BossEscortAmount": "2,2,3,3,4",
        "BossEscortDifficult": "normal",
        "BossEscortType": "sectantWarrior",
        "BossName": "sectantPriest",
        "BossPlayer": false,
        "BossZone": "ZoneMiniHouse,ZoneBrokenVill",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.arenaFighterEventData = [{
        "BossChance": 5,
        "BossDifficult": "normal",
        "BossEscortAmount": "3,4",
        "BossEscortDifficult": "normal",
        "BossEscortType": "arenaFighterEvent",
        "BossName": "arenaFighterEvent",
        "BossPlayer": false,
        "BossZone": "ZoneMiniHouse,ZoneClearVill,ZoneRoad,ZoneBrokenVill,ZoneScavBase2",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": [],
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.pmcBotData = [
    {
        "BossChance": 40,
        "BossDifficult": "normal",
        "BossEscortAmount": "2,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }
];
exports.pmcBotReserveData = [
    {
        "BossChance": 40,
        "BossDifficult": "normal",
        "BossEscortAmount": "2,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "ZoneRailStrorage",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": null,
        "Time": 1470,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 40,
        "BossDifficult": "normal",
        "BossEscortAmount": "2,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "ZoneRailStrorage",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00632_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 40,
        "BossDifficult": "normal",
        "BossEscortAmount": "2,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "ZoneSubCommand",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00000_D2_LEVER",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 40,
        "BossDifficult": "normal",
        "BossEscortAmount": "2,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "ZoneSubCommand",
        "Delay": 0,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "pve",
            "regular"
        ],
        "Supports": null,
        "Time": 3,
        "TriggerId": "raider_simple_patroling",
        "TriggerName": "interactObject"
    }
];
exports.pmcBotLaboratoryData = [
    {
        "BossChance": 60,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor1",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 900,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 60,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor2",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 300,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 45,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneBasement",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 450,
        "TriggerId": "autoId_00008_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 45,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneBasement",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 800,
        "TriggerId": "autoId_00010_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 40,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneBasement",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00007_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 45,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor2",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00007_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor1",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 600,
        "TriggerId": "autoId_00632_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor2",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 600,
        "TriggerId": "autoId_00632_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor1",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00012_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor2",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00012_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor1",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 1200,
        "TriggerId": "autoId_00014_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,2,2,1,1,2,2,2,2,1,1,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor2",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": 1200,
        "TriggerId": "autoId_00014_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,2,2,1,1,2,2,2,2,1,1,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor1",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00009_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneFloor2",
        "Delay": 0,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00009_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 35,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneGate2",
        "Delay": 8,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00014_EXFIL",
        "TriggerName": "interactObject"
    },
    {
        "BossChance": 45,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,1,1,2,2,2,1,1,1,1,2,2,2,3",
        "BossEscortDifficult": "normal",
        "BossEscortType": "pmcBot",
        "BossName": "pmcBot",
        "BossPlayer": false,
        "BossZone": "BotZoneGate1",
        "Delay": 8,
        "IgnoreMaxBots": false,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "autoId_00632_EXFIL",
        "TriggerName": "interactObject"
    }
];
exports.exUsecData = [
    {
        "BossChance": 80,
        "BossDifficult": "normal",
        "BossEscortAmount": "1",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "exUsec",
        "BossPlayer": false,
        "BossZone": "Zone_Blockpost",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 80,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "exUsec",
        "BossPlayer": false,
        "BossZone": "Zone_RoofContainers",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 50,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "exUsec",
        "BossPlayer": false,
        "BossZone": "Zone_TreatmentRocks",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 50,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,1,2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "exUsec",
        "BossPlayer": false,
        "BossZone": "Zone_TreatmentBeach",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 80,
        "BossDifficult": "normal",
        "BossEscortAmount": "0",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "exUsec",
        "BossPlayer": false,
        "BossZone": "Zone_RoofRocks",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 80,
        "BossDifficult": "normal",
        "BossEscortAmount": "1",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "exUsec",
        "BossPlayer": false,
        "BossZone": "Zone_RoofBeach",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    },
    {
        "BossChance": 20,
        "BossDifficult": "normal",
        "BossEscortAmount": "1,2",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "exUsec",
        "BossPlayer": false,
        "BossZone": "Zone_Hellicopter",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }
];
exports.gifterData = [{
        "BossChance": 0,
        "BossDifficult": "normal",
        "BossEscortAmount": "0",
        "BossEscortDifficult": "normal",
        "BossEscortType": "gifter",
        "BossName": "gifter",
        "BossPlayer": false,
        "BossZone": "",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossPunisherData = [{
        "BossChance": 0,
        "BossDifficult": "impossible",
        "BossEscortAmount": "4",
        "BossEscortDifficult": "impossible",
        "BossEscortType": "exUsec",
        "BossName": "bossPunisher",
        "BossPlayer": false,
        "BossZone": "",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
exports.bossLegionData = [{
        "BossChance": 0,
        "BossDifficult": "normal",
        "BossEscortAmount": "0",
        "BossEscortDifficult": "normal",
        "BossEscortType": "exUsec",
        "BossName": "bossLegion",
        "BossPlayer": false,
        "BossZone": "",
        "Delay": 0,
        "DependKarma": false,
        "DependKarmaPVE": false,
        "ForceSpawn": false,
        "IgnoreMaxBots": true,
        "RandomTimeSpawn": false,
        "SpawnMode": [
            "regular",
            "pve"
        ],
        "Supports": null,
        "Time": -1,
        "TriggerId": "",
        "TriggerName": ""
    }];
//# sourceMappingURL=Bosses.js.map