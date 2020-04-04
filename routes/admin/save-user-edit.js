var{ User } = require('../../model/user')
const bcrypt = require('bcryptjs');
module.exports = async function(req,res,next){
    
     // 修改可以不用验证了
     var{ password,username,role,state,email }= req.body;
     var id=req.query.id;
        var user= await User.findOne({_id:id});
          //返回布尔值
          var isValid = await bcrypt.compare(password,user.password)
          if (isValid) {
            // 将用户信息更新到数据库中
            await User.updateOne({_id: id}, {
                username: username,
                email: email,
                role: role,
                state: state
            });
            // 将页面重定向到用户列表页面 
            res.redirect('/admin/user');
          } else {
                return next(JSON.stringify({path: '/admin/user-edit', message: '密码比对失败，不能修改用户信息',id:id}))
            //把id的值传过去显示的就是编辑页面,这个地方有点妙
            }
    
}