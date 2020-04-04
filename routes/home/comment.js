const { Comment } = require('../../model/comment');
module.exports =  async function(req,res){
    var {aid,uid,content} =req.body;
    let comment = await Comment.create({
        content:content,
        aid:aid,
        uid:uid,
        time:new Date()
    })
    //    res.send(comment)
    // 渲染文章列表页面模板
    res.redirect('/home/article?id='+aid)
	
  }