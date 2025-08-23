// ImgParser | Img.js

import BaseParser from "./BaseParser.js";

class ImgParser extends BaseParser{
    async Parser(){
        const $ = await this.FetchHtml();
        const links = []
        $('img').each((i, el) => {
            const src = $(el).attr('src')
            if(src){
                links.push(src);
            }
        });

        for(const url of links){
            const res = await fetch(url);
            if(res){
                const arratBuffer = await res.arrayBuffer();
                const buffer = Buffer.from(arratBuffer);
                await this.Save(buffer, '.jpg');
                console.log("All Okay");
            } else{
                console.log("Sorry, err")
            }
        }


    }
}

export default ImgParser;