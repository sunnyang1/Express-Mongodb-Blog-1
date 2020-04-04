var{ User } = require('../../model/user')
module.exports= async function(req, res) {
    req.app.locals.currentLink="user";
    var { message,id } = req.query;
    if(id){
        //修改
        var user= await User.findOne({_id:id});
        res.render('admin/user-edit',{
            //修改出错用户信息
            msg:message,
            user:user,
            link:'/admin/save-user-edit?id='+id,
            button:'修改'
        });
        
    }
    else{
        //添加
        res.render('admin/user-edit',{
            //添加出错用户信息
            msg:message,
            link:"/admin/save-user-add",
            button:'添加'
        });  
    }
  
   //msg用户出错信息

  }