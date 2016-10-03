var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.get('/:name', function(req, res) {
// var userName = req.params.name
// var page = '<html>' +
//               '<body>' +
//                 '<h1>' + userName + '的购物车' + '</h1>' +
//               '</body>' +
//            '</html>'
// res.send(page)
// });
//
// app.post('/:name', function(req, res) {
//   res.send('哈哈哈！成功了' + req.params.name)
// });
// app.get('/posts', function(req, res) {
//   res.send("GET /posts"))
  // console.log("GET /posts");
// });

// app.get('/posts/:post_id', function(req, res) {
//   res.send("GET/post/:posts_id")
//   console.log("GET/post/:posts_id");
// });

app.get('/write',function(req,res){
  var page = "<form method='post' action='/posts'>" +
  "<input type='text' name='title'/>" +
  "<input type='submit'/>" +
  "</from>"
  res.send(page)
})
app.post('/posts', function(req, res) {
  res.send("the post title is: " + req.body.title)
  // console.log("POST /posts");
});

// app.put('/posts/:post_id', function(req, res) {
//   res.send("PUT/posts/:post_id")
//   console.log("PUT/posts/:post_id");
// });
//
// app.delete('/posts/:post_id', function(req, res) {
//   res.cend("DELETE /posts/:post_id")
//   console.log("DELETE /posts/:post_id");
// });

app.listen(3000,function(){
  console.log('running on prot 3000...');
})
