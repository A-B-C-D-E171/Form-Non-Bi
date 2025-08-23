// BaseParser | BaseParser.js
// Наследуется для остальных парсиров
import cheerio from 'cheerio';

class BaseParser{
    constructor(config){
        this.url = config.url;
        this.outHandler = config.outHandler;

    }
    async FetchHtml(){
        const responce = await fetch(this.url);
        const html = await responce.text();
        const $ = cheerio.load(html);
        return $;
    }
    async Parser(){
        console.log(`Error`);
    }
    async Save(content, ext){
        if(!this.outHandler){
            console.log("Не проинацализирован экземпляр outHandler");
            return;
        }

        this.outHandler.WriteFile(content, ext);
    }
}

export default BaseParser;