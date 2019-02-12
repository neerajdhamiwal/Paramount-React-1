// import requestService from './src/services/request.js';
const express = require('express');
const sm = require('sitemap');
const app = express();
const path = require('path');
const fs = require('fs');
var request = require('request');

const getUrl = body =>{
    let urls = [{url: '/', changefreq: 'monthly',  priority: 1.0},
        {url: '/resources', changefreq: 'monthly',  priority: 0.7},
        {url: '/resources/blogs', changefreq: 'monthly',  priority: 0.7},
        {url: '/resources/case-studies', changefreq: 'monthly',  priority: 0.7},
        {url: '/resources/infographics', changefreq: 'monthly',  priority: 0.7}];
    if(body.length>0){
        JSON.parse(body).forEach((url)=> {
            urls.push({url: url.view_node_1, changefreq: 'monthly',  priority: 0.7 })
        })
    }
    return urls;
}
app.get('/sitemap.xml', function(req, res) {
    request('http://drupal.paramountsoft.net/url-pattern-data', function (error, response, body) {
        const sitemap = sm.createSitemap ({
            hostname: 'http://drupal.paramountsoft.net',
            cacheTime: 600000,        // 600 sec - cache purge period
            urls: getUrl(body)
        });
        sitemap.toXML(function (err, xml) {
            if (err) {
                return res.status(500).end();
            }
            fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), sitemap.toString());
            res.send( 'File Created Successfully');
        });
    });
});

app.listen(3000, () => console.log("Node server listening on port ", 3000, "!!"));
