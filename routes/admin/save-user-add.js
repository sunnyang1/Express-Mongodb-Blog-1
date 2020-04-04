
var{ User,validateUser } = require('../../model/user')
const bcrypt = require('bcryptjs');
module.exports = async function(req,res,next){  
    // 实施验证
    try { 
        await validateUser(req.body);
        
    }
	catch(e){
        return next(JSON.stringify({path: '/admin/user-edit', message: e.message}))
    }
    var user= await User.findOne({email:req.body.email});
    if(user){
    return next(JSON.stringify({path: '/admin/user-edit', message: '邮箱地址已经被占用'}))
        }
    //end下面的代码  redict不是在最后都要加return
    var salt = await bcrypt.genSalt(10);
    var result = await bcrypt.hash(req.body.password, salt);
    req.body.password=result;
    var user = await User.create(req.body)
    res.redirect("/admin/user") 
    
   
}