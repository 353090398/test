var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/dd', function(req, res) {
  console.log('hello didi');
});

app.get('/ss', function(req, res) {
  console.log('hello su');
});

app.listen(3000,function(){
  console.log('running on prot 3000...');
})
