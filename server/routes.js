var Post = require('./models/post');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send("this ------ api server");
  })

  app.get('/posts',function(req,res){
    Post.find().sort({'title': -1}).exec(function(err,posts){
      res.json({ posts : posts }) //res.send(posts)
    })
  })

  app.get('/posts/:id',function(req,res){
    Post.findOne({_id:req.params.id},function(err,doc){
      if(err) return res.send('出错了')
      res.json({post:doc})
    })
  })

  app.put('/posts/:id', function(req, res) {
    Post.findById({_id: req.params.id}, function(err, post) {
      if (err) return res.status(500).json({error:  err.message});
      for (prop in req.body) {
        post[prop] = req.body[prop];
      }
      post.save(function(err) {
        if (err) return res.status(500).json({error: err.message});
        res.json({
          message: '文章更新成功了！'
        })
      })
    })
  })

  app.post('/posts', function(req, res) {
    console.log(req.body);
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


}
