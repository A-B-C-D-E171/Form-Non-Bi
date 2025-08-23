import BaseParser from "./BaseParser.js";

class ImgParser extends BaseParser {
    async Parser() {
        const $ = await this.FetchHtml();
        const links = $('img')
            .map((_, el) => $(el).attr('src'))
            .get()
            .filter(Boolean);

        for (const url of links) {
            try {
                const res = await fetch(url);
                if (!res.ok) continue;

                const content = Buffer.from(await res.arrayBuffer()); // ← вот здесь
                const ext = url.split('.').pop().split('?')[0];

                await this.Save(content, ext);
            } catch (err) {
                console.error(`Ошибка при загрузке: ${url}`, err);
            }
        }

    }
}

export default ImgParser;