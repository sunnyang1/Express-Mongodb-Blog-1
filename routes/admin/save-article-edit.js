const formidable = require('formidable');
const path = require('path');
var{ Article } = require('../../model/article')
module.exports = async function(req,res,next){
    var id=req.query.id;
    const form = new formidable.IncomingForm();
	form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
	form.keepExtensions = true;
	form.parse(req, async (err, fields, files) => {
		  // 将用户信息更新到数据库中
          await Article.updateOne({_id: id}, {
            author:fields.author,
            title: fields.title,
            publishDate: fields.publishDate,
            content: fields.content,
            cover: files.cover.path.split('public')[1]
        });
        // 将页面重定向到用户列表页面 
        res.redirect('/admin/article');

}
    )}
  
          