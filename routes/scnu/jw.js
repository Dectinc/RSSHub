const axios = require('../../utils/axios');
const cheerio = require('cheerio');
const config = require('../../config');

module.exports = async (ctx) => {
    const res = await axios({
        method: 'get',
        url: 'https://jw.scnu.edu.cn/ann/index.html',
        header: {
            'User-Agent': config.ua,
            Referer: 'https://jw.scnu.edu.cn',
        },
    });
    const data = res.data;
    const $ = cheerio.load(data);
    const list = $('.notice_01').find('li');

    ctx.state.data = {
        title: $('title')
            .first()
            .text(),
        link: 'https://jw.scnu.edu.cn/ann/index.html',
        description: '华南师范大学教务处 - 通知公告',
        item:
            list &&
            list
                .map((index, item) => {
                    item = $(item);
                    return {
                        title: item.find('a').text(),
                        pubDate: new Date(item.find('.time').text()).toUTCString(),
                        link: item.find('a').attr('href'),
                    };
                })
                .get(),
    };
};
