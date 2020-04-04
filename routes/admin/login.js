var{ User }= require('../../model/user')
const bcrypt = require('bcryptjs');

//登录功能
 module.exports=async function(req, res) {
    var { email,password } = req.body;
    if (email.trim().length ===0||password.trim().length === 0) {
       res.status(400).render('admin/error',{msg:"邮件地址或密码错误"})
    }     
    var user= await User.findOne({email:email})
      if(user){
        //返回布尔值
        var isValid = await bcrypt.compare(password,user.password)
        if(isValid){
           //存用户名角色，在别的请求中使用，实现网页通信
           req.session.username=user.username;
           req.session.role=user.role;
           //公用header
           req.app.locals.userInfo = user;
           if(user.role=="admin"){
             //用户列表
              res.redirect('/admin/user');
             //博客首页
            } 
           if(user.role=="normal")
            {
              if(req.session.articleId){
                res.redirect('/home/article?id='+req.session.articleId)
              }
              else {
                res.redirect('/home/');
              }
            }

             
            
         
          
          } else {
          res.status(400).render('admin/error',{msg:"邮件地址或密码错误"})
               }
             }
         else {
          res.status(400).render('admin/error',{msg:"邮件地址或密码错误"})
        }
    }