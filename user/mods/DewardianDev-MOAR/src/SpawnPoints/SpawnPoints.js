"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustSpawnPoints = void 0;
const customs_json_1 = __importDefault(require("./zoneSpawnPoints/customs.json"));
const adjustSpawnPoints = (container) => {
    const hashUtil = container.resolve("HashUtil");
    const databaseServer = container.resolve("DatabaseServer");
    const locations = databaseServer.getTables().locations;
    // const saved = {};
    // const sidesTypes = {};
    // const Categories = {};
    // locations.bigmap.base.SpawnPointParams.forEach(({ BotZoneName, ...rest }) => {
    //   rest.Sides.forEach((side) => {
    //     if (!sidesTypes[side]) sidesTypes[side] = { BotZoneName, rest };
    //   });
    //   rest.Categories.forEach((cat) => {
    //     if (!Categories[cat]) Categories[cat] = { BotZoneName, rest };
    //   });
    //   if (saved[BotZoneName]) saved[BotZoneName].push(rest);
    //   else saved[BotZoneName] = [rest];
    // });
    for (let map in locations) {
        if (map !== "bigmap")
            continue;
        if (map.toLowerCase() === "base") {
            continue;
        }
        let mapBase = locations[map].base;
        if (mapBase.Locked === true || mapBase?.EnableCoop === undefined) {
            continue;
        }
        let newSpawnPointParams = [];
        let count = 0;
        for (const zoneName in customs_json_1.default.Zones) {
            const zones = customs_json_1.default.Zones[zoneName];
            // mapBase.OpenZones += "," + zoneName;
            // if (globalValues.addedMapZones[map]) {
            //   globalValues.addedMapZones[map].push(zoneName);
            // } else {
            //   globalValues.addedMapZones[map] = [zoneName];
            // }
            const pmc = Math.random() > 0.5;
            zones.forEach(({ x, y, z }) => {
                newSpawnPointParams.push({
                    BotZoneName: "",
                    Categories: pmc ? ["Coop", "Opposite", "Player", "Group"] : ["Bot"],
                    ColliderParams: {
                        _parent: "SpawnSphereParams",
                        _props: {
                            Center: { x: 0, y: 0, z: 0 },
                            Radius: 10.0,
                        },
                    },
                    CorePointId: 0,
                    DelayToCanSpawnSec: 2,
                    Id: hashUtil.generate(),
                    Infiltration: pmc
                        ? Math.random() > 0.5
                            ? "Boiler Tanks"
                            : "Customs"
                        : "",
                    Position: {
                        x,
                        y,
                        z,
                    },
                    Rotation: Math.round(Math.random() * 360 * 100) / 100,
                    Sides: pmc ? ["Pmc"] : ["Savage"],
                });
            });
            count++;
        }
        mapBase.SpawnPointParams = newSpawnPointParams;
        // console.log(JSON.stringify(mapBase.SpawnPointParams));
    }
    //   export interface SpawnPointParam {
    //     BotZoneName: string;
    //     Categories: string[];
    //     ColliderParams: ColliderParams;
    //     CorePointId: number;
    //     DelayToCanSpawnSec: number;
    //     Id: string;
    //     Infiltration: string;
    //     Position: Ixyz;
    //     Rotation: number;
    //     Sides: string[];
    // }
    // const thing = {
    //   BotZoneName: "ZoneBlockPost",
    //   Categories: ["Bot"],
    //   ColliderParams: {
    //     _parent: "SpawnSphereParams",
    //     _props: { Center: { x: 0, y: 0, z: 0 }, Radius: 80 },
    //   },
    //   CorePointId: 19,
    //   DelayToCanSpawnSec: 6,
    //   Id: "001e44f1-406b-4121-be96-aa1e77c3d558",
    //   Infiltration: "",
    //   Position: { x: 510.865, y: 3.43099976, z: 46.168 },
    //   Rotation: 186.6658,
    //   Sides: ["Savage"],
    // };
};
exports.adjustSpawnPoints = adjustSpawnPoints;
//# sourceMappingURL=SpawnPoints.js.map