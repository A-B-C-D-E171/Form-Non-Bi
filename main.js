// FNBManager | main.js

import ArgvParser from "./Sys/ArgsParser.js";
import FabricParser from './parser/FabricParser.js';
import OutHandler from "./Sys/OutHandler.js";

// Точка вохода
class FNBManager{
    constructor(args){
        this.args = args;
    }
    // Запуск проекта
    run(){
        // Создает экземпляр класса с аргумента
        const argsParser = new ArgvParser(this.args);
        // Получает аругменты через метод экземпляра
        const config = argsParser.GetConfig();
        // Экзепляр для создание папки с выводом
        const outHandler = new OutHandler(config.out);
        // Передаём его в объекте конфиг
        config.outHandler = outHandler; 
        // Создание FabricParser и передача конфига с входными данными
        const parser = FabricParser.Create(config);
        // Вызов Объекта с м
        parser.Parser();
    }
}

const entryPoint = new FNBManager();
entryPoint.run()