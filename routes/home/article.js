const { Article } = require('../../model/article');
const { Comment } = require('../../model/comment');
module.exports =  async function(req,res){
    var id=req.query.id;
    req.session.articleId=id;
    req.app.locals.articleId=id;
	// 查询文章详情数据
    let articleDetail = await Article.findOne({_id:id}).populate('author');
    // let comment = await Comment.findOne().populate('aid').populate('uid');
    let comment = await Comment.find({aid:id}).populate('uid');
    // res.send(comment)
    // 渲染文章列表页面模板
    res.render('home/article',{
        articleDetail:articleDetail,
        comment:comment
    })
	
  }