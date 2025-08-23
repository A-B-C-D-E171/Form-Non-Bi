// Fabric | FabricParser.js

import TextParser from './Text.js';
import ImgParser from './Img.js';

class FabricParser{
    constructor(config){
        this.config = config;
    }
    static Create(config){
        const {type} = config;

        switch(type){
            case 'text': 
                return new TextParser(config);
            case 'img':
                return new ImgParser(config);
            
            default:
                throw new Error(`Error: not found type ${type}`)
            
        }
    }
}

export default FabricParser;