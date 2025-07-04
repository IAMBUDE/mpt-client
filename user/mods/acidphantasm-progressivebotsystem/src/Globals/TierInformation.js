"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TierInformation = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
class TierInformation {
    tier0;
    tier1;
    tier2;
    tier3;
    tier4;
    tier5;
    tier6;
    tier7;
    tier0mods;
    tier1mods;
    tier2mods;
    tier3mods;
    tier4mods;
    tier5mods;
    tier6mods;
    tier7mods;
    tier0chances;
    tier1chances;
    tier2chances;
    tier3chances;
    tier4chances;
    tier5chances;
    tier6chances;
    tier7chances;
    tier0ammo;
    tier1ammo;
    tier2ammo;
    tier3ammo;
    tier4ammo;
    tier5ammo;
    tier6ammo;
    tier7ammo;
    tier0appearance;
    tier1appearance;
    tier2appearance;
    tier3appearance;
    tier4appearance;
    tier5appearance;
    tier6appearance;
    tier7appearance;
    tiers = [
        {
            tier: 1,
            playerMinimumLevel: 1,
            playerMaximumLevel: 10,
            botMinLevelVariance: 10,
            botMaxLevelVariance: 5,
            scavMinLevelVariance: 10,
            scavMaxLevelVariance: 5
        },
        {
            tier: 2,
            playerMinimumLevel: 11,
            playerMaximumLevel: 20,
            botMinLevelVariance: 10,
            botMaxLevelVariance: 5,
            scavMinLevelVariance: 10,
            scavMaxLevelVariance: 5
        },
        {
            tier: 3,
            playerMinimumLevel: 21,
            playerMaximumLevel: 30,
            botMinLevelVariance: 15,
            botMaxLevelVariance: 7,
            scavMinLevelVariance: 15,
            scavMaxLevelVariance: 7
        },
        {
            tier: 4,
            playerMinimumLevel: 31,
            playerMaximumLevel: 40,
            botMinLevelVariance: 20,
            botMaxLevelVariance: 10,
            scavMinLevelVariance: 20,
            scavMaxLevelVariance: 10
        },
        {
            tier: 5,
            playerMinimumLevel: 41,
            playerMaximumLevel: 50,
            botMinLevelVariance: 30,
            botMaxLevelVariance: 15,
            scavMinLevelVariance: 30,
            scavMaxLevelVariance: 15
        },
        {
            tier: 6,
            playerMinimumLevel: 51,
            playerMaximumLevel: 60,
            botMinLevelVariance: 40,
            botMaxLevelVariance: 20,
            scavMinLevelVariance: 40,
            scavMaxLevelVariance: 20
        },
        {
            tier: 7,
            playerMinimumLevel: 61,
            playerMaximumLevel: 100,
            botMinLevelVariance: 79,
            botMaxLevelVariance: 20,
            scavMinLevelVariance: 79,
            scavMaxLevelVariance: 20
        }
    ];
    armorPlateWeights = [
        {
            "levelRange": {
                "min": 1,
                "max": 10
            },
            "front_plate": {
                "2": 10,
                "3": 80,
                "4": 10
            },
            "back_plate": {
                "2": 10,
                "3": 80,
                "4": 10
            },
            "side_plate": {
                "2": 10,
                "3": 80,
                "4": 10
            },
            "left_side_plate": {
                "2": 10,
                "3": 80,
                "4": 10
            },
            "right_side_plate": {
                "2": 10,
                "3": 80,
                "4": 10
            }
        },
        {
            "levelRange": {
                "min": 11,
                "max": 20
            },
            "front_plate": {
                "3": 65,
                "4": 32,
                "5": 3
            },
            "back_plate": {
                "3": 65,
                "4": 32,
                "5": 3
            },
            "side_plate": {
                "3": 65,
                "4": 32,
                "5": 3
            },
            "left_side_plate": {
                "3": 65,
                "4": 32,
                "5": 3
            },
            "right_side_plate": {
                "3": 65,
                "4": 32,
                "5": 3
            }
        },
        {
            "levelRange": {
                "min": 21,
                "max": 30
            },
            "front_plate": {
                "3": 15,
                "4": 70,
                "5": 10,
                "6": 5
            },
            "back_plate": {
                "3": 15,
                "4": 70,
                "5": 10,
                "6": 5
            },
            "side_plate": {
                "3": 15,
                "4": 70,
                "5": 10,
                "6": 5
            },
            "left_side_plate": {
                "3": 15,
                "4": 70,
                "5": 10,
                "6": 5
            },
            "right_side_plate": {
                "3": 15,
                "4": 70,
                "5": 10,
                "6": 5
            }
        },
        {
            "levelRange": {
                "min": 31,
                "max": 40
            },
            "front_plate": {
                "3": 1,
                "4": 50,
                "5": 39,
                "6": 10
            },
            "back_plate": {
                "3": 1,
                "4": 50,
                "5": 39,
                "6": 10
            },
            "side_plate": {
                "3": 1,
                "4": 50,
                "5": 39,
                "6": 10
            },
            "left_side_plate": {
                "3": 1,
                "4": 50,
                "5": 39,
                "6": 10
            },
            "right_side_plate": {
                "3": 1,
                "4": 50,
                "5": 39,
                "6": 10
            }
        },
        {
            "levelRange": {
                "min": 41,
                "max": 50
            },
            "front_plate": {
                "4": 15,
                "5": 70,
                "6": 15
            },
            "back_plate": {
                "4": 15,
                "5": 70,
                "6": 15
            },
            "side_plate": {
                "4": 15,
                "5": 70,
                "6": 15
            },
            "left_side_plate": {
                "4": 15,
                "5": 70,
                "6": 15
            },
            "right_side_plate": {
                "4": 15,
                "5": 70,
                "6": 15
            }
        },
        {
            "levelRange": {
                "min": 51,
                "max": 60
            },
            "front_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "back_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "side_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "left_side_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "right_side_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            }
        },
        {
            "levelRange": {
                "min": 61,
                "max": 100
            },
            "front_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "back_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "side_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "left_side_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            },
            "right_side_plate": {
                "4": 5,
                "5": 75,
                "6": 20
            }
        }
    ];
    nonScavNonPMCArmorPlateWeights = [
        {
            "levelRange": {
                "min": 1,
                "max": 100
            },
            "front_plate": {
                "2": 1,
                "3": 9,
                "4": 50,
                "5": 35,
                "6": 5
            },
            "back_plate": {
                "2": 1,
                "3": 9,
                "4": 50,
                "5": 35,
                "6": 5
            },
            "side_plate": {
                "2": 1,
                "3": 9,
                "4": 50,
                "5": 35,
                "6": 5
            },
            "left_side_plate": {
                "2": 1,
                "3": 9,
                "4": 50,
                "5": 35,
                "6": 5
            },
            "right_side_plate": {
                "2": 1,
                "3": 9,
                "4": 50,
                "5": 35,
                "6": 5
            }
        }
    ];
    scavArmorPlateWeights = [
        {
            "levelRange": {
                "min": 1,
                "max": 100
            },
            "front_plate": {
                "2": 15,
                "3": 65,
                "4": 19,
                "5": 1
            },
            "back_plate": {
                "2": 15,
                "3": 65,
                "4": 19,
                "5": 1
            },
            "side_plate": {
                "2": 15,
                "3": 65,
                "4": 19,
                "5": 1
            },
            "left_side_plate": {
                "2": 15,
                "3": 65,
                "4": 19,
                "5": 1
            },
            "right_side_plate": {
                "2": 15,
                "3": 65,
                "4": 19,
                "5": 1
            }
        }
    ];
}
exports.TierInformation = TierInformation;
//# sourceMappingURL=TierInformation.js.map