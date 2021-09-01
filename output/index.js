var cb = require('clipboardy');
var slug = require('slug');
var text = cb.readSync();
var slugified = slug(text);
console.log(slugified);
