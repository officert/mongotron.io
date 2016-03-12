'use strict';

const fs = require('fs');
const mime = require('express').static.mime;

const express = require('express');

const PORT = 4040;

// --------------------------- //
let app = express();

app.use('/src', staticFiles('./src'));

app.use((req, res, next) => {
  let path = './index.html';

  res.set('Cache-Control', 'max-age=0, no-cache');
  res.contentType(mime.lookup(path));

  return fs.createReadStream(path)
    .on('error', next)
    .pipe(res);
});

app.listen(PORT, () => {
  console.log('Listening on port : ' + PORT);
});

function staticFiles(dir) {
  return (req, res, next) => {
    let path = req.path;
    let mimeType = mime.lookup(path);

    if (mimeType === 'text/html') {
      res.set('Cache-Control', 'max-age=0, no-cache');
    } else {
      res.set('Cache-Control', 'max-age=31536000'); //cache non-html files for 1 year
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') return;

    return fs.createReadStream(dir + req.path)
      .on('open', () => {
        res.contentType(mime.lookup(req.path));
        res.status(200);
      })
      .on('error', () => {
        return next(null);
      })
      .pipe(res);
  };
}
