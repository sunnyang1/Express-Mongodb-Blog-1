const { Article } = require('../../model/article');
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');
module.exports =  async function(req,res){
    const page = req.query.page;
    //去首页的时候就清空articleId
    req.app.locals.articleId='';
    // req.app.locals.currentLink = 'article';
	// // page 指定当前页
	// // size 指定每页显示的数据条数
	// // display 指定客户端要显示的页码数量
	// // exec 向数据库中发送查询请求
	// // 查询所有文章数据
    let articles = await pagination(Article).find().page(page).size(4).display(3).populate('author').exec();
    res.render('home/index', {
		articles: articles
    });
    // 页码在display数组中
  
    // res.send(articles)
  
  }