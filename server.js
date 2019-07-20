const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  const robotsOptions = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    }
  };
  
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', robotsOptions)
  ));
  
  const sitemapOptions = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
    }
  };
  
  server.get('/sitemap.xml', (req, res) => {
    res.status(200).sendFile('sitemap.xml', sitemapOptions)
  });

  server.use(express.static('/static'));

  server.use('/robots.txt', express.static('/static/robots.txt'));
  
  server.get('/amy', (req, res) => {
    res.redirect('https://holidays-comxhrffbm.now.sh/')
  });

  server.use(handler).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
