// ArgsParser | ArgsParser.js

import * as commander from 'commander';
const Form_Non_Bi = new commander.Command();

class ArgvParser{
    constructor(argv){
        this.argv = argv;
    }
    GetConfig(){
        Form_Non_Bi
                    .argument('[type]', 'text')
                    .option('-u --url <url>')
                    .option('-o --out <path>');

        Form_Non_Bi.parse(this.argv);
        const options = Form_Non_Bi.opts();
        const args = Form_Non_Bi.args;

        return{
            type: args[0],
            url: options.url,
            out: options.out
        }
    }
}

export default ArgvParser;