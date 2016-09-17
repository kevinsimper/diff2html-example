let dif2html = require("diff2html").Diff2Html
let fs = require('fs')
let diffString = fs.readFileSync('./test.diff', 'utf8')
var html = dif2html.getPrettyHtml(diffString);
document.getElementById('app').innerHTML = html
console.log(html)
