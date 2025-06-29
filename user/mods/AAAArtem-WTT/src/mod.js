"use strict";
/* eslint-disable @typescript-eslint/naming-convention */
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
// WTT imports
const WTTInstanceManager_1 = require("./WTTInstanceManager");
const CustomClothingService_1 = require("./CustomClothingService");
const TraderArtem_1 = require("./Traders/TraderArtem");
// Boss imports
const CustomItemService_1 = require("./CustomItemService");
class Artem {
    instanceManager = new WTTInstanceManager_1.WTTInstanceManager();
    version;
    modName = "AAAArtem-WTT";
    traderArtem = new TraderArtem_1.TraderArtem();
    customClothingService = new CustomClothingService_1.CustomClothingService();
    //#region CustomBosses
    CustomItemService = new CustomItemService_1.CustomItemService();
    debug = false;
    preSptLoad(container) {
        this.instanceManager.preSptLoad(container, this.modName);
        this.instanceManager.debug = this.debug;
        this.customClothingService.preSptLoad(this.instanceManager);
        this.CustomItemService.preSptLoad(this.instanceManager);
        this.traderArtem.preSptLoad(this.instanceManager);
        this.displayCreditBanner();
    }
    postDBLoad(container) {
        this.instanceManager.postDBLoad(container);
        this.CustomItemService.postDBLoad();
        this.traderArtem.postDBLoad();
        this.customClothingService.postDBLoad();
        if (this.instanceManager.debug) {
            this.instanceManager.logger.log(`[${this.modName}] Database: Loading complete.`, LogTextColor_1.LogTextColor.GREEN);
        }
        const caseId = "66326bfd46817c660d015150";
        for (const item of Object.values(this.instanceManager.database.templates.items)) {
            if (item._parent === "5448bf274bdc2dfc2f8b456a") {
                // Log the item being processed
                //console.log("Checking item: " + item._id);
                // Check if the item is the bosscontainer
                if (item._id === "5c0a794586f77461c458f892") {
                    //console.log("Skipping the bosscontainer");
                }
                else {
                    const grids = item._props.Grids;
                    if (grids && grids.length > 0) {
                        const filters = grids[0]._props.filters[0];
                        if (filters) {
                            if (filters.Filter === undefined) {
                                filters.Filter = [caseId];
                            }
                            else {
                                filters.Filter.push(caseId);
                            }
                        }
                        else {
                            this.instanceManager.logger.log(`[${this.modName}] Failed to add cases to securecase filters (THEY DON'T EXIST DUE TO YOUR SVM SETTINGS). Turn off addToSecureCases in PackNStrap or load this BEFORE SVM. `, LogTextColor_1.LogTextColor.YELLOW);
                        }
                    }
                }
            }
        }
    }
    displayCreditBanner() {
        this.instanceManager.colorLog(`[${this.modName}] Artem is Loaded`, "green");
    }
}
module.exports = { mod: new Artem() };
//# sourceMappingURL=mod.js.map