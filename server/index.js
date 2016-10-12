var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//关闭同源策略，开放CORS
var cors = require('cors');
app.use(cors());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  //清除缓存
mongoose.connect('mongodb://localhost:27017/data')

var db = mongoose.connection

var Post = require('./models/post');

db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});

var routes = require('./routes');
routes(app);

app.listen(3000,function(){
  console.log('running on prot 3000...');
})
