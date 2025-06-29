/* eslint-disable @typescript-eslint/naming-convention */
import type { WTTInstanceManager } from "../WTTInstanceManager";

import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import type { IInsuranceConfig } from "@spt/models/spt/config/IInsuranceConfig";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";


export class TraderArtem 
{
    mydb: any;
    private instanceManager: WTTInstanceManager;
    private ArtemBaseJson;
    private ArtemAssort;
    private ArtemQuestAssort;

    private readonly traderId = "66bf757f27d0b097db0acea5";
    /**
     * Some work needs to be done prior to SPT code being loaded, registering the profile image + setting trader update time inside the trader config json
     * @param instanceManager WTTInstanceManager
     */
    preSptLoad(instanceManager: WTTInstanceManager): void 
    {
        this.instanceManager = instanceManager;
        
        
        this.ArtemBaseJson = this.instanceManager.traderApi.loadTraderBaseJson(this.traderId);
        this.ArtemAssort = this.instanceManager.traderApi.loadTraderAssortJson(this.traderId);
        this.ArtemQuestAssort = this.instanceManager.traderApi.loadTraderQuestAssortJson(this.traderId);
        this.instanceManager.traderApi.setupTrader(this.traderId, this.ArtemBaseJson);
        if (this.instanceManager.debug) {
            this.instanceManager.logger.log(`[${this.instanceManager.modName}] Trader: Artem Active`, LogTextColor.GREEN);
        }
    }
    
    /**
     * Majority of trader-related work occurs after the aki database has been loaded but prior to SPT code being run
     */
    postDBLoad(): void 
    {
        this.mydb = this.instanceManager.traderApi.loadTraderDbRecursive(this.traderId);

        this.instanceManager.traderApi.addTraderToDb(this.mydb, this.traderId, 
            this.ArtemBaseJson, this.ArtemAssort, this.ArtemQuestAssort);


        const insuranceConfig = this.instanceManager.configServer.getConfig<IInsuranceConfig>(ConfigTypes.INSURANCE);

        insuranceConfig.returnChancePercent[this.traderId] = 95;
    }
}
