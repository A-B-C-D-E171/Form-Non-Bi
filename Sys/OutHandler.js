// OutHandler | OutHandler.js
// Создание экземпляра класса в main.js
import fs from 'fs';
import path from 'path';

class OutHandler{
    constructor(out){
        this.out = out;
        this.EnsureDir();
    }

    EnsureDir(){
        if(!fs.existsSync(this.out)){
            fs.mkdirSync(this.out, {recursive: true});
            console.log(`Create Dir: ${this.out}`);
        }
    }

    GeneraticName(ext){
        const timeSave = Date.now();
        return `${timeSave}.${ext}`;
    }

    WriteFile(content, ext){
        const fileName = this.GeneraticName(ext); 
        const fullPath = path.join(this.out, fileName);
        fs.writeFileSync(fullPath, content)
        console.log(`Create and write file ${fileName}`);
    }
}

export default OutHandler