var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
var page = '<html>' +
              '<body>' +
                '<h1>index.html</h1>' +
              '</body>' +
           '</html>'
res.send(page)
});

app.get('/about', function(req, res) {
  var page = '<html>' +
                '<body>' +
                  '<h1>about.html</h1>' +
                '</body>' +
             '</html>'
  res.send(page)
});

app.listen(3000,function(){
  console.log('running on prot 3000...');
})
