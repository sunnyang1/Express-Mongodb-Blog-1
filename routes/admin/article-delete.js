var{ Article} = require('../../model/article')
module.exports= async function(req,res){
    
    await Article.findOneAndDelete({_id: req.query.id});
    res.redirect('/admin/article');
  
  }