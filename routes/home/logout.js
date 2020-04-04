module.exports=function(req,res){
    req.session.destroy(function(){
      res.clearCookie('connect.sid')
      req.app.locals.userInfo='';
      if(req.app.locals.articleId){
        res.redirect('/home/article?id='+req.app.locals.articleId)
      } else {
         res.redirect('/home/');
      }
     
    })
    
  }