// ImgParser | Img.js
// Наследует реализацию от BaseParser

import BaseParser from "./BaseParser";

class ImgParser extends BaseParser{
    async Parser(){
        const $ = await this.FetchHtml();
        const img = $('body').img();
    }
}