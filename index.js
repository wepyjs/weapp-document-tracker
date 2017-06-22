const { writeFileSync } = require('fs')
const Crawler = require("crawler");
const url = require('url');
const path = require('path');
const { execSync }      = require('child_process')

const toMarkdown = require('to-markdown');


let tracker;

const IGNORE_TABLE = [
    /www\.tencent\.com/,
    /kf\.qq\.com/,
    /github\.com/,
    /github\.com/,
    /^https:\/\/mp\.weixin\.qq\.com$/,
    /developers\.weixin\.qq\.com\/blogdetail/,
    /mp\.weixin\.qq\.com\/cgi-bin\/opshowpage/,
    /mp\.weixin\.qq\.com\/wxopen\/wawiki/,
    /developers\.weixin\.qq\.com\/home/,
    /\.zip$/,
];

const MAIN_PAGE = 'https://mp.weixin.qq.com/debug/wxadoc/dev/';


const Git = {
    diff () {
        const n = execSync('git diff --name-only | wc -l').toString().replace(/\n/g, '');
        return n > 0
    },

    add () {
        execSync(`git add --all`);
    },

    commit (msg) {
        execSync(`git commit -am "${msg}" >/dev/null 2>&1`);
    },

    push () {
        execSync('git push >/dev/null 2>&1');
    }
}


class Tracker {

    constructor (crawler) {
        this.crawler = crawler;
        this.resolveMap = {};
        this.count = 0;
        this.resolved = 0;
    }

    queue (uri) {
        if (this.resolveMap[uri])
            return;
        this.resolveMap[uri] = 1;
        console.log(`${this.resolved}/${this.count}: ${uri}`);
        this.count++;
        this.crawler.queue(uri);
    }

    complete () {
        if (!Git.diff()) {
            console.log('NO UPDATES');
            return;
        }
        let date = new Date();

        Git.add();
        Git.commit(`[${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}] UPDATE FOUNDS - @Gcaufy`);
        Git.push();
    }
}



var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        tracker.resolved++;
        if(error){
            console.log(error);
        }else{
            let $ = res.$;
            let uri = res.options.uri;
            if (/\/$/.test(uri)) {
                uri += 'index.html';
            }
            if (typeof($) !== 'function') {
                console.log(uri);
                return
            }
            let body = $('body');
            body.find('script').remove();
            let html = body.html();

            // removed version update
            html = html.replace(/\?{0,1}t=20\d{2}\d{2,4}/ig, '');
            
            let md = toMarkdown(html);
            let urlObj = url.parse(uri);
            let name = urlObj.pathname.replace(/\//g, '_');
            if (!/\.html$/.test(name)) {
                name = name + '.html';
            }
            let mdName = name.replace(/\.html$/g, '.md');

            writeFileSync(path.join(__dirname, 'html', name), html);
            writeFileSync(path.join(__dirname, 'md', mdName), md);

            let links = [];
            body.find('a').each(function () {
                let link = $(this).attr('href');

                if (link === undefined)
                    return;

                if (/^javascript:/.test(link)) {
                    return;
                }
                if (/^mailto:/.test(link)) {
                    return;
                }
                if (/\.md$/.test(link)) {
                    return;
                }

                if (link === './')
                    return;

                let ignored = IGNORE_TABLE.some((reg) => {
                    return reg.test(link);
                });

                if (ignored)
                    return;

                if (!/^https?:/.test(link)) {
                    link = url.resolve(uri, link);
                }

                let linkObj = url.parse(link);
                link = linkObj.protocol + '//' + linkObj.host + linkObj.path;

                if (link === 'https://mp.weixin.qq.com/')
                    return;

                if (linkObj.host !== 'mp.weixin.qq.com')
                    return;

                if (/\.md$/.test(link)) {
                    return;
                }

                if (/^\/debug/.test(linkObj.path))
                    tracker.queue(link);
            });
        }
        done();
        if (tracker.resolved === tracker.count) {
            console.log('ALL DONE');
            tracker.complete();
        }
    }
});


tracker = new Tracker(c);

tracker.queue(MAIN_PAGE);

