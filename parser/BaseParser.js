// BaseParser | BaseParser.js

import fetch from 'node-fetch';
import OutHandler from '../Sys/OutHandler';

class BaseParser{
    constructor(config){
        this.url = config.url;
        this.out = config.out;
    }
}
