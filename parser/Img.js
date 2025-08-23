import BaseParser from "./BaseParser.js";

// Warning code of AI

class ImgParser extends BaseParser {
    // Метод парсинга
    async Parser() {
        // Константа, которая ждет FetchHtml
        const $ = await this.FetchHtml();
        // Записываем в links ссылки из src
        const links = $('img')
            .map((_, el) => $(el).attr('src'))
            .get()
            .filter(Boolean);

        // Извлекаем ссылки из массива
        for (const url of links) {
            try {
                // Пробуем скачать
                const res = await fetch(url);
                // Если соединение нет пропускаем
                if (!res.ok) continue;

                // Сохраняем контент в буфферный массив
                const content = Buffer.from(await res.arrayBuffer());
                // Расширение файла котораое, зависит от ссылки
                const ext = url.split('.').pop().split('?')[0];
                // Вызов метода для сохранения
                await this.Save(content, ext);
            } catch (err) {
                // Вывод ошибки если не получится
                console.error(`Ошибка при загрузке: ${url}`, err);
            }
        }

    }
}

export default ImgParser;