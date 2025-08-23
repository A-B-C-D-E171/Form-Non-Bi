// OutHandler | OutHandler.js
// Создание экземпляра класса в main.js
import fs from 'fs';
import path from 'path';

class OutHandler{
    constructor(out){
        this.out = out;
        this.EnsureDir();
    }

    // Есть ли директория указаная входном объекте
    EnsureDir(){
        if(!fs.existsSync(this.out)){
            // Создает если нет
            fs.mkdirSync(this.out, {recursive: true});
            console.log(`Create Dir: ${this.out}`);
        }
    }
    // Генерация имени для файла
    GeneraticName(ext){
        const timeSave = Date.now();
        return `${timeSave}.${ext}`;
    }

    // Создание файла по указаной директории
    WriteFile(content, ext){
        const fileName = this.GeneraticName(ext); 
        const fullPath = path.join(this.out, fileName);
        fs.writeFileSync(fullPath, content)
        console.log(`Create and write file ${fileName}`);
    }
}

export default OutHandler