var express = require('express');
var app = express();

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

app.get('/posts', function(req, res) {
  console.log("GET /posts");
});

// app.get('/posts/:posts_id', function(req, res) {
//   console.log("GET/posts/:posts_id");
// });
//
// app.post('/posts', function(req, res) {
//   console.log("POST/posts");
// });
//
// app.put('/posts/:posts_id', function(req, res) {
//   console.log("PUT/posts/:posts_id");
// });
//
// app.delete('/posts/:posts_id', function(req, res) {
//   console.log("DELETE /posts/:posts_id");
// });

app.listen(3000,function(){
  console.log('running on prot 3000...');
})
