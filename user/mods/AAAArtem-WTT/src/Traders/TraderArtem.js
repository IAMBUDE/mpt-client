"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderArtem = void 0;
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
class TraderArtem {
    mydb;
    instanceManager;
    ArtemBaseJson;
    ArtemAssort;
    ArtemQuestAssort;
    traderId = "66bf757f27d0b097db0acea5";
    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param instanceManager WTTInstanceManager
     */
    preSptLoad(instanceManager) {
        this.instanceManager = instanceManager;
        this.ArtemBaseJson = this.instanceManager.traderApi.loadTraderBaseJson(this.traderId);
        this.ArtemAssort = this.instanceManager.traderApi.loadTraderAssortJson(this.traderId);
        this.ArtemQuestAssort = this.instanceManager.traderApi.loadTraderQuestAssortJson(this.traderId);
        this.instanceManager.traderApi.setupTrader(this.traderId, this.ArtemBaseJson);
        if (this.instanceManager.debug) {
            this.instanceManager.logger.log(`[${this.instanceManager.modName}] Trader: Artem Active`, LogTextColor_1.LogTextColor.GREEN);
        }
    }
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     */
    postDBLoad() {
        this.mydb = this.instanceManager.traderApi.loadTraderDbRecursive(this.traderId);
        this.instanceManager.traderApi.addTraderToDb(this.mydb, this.traderId, this.ArtemBaseJson, this.ArtemAssort, this.ArtemQuestAssort);
        const insuranceConfig = this.instanceManager.configServer.getConfig(ConfigTypes_1.ConfigTypes.INSURANCE);
        insuranceConfig.returnChancePercent[this.traderId] = 95;
    }
}
exports.TraderArtem = TraderArtem;
//# sourceMappingURL=TraderArtem.js.map