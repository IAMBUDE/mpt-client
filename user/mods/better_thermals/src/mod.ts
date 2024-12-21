import { DependencyContainer } from "tsyringe";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

class Mod implements IPreSptLoadMod, IPostDBLoadMod {
  public postSptLoad(container: DependencyContainer): void {
    // get the logger from the server container
    const logger = container.resolve<ILogger>("WinstonLogger");

    logger.info("Loading: thermals Post DB load");
  }
}

export const mod = new Mod();
