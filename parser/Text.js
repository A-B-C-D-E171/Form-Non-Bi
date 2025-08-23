// TextParser | Text.js

import BaseParser from "./BaseParser.js";

class TextParser extends BaseParser{
    async Parser(){
        const $ = await this.FetchHtml();
        const text = $('body').text();

        await this.Save(text, 'txt');
        console.log("All Okay");
    }
}

export default TextParser