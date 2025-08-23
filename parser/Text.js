// TextParser | Text.js

import BaseParser from "./BaseParser.js";

// Парсер TextParser 
class TextParser extends BaseParser{
    // Изменяем метод из BaseParser
    async Parser(){
        // Получаем Html
        const $ = await this.FetchHtml();
        // Получаем текст из Html
        const text = $('body').text();

        // Сохраняем в файл
        await this.Save(text, 'txt');
        // Сообщение о загрузке
        console.log("All Okay");
    }
}

export default TextParser