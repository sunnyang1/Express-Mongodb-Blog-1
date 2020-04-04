var{ User } = require('../../model/user')

module.exports= async function(req, res) {
   req.app.locals.currentLink="user";
   var page=req.query.page||1;  //当前页
   var pagesize=5;
   var count=await User.countDocuments({});
   var total=Math.ceil(count/pagesize)
   var start=(page-1)*pagesize;
   var date =  await User.find().limit(pagesize).skip(start);
   res.render('admin/user', { userList: date,
                              msg:req.session.username,
                              total,
                              page});
 
    //header如果用msg那么每个路由都要重复一遍上行代码传值过去
  
  }