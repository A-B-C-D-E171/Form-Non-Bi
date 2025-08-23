// ArgsParser | ArgsParser.js

import * as commander from 'commander';
// Объкет для записи шаблона команд
const Form_Non_Bi = new commander.Command();

// Класс получающий аругменты командной строки
class ArgvParser{
    constructor(argv){
        this.argv = argv;
    }
    // Метод с командами
    GetConfig(){
        Form_Non_Bi
                    // Позиционный аргумент для выбора типа парсинга
                    .argument('[type]', 'text')
                    // Наименнованый аргумент для url
                    .option('-u --url <url>')
                    // Наименнованый аругумент для пути вывода
                    .option('-o --out <path>');

        // Получает аргументы
        Form_Non_Bi.parse(this.argv);
        // Наименованые аргументы
        const options = Form_Non_Bi.opts();
        // Позиционные аргументы
        const args = Form_Non_Bi.args;
        
        // Возвращает аргументы main
        return{
            type: args[0],
            url: options.url,
            out: options.out
        }
    }
}

export default ArgvParser;