// import clipboardy from 'clipboardy';
const cb = require('clipboardy');
const slug = require('slug');

const text: string = cb.readSync();
const slugified: string = slug(text);

console.log(slugified);