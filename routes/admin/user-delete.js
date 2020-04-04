var{ User} = require('../../model/user')
module.exports= async function(req,res){
    
    await User.findOneAndDelete({_id: req.query.id});
    res.redirect('/admin/user');
  
  }