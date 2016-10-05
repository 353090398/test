var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //清除缓存
mongoose.connect('mongodb://localhost:27017/data')

var Post = require('./models/post')
var db = mongoose.connection

db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
//关闭同源策略，开放CORS
var cors = require('cors');
app.use(cors());

app.get('/',function(req,res){
  // res.redirect("https://www.baidu.com"); 重定向
  var page = "<form method='post' action='/posts'>" +
  "<input type='text' name='title'/>" +
  "<input type='submit'/>" +
  "</from>"
  res.send(page)
})
app.get('/posts',function(req,res){
  Post.find().sort({'title': -1}).exec(function(err,posts){
    res.json({ posts : posts }) //res.send(posts)
  })
})

app.post('/posts', function(req, res) {
  var post = new Post({
      title:req.body.title,
      category:req.body.category,
      content:req.body.content
    });
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved');
  })
    res.json({message:"成功"})//res.redirect('/posts')
});

app.listen(3000,function(){
  console.log('running on prot 3000...');
})
