// BaseParser | BaseParser.js

import cheerio from 'cheerio';

// Родительский класс
class BaseParser{
    // Получает конфиг(объект с входными данными)
    constructor(config){
        this.url = config.url;
        this.outHandler = config.outHandler;

    }
    // Качает Html файл
    async FetchHtml(){
        const responce = await fetch(this.url);
        const html = await responce.text();
        const $ = cheerio.load(html);
        return $;
    }
    // Выводит сообщение, если вызван через экземпляр от родителя
    async Parser(){
        console.log(`Error`);
    }
    // Шаблон для вызова экземпляра класса для записи
    async Save(content, ext){
        if(!this.outHandler){
            console.log("Не проинацализирован экземпляр outHandler");
            return;
        }
        // Вызыв метода для записи из экземпляра
        this.outHandler.WriteFile(content, ext);
    }
}

export default BaseParser;