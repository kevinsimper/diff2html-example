let dif2html = require("diff2html").Diff2Html
let hash = window.location.hash
let diffUrl = hash.substring(3, hash.length)
let fullUrl = 'https://crossorigin.me/https://github.com/' + diffUrl
fetch(fullUrl)
  .then((res) => res.text())
  .then((data) => {
    var html = dif2html.getPrettyHtml(data);
    document.getElementById('app').innerHTML = html
  })
