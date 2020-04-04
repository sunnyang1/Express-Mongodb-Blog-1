var{ Article } = require('../../model/article')
module.exports= async function(req, res) {
    req.app.locals.currentLink="article";
    var { message,id } = req.query;
    if(id){
        //修改
        var article= await Article.findOne({_id:id});
        res.render('admin/article-edit',{
            //修改出错用户信息
            // msg:message,
            article:article,
            link:'/admin/save-article-edit?id='+id,
            button:'修改'
        });
        
    }
    else{
        //添加
        res.render('admin/article-edit',{
            //添加出错用户信息
            // msg:message,
            link:"/admin/save-article-add",
            button:'添加'
        });  
    }
  
   //msg用户出错信息

  }