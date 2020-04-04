function loginGuard(req,res,next){
   if(req.url!=='/login' && !req.session.username && req.url!=='/savelogin'){
      res.redirect('/admin/login');
    } else {
      if(req.session.role=="normal"){

        return res.redirect('/home/')
        //阻止向下执行
      }
      next()
    }   
    
  }
module.exports = loginGuard;