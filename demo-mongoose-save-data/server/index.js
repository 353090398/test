var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

var mongoose = require('mongoose');
var Post = require('./moudles/post')
mongoose.connect('mongodb://localhost:27017/data');

app.post('/posts',function(req,res){
  console.log(req.body);
  var post = new Post ({
    title:req.body.title,
    content:req.body.content
  })
  post.save()
})

app.listen(8000,function(){
  console.log('running on localhost:8000');
})
