"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../config/config.json");
const Spawning_1 = require("./Spawning/Spawning");
const config_json_2 = __importDefault(require("../config/config.json"));
const GlobalValues_1 = require("./GlobalValues");
const routes_1 = require("./Routes/routes");
class Moar {
    postSptLoad(container) {
        if (config_json_1.enableBotSpawning) {
            GlobalValues_1.globalValues.baseConfig = config_json_2.default;
            GlobalValues_1.globalValues.overrideConfig = {};
            // adjustSpawnPoints(container);
            const logger = container.resolve("WinstonLogger");
            logger.info("\nMOAR: Starting up, may the bots ever be in your favour!");
            (0, Spawning_1.buildWaves)(container);
        }
    }
    preSptLoad(container) {
        if (config_json_1.enableBotSpawning)
            (0, routes_1.setupRoutes)(container);
    }
}
module.exports = { mod: new Moar() };
//# sourceMappingURL=mod.js.map