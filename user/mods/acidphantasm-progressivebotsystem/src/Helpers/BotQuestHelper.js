"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotQuestHelper = void 0;
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const Bots_1 = require("../Enums/Bots");
const ModConfig_1 = require("../Globals/ModConfig");
const APBSLogger_1 = require("../Utils/APBSLogger");
const EquipmentSlots_1 = require("C:/snapshot/project/obj/models/enums/EquipmentSlots");
const RaidInformation_1 = require("../Globals/RaidInformation");
const RandomUtil_1 = require("C:/snapshot/project/obj/utils/RandomUtil");
const BaseClasses_1 = require("C:/snapshot/project/obj/models/enums/BaseClasses");
let BotQuestHelper = class BotQuestHelper {
    apbsLogger;
    raidInformation;
    randomUtil;
    fishingGear = {
        isQuestEnabled: true,
        questName: "Fishing Gear",
        requiredMap: [
            "shoreline"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [
            "mod_stock",
            "mod_bipod",
            "mod_muzzle",
            "mod_tactical",
            "mod_sight_rear",
            "mod_magazine"
        ],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "55801eed4bdc2d89578b4588"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 35,
        maxLevel: 45
    };
    humanitarianSupplies = {
        isQuestEnabled: true,
        questName: "Humanitarian Supplies",
        requiredMap: [
            "shoreline"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.ARMOR_VEST,
            EquipmentSlots_1.EquipmentSlots.HEADWEAR
        ],
        Headwear: [
            "5aa7d03ae5b5b00016327db5"
        ],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [
            "5ab8e4ed86f7742d8e50c7fa"
        ],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [],
        Holster: [],
        Scabbard: [],
        minLevel: 11,
        maxLevel: 21
    };
    setup = {
        isQuestEnabled: true,
        questName: "Setup",
        requiredMap: [
            "bigmap"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.TACTICAL_VEST,
            EquipmentSlots_1.EquipmentSlots.HEADWEAR,
            "LongRange"
        ],
        Headwear: [
            "59e7708286f7742cbd762753"
        ],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [
            "572b7adb24597762ae139821",
            "5fd4c5477a8d854fa0105061"
        ],
        Backpack: [],
        PrimaryWeapon: [
            "54491c4f4bdc2db1078b4568",
            "56dee2bdd2720bc8328b4567",
            "606dae0ab0e443224b421bb7",
            "5580223e4bdc2d1c128b457f",
            "64748cb8de82c85eaf0a273a",
            "61f7c9e189e6fb1a5e3ea78d"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 18,
        maxLevel: 28
    };
    punisherPart1 = {
        isQuestEnabled: true,
        questName: "Punisher Part 1",
        requiredMap: [],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "5abcbc27d8ce8700182eceeb",
            "59d6088586f774275f37482f",
            "59ff346386f77477562ff5e2",
            "5a0ec13bfcdbcb00165aa685",
            "59e6152586f77473dc057aa1",
            "5ac66d2e5acfc43b321d4b53",
            "5ac66d725acfc43b321d4b60"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 17,
        maxLevel: 27
    };
    punisherPart2 = {
        isQuestEnabled: true,
        questName: "Punisher Part 2",
        requiredMap: [
            "rezervbase"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [
            "mod_barrel",
            "mod_muzzle"
        ],
        requiredWeaponModBaseClasses: [
            BaseClasses_1.BaseClasses.SILENCER
        ],
        requiredEquipmentSlots: [],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [],
        Holster: [],
        Scabbard: [],
        minLevel: 18,
        maxLevel: 28
    };
    punisherPart3 = {
        isQuestEnabled: true,
        questName: "Punisher Part 3",
        requiredMap: [
            "bigmap"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "583990e32459771419544dd2",
            "5839a40f24597726f856b511",
            "57dc2fa62459775949412633",
            "628b9c37a733087d0d7fe84b"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 19,
        maxLevel: 29
    };
    punisherPart4 = {
        isQuestEnabled: true,
        questName: "Punisher Part 4",
        requiredMap: [
            "lighthouse"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.FACE_COVER,
            EquipmentSlots_1.EquipmentSlots.TACTICAL_VEST,
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [
            "572b7f1624597762ae139822",
            "5b432f3d5acfc4704b4a1dfb",
            "5fd8d28367cb5e077335170f",
            "5ab8f4ff86f77431c60d91ba",
            "5ab8f39486f7745cd93a1cca",
            "607f201b3c672b3b3a24a800"
        ],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [
            "572b7adb24597762ae139821",
            "5fd4c5477a8d854fa0105061"
        ],
        Backpack: [],
        PrimaryWeapon: [
            "576165642459773c7a400233",
            "54491c4f4bdc2db1078b4568",
            "5a7828548dc32e5a9c28b516",
            "5e870397991fd70db46995c8",
            "56dee2bdd2720bc8328b4567",
            "5580223e4bdc2d1c128b457f",
            "606dae0ab0e443224b421bb7",
            "60db29ce99594040e04c4a27",
            "6259b864ebedf17603599e88",
            "64748cb8de82c85eaf0a273a",
            "67124dcfa3541f2a1f0e788b",
            "66ffa9b66e19cc902401c5e8"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 20,
        maxLevel: 30
    };
    punisherPart5 = {
        isQuestEnabled: true,
        questName: "Punisher Part 5",
        requiredMap: [],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.ARMOR_VEST,
            EquipmentSlots_1.EquipmentSlots.HEADWEAR
        ],
        Headwear: [
            "5aa7cfc0e5b5b00015693143",
            "5a7c4850e899ef00150be885"
        ],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [
            "5648a7494bdc2d9d488b4583",
            "607f20859ee58b18e41ecd90"
        ],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [],
        Holster: [],
        Scabbard: [],
        minLevel: 20,
        maxLevel: 30
    };
    punisherPart6 = {
        isQuestEnabled: true,
        questName: "Punisher Part 6",
        requiredMap: [
            "bigmap",
            "interchange",
            "laboratory",
            "lighthouse",
            "rezervbase",
            "sandbox",
            "sandbox_high",
            "shoreline",
            "tarkovstreets",
            "woods"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            "ShortRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "5c46fbd72e2216398b5a8c9c"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 21,
        maxLevel: 31
    };
    testDrivePart1 = {
        isQuestEnabled: true,
        questName: "Test Drive Part 1",
        requiredMap: [],
        requiredWeaponMods: [
            "59bffc1f86f77435b128b872",
            "59bffbb386f77435b379b9c2",
            "617151c1d92c473c770214ab",
            "57c69dd424597774c03b7bbc"
        ],
        requiredWeaponModSlots: [
            "mod_barrel",
            "mod_muzzle",
            "mod_scope",
            "mod_mount"
        ],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            "ShortRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "5aafa857e5b5b00018480968"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 30,
        maxLevel: 40
    };
    testDrivePart2 = {
        isQuestEnabled: true,
        questName: "Test Drive Part 2",
        requiredMap: [
            "tarkovstreets"
        ],
        requiredWeaponMods: [
            "62ff9920fe938a24c90c10d2"
        ],
        requiredWeaponModSlots: [
            "mod_muzzle",
            "mod_scope",
            "mod_reciever",
            "mod_mount"
        ],
        requiredWeaponModBaseClasses: [
            BaseClasses_1.BaseClasses.SILENCER
        ],
        requiredEquipmentSlots: [
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "62e14904c2699c0ec93adc47"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 30,
        maxLevel: 40
    };
    testDrivePart3 = {
        isQuestEnabled: true,
        questName: "Test Drive Part 3",
        requiredMap: [
            "lighthouse"
        ],
        requiredWeaponMods: [
            "5c0517910db83400232ffee5"
        ],
        requiredWeaponModSlots: [
            "mod_muzzle",
            "mod_scope",
            "mod_mount"
        ],
        requiredWeaponModBaseClasses: [
            BaseClasses_1.BaseClasses.SILENCER
        ],
        requiredEquipmentSlots: [
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "6499849fc93611967b034949"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 30,
        maxLevel: 40
    };
    testDrivePart4 = {
        isQuestEnabled: true,
        questName: "Test Drive Part 4",
        requiredMap: [
            "shoreline"
        ],
        requiredWeaponMods: [
            "618a75f0bd321d49084cd399",
            "618a75c9a3884f56c957ca1b"
        ],
        requiredWeaponModSlots: [
            "mod_scope",
            "mod_mount"
        ],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "65268d8ecb944ff1e90ea385"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 40,
        maxLevel: 50
    };
    testDrivePart5 = {
        isQuestEnabled: true,
        questName: "Test Drive Part 5",
        requiredMap: [
            "factory4_day",
            "factory4_night"
        ],
        requiredWeaponMods: [
            "668670432b934a68630a7fe8",
            "66867310f3734a938b077f79",
            "655f13e0a246670fb0373245"
        ],
        requiredWeaponModSlots: [
            "mod_scope",
            "mod_barrel",
            "mod_stock"
        ],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "6680304edadb7aa61d00cef0"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 40,
        maxLevel: 50
    };
    theGoodTimesPart1 = {
        isQuestEnabled: true,
        questName: "The Good Times Part 1",
        requiredMap: [
            "factory4_day",
            "factory4_night"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.ARMOR_VEST,
            EquipmentSlots_1.EquipmentSlots.HEADWEAR,
            "LongRange"
        ],
        Headwear: [
            "5645bc214bdc2d363b8b4571"
        ],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [
            "545cdb794bdc2d3a198b456a"
        ],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "5447a9cd4bdc2dbd208b4567"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 30,
        maxLevel: 40
    };
    dangerousProps = {
        isQuestEnabled: true,
        questName: "Dangerous Props",
        requiredMap: [],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            "LongRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "66ffa9b66e19cc902401c5e8",
            "67124dcfa3541f2a1f0e788b"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 35,
        maxLevel: 45
    };
    connectionsUpNorth = {
        isQuestEnabled: true,
        questName: "Connections Up North",
        requiredMap: [],
        requiredWeaponMods: [
            "5d1b5e94d7ad1a2b865a96b0",
            "5a1eaa87fcdbcb001865f75e",
            "5a1ead28fcdbcb001912fa9f"
        ],
        requiredWeaponModSlots: [
            "mod_mount",
            "mod_scope"
        ],
        requiredWeaponModBaseClasses: [
            BaseClasses_1.BaseClasses.SPECIAL_SCOPE
        ],
        requiredEquipmentSlots: [
            "ShortRange"
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "5bfea6e90db834001b7347f3",
            "588892092459774ac91d4b11",
            "55801eed4bdc2d89578b4588",
            "5df24cf80dee1b22f862e9bc",
            "627e14b21713922ded6f2c15"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 35,
        maxLevel: 45
    };
    peacekeepingMission = {
        isQuestEnabled: true,
        questName: "Peacekeeping Mission",
        requiredMap: [
            "bigmap",
            "interchange",
            "sandbox",
            "sandbox_high",
            "shoreline",
            "tarkovstreets",
            "woods"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.ARMOR_VEST,
            EquipmentSlots_1.EquipmentSlots.HEADWEAR,
            "LongRange"
        ],
        Headwear: [
            "5aa7d03ae5b5b00016327db5"
        ],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [
            "5ab8e4ed86f7742d8e50c7fa"
        ],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [
            "5447a9cd4bdc2dbd208b4567"
        ],
        Holster: [],
        Scabbard: [],
        minLevel: 33,
        maxLevel: 43
    };
    dandies = {
        isQuestEnabled: true,
        questName: "Dandies",
        requiredMap: [
            "tarkovstreets"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.EYEWEAR,
            EquipmentSlots_1.EquipmentSlots.HEADWEAR
        ],
        Headwear: [
            "60bf74184a63fc79b60c57f6"
        ],
        Earpiece: [],
        FaceCover: [],
        ArmorVest: [],
        Eyewear: [
            "5aa2b9aee5b5b00015693121"
        ],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [],
        Holster: [],
        Scabbard: [],
        minLevel: 33,
        maxLevel: 43
    };
    decontaminationService = {
        isQuestEnabled: true,
        questName: "Decontamination Service",
        requiredMap: [
            "interchange"
        ],
        requiredWeaponMods: [],
        requiredWeaponModSlots: [],
        requiredWeaponModBaseClasses: [],
        requiredEquipmentSlots: [
            EquipmentSlots_1.EquipmentSlots.FACE_COVER
        ],
        Headwear: [],
        Earpiece: [],
        FaceCover: [
            "59e7715586f7742ee5789605",
            "5b432c305acfc40019478128",
            "60363c0c92ec1c31037959f5"
        ],
        ArmorVest: [],
        Eyewear: [],
        TacticalVest: [],
        Backpack: [],
        PrimaryWeapon: [],
        Holster: [],
        Scabbard: [],
        minLevel: 35,
        maxLevel: 45
    };
    availableQuests = [
        this.humanitarianSupplies,
        this.setup,
        this.punisherPart1,
        this.punisherPart2,
        this.punisherPart3,
        this.punisherPart4,
        this.punisherPart5,
        this.punisherPart6,
        this.testDrivePart1,
        this.testDrivePart2,
        this.testDrivePart3,
        this.testDrivePart4,
        this.testDrivePart5,
        this.theGoodTimesPart1,
        this.dangerousProps,
        this.connectionsUpNorth,
        this.peacekeepingMission,
        this.dandies,
        this.decontaminationService,
        this.fishingGear
    ];
    constructor(apbsLogger, raidInformation, randomUtil) {
        this.apbsLogger = apbsLogger;
        this.raidInformation = raidInformation;
        this.randomUtil = randomUtil;
    }
    shouldBotHaveQuest(isPMC) {
        if (!isPMC)
            return false;
        if (ModConfig_1.ModConfig.config.pmcBots.questConfig.enable && this.randomUtil.getChance100(ModConfig_1.ModConfig.config.pmcBots.questConfig.chance)) {
            return true;
        }
        return false;
    }
    getQuestFromInternalDatabase(botLevel, location) {
        const questArray = this.getValidQuestArray(botLevel, location);
        if (questArray.length === 0)
            return undefined;
        const chosenQuest = Math.floor(Math.random() * questArray.length);
        return questArray[chosenQuest];
    }
    getValidQuestArray(botLevel, location) {
        const questArray = [];
        for (const quest in this.availableQuests) {
            const questData = this.availableQuests[quest];
            if (!questData.isQuestEnabled)
                continue;
            if (questData.minLevel <= botLevel && questData.maxLevel >= botLevel) {
                if (questData.requiredMap && !questData.requiredMap.includes(location.toLowerCase()))
                    continue;
                questArray.push(questData);
            }
        }
        if (questArray.length === 0) {
            // No quests found, return empty array
            return questArray;
        }
        return questArray;
    }
    isPMC(botType) {
        botType = botType.toLowerCase();
        return Object.values(Bots_1.PMCBots).includes(botType);
    }
};
exports.BotQuestHelper = BotQuestHelper;
exports.BotQuestHelper = BotQuestHelper = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("APBSLogger")),
    __param(1, (0, tsyringe_1.inject)("RaidInformation")),
    __param(2, (0, tsyringe_1.inject)("RandomUtil")),
    __metadata("design:paramtypes", [typeof (_a = typeof APBSLogger_1.APBSLogger !== "undefined" && APBSLogger_1.APBSLogger) === "function" ? _a : Object, typeof (_b = typeof RaidInformation_1.RaidInformation !== "undefined" && RaidInformation_1.RaidInformation) === "function" ? _b : Object, typeof (_c = typeof RandomUtil_1.RandomUtil !== "undefined" && RandomUtil_1.RandomUtil) === "function" ? _c : Object])
], BotQuestHelper);
//# sourceMappingURL=BotQuestHelper.js.map