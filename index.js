var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/:name', function(req, res) {
var userName = req.params.name
var page = '<html>' +
              '<body>' +
                '<h1>' + userName + '的购物车' + '</h1>' +
              '</body>' +
           '</html>'
res.send(page)
});

app.post('/:name', function(req, res) {
  res.send('哈哈哈！成功了' + req.params.name)
});

app.listen(3000,function(){
  console.log('running on prot 3000...');
})
