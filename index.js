let dif2html = require("diff2html").Diff2Html
fetch('https://crossorigin.me/https://github.com/kevinsimper/hyper-dashboard/commit/7295644edee5ab8d340988ae7d128422de8e83b4.diff')
  .then((res) => res.text())
  .then((data) => {
    var html = dif2html.getPrettyHtml(data);
    document.getElementById('app').innerHTML = html
    console.log(html)
  })
