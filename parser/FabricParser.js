// Fabric | FabricParser.js

import TextParser from './Text'

class FabricParser{
    constructor(config){
        this.config = config;
    }
    Create(){
        const {type, url, out} = this.config;

        switch(type){
            case 'text': 
                return new TextParser(url, out);
            
            default:
                throw new Error(`Error: not found type ${type}`)
            
        }
    }
}

export default FabricParser;