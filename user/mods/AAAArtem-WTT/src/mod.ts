/* eslint-disable @typescript-eslint/naming-convention */

import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import type { DependencyContainer } from "tsyringe";
import type { ILostOnDeathConfig } from "@spt/models/spt/config/ILostOnDeathConfig";
import type { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import type { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import type { GameController } from "@spt/controllers/GameController";
import type { IEmptyRequestData } from "@spt/models/eft/common/IEmptyRequestData";
import { InRaidHelper } from "@spt/helpers/InRaidHelper";
import type { IPmcData } from "@spt/models/eft/common/IPmcData";
import type { IItem } from "@spt/models/eft/common/tables/IItem";
import config from "../config/config.json";


// WTT imports
import { WTTInstanceManager } from "./WTTInstanceManager";
import { CustomClothingService } from "./CustomClothingService";
import { TraderArtem } from "./Traders/TraderArtem";

// Boss imports
import { CustomItemService } from "./CustomItemService";


class Artem
    implements IPreSptLoadMod, IPostDBLoadMod {
    private instanceManager: WTTInstanceManager = new WTTInstanceManager();
    private version: string;
    private modName = "AAAArtem-WTT";
    private traderArtem: TraderArtem = new TraderArtem();
    private customClothingService: CustomClothingService = new CustomClothingService();

    //#region CustomBosses
    private CustomItemService: CustomItemService = new CustomItemService();

    debug = false;

    public preSptLoad(container: DependencyContainer): void {
        this.instanceManager.preSptLoad(container, this.modName);
        this.instanceManager.debug = this.debug;
        this.customClothingService.preSptLoad(this.instanceManager);
        this.CustomItemService.preSptLoad(this.instanceManager);
        this.traderArtem.preSptLoad(this.instanceManager);
        this.displayCreditBanner();

    }

    public postDBLoad(container: DependencyContainer): void {
        this.instanceManager.postDBLoad(container);
        this.CustomItemService.postDBLoad();
        this.traderArtem.postDBLoad();
        this.customClothingService.postDBLoad();
        if (this.instanceManager.debug)
        {
            this.instanceManager.logger.log(
                `[${this.modName}] Database: Loading complete.`,
                LogTextColor.GREEN
            );
        }

        const caseId = "66326bfd46817c660d015150";
                for (const item of Object.values(this.instanceManager.database.templates.items)) {
                    if (item._parent === "5448bf274bdc2dfc2f8b456a") {
                        // Log the item being processed
                        //console.log("Checking item: " + item._id);
        
                        // Check if the item is the bosscontainer
                        if (item._id === "5c0a794586f77461c458f892") {
                            //console.log("Skipping the bosscontainer");
                        } else {
                            const grids = item._props.Grids;
                            if (grids && grids.length > 0) {
                                const filters = grids[0]._props.filters[0];
                                if (filters) {
                                    if (filters.Filter === undefined) {
                                        filters.Filter = [caseId];
                                    } else {
                                        filters.Filter.push(caseId);
                                    }
                                } else {
                                    this.instanceManager.logger.log(
                                        `[${this.modName}] Failed to add cases to securecase filters (THEY DON'T EXIST DUE TO YOUR SVM SETTINGS). Turn off addToSecureCases in PackNStrap or load this BEFORE SVM. `,
                                        LogTextColor.YELLOW);
                                }
                            }
                        }
                    }
                }


    }

    private displayCreditBanner(): void 
    {
        this.instanceManager.colorLog
        (`[${this.modName}] Artem is Loaded`, "green");
    }


}

module.exports = { mod: new Artem() };
