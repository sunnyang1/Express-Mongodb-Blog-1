module.exports=function(req,res){
    req.session.destroy(function(){
      res.clearCookie('connect.sid')
      req.app.locals.userInfo='';
      res.redirect('/admin/login');
    })
    
  }