// import requestService from './src/services/request.js';
const express = require('express');
const sm = require('sitemap');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/sitemap.xml', function(req, res) {
    const sitemap = sm.createSitemap ({
        hostname: 'http://drupal.paramountsoft.net',
        cacheTime: 600000,        // 600 sec - cache purge period
        urls: [
            { url: '/page-2/',  changefreq: 'monthly',  priority: 0.7 },
        ]
    });
    sitemap.toXML( function (err, xml) {
        if (err) {
            return res.status(500).end();
        }
        fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), sitemap.toString());
         res.send( 'File Created Successfully');
    });
});

app.listen(3000, () => console.log("Node server listening on port ", 3000, "!!"));
