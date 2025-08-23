// Fabric | FabricParser.js

import TextParser from './Text.js';
import ImgParser from './Img.js';

// Класс фабрики для создания класса
class FabricParser{
    constructor(config){
        this.config = config;
    }
    // Метод создание объекта по классу парсера
    static Create(config){
        const {type} = config;
        // Выбирает какой класс создать взависимость от type в объекте config
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