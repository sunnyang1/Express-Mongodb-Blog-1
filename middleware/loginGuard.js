function loginGuard(req,res,next){
   if(req.url!=='/login' && !req.session.username && req.url!=='/savelogin'){
      res.redirect('/admin/login');
    } else {
      //是登录状态
      if(req.session.role=='normal'){
        //定向到首页
        return res.redirect('/home')
      }

      next()
    }   
    
  }
module.exports = loginGuard;