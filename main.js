// FNBManager | main.js

import ArgvParser from "./Sys/ArgsParser.js";
import FabricParser from './parser/FabricParser.js';
import OutHandler from "./Sys/OutHandler.js";

class FNBManager{
    constructor(args){
        this.args = args;
    }

    run(){
        const argsParser = new ArgvParser(this.args);
        const config = argsParser.GetConfig();
        const outHandler = new OutHandler(config.out);
        config.outHandler = outHandler; 

        const parser = FabricParser.Create(config)
        parser.Parser();
    }
}

const entryPoint = new FNBManager();
entryPoint.run()