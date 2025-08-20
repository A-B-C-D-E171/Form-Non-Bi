// OutHandler | OutHandler.js

import fs from 'fs';
import path from 'path';

class OutHandler{
    constructor(dirOut){
        this.dirOut = dirOut;
        this.EnsureDir();
    }

    EnsureDir(){
        if(!fs.existsSync(this.dirOut)){
            fs.mkdirSync(this.dirOut, {recursive: true});
            console.log(`Create Dir: ${this.dirOut}`);
        }

    }
    WriteFile(fileName, content){
        const fullPath = path.join(this.dirOut, fileName);
        fs.writeFileSync(fullPath, content)
        console.log(`Create and write file ${fileName}`);
    }
}

const out =  new OutHandler("./data/text/");
out.WriteFile('sample.txt', 'HI');