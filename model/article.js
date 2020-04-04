var mongoose=require('mongoose');
//2.定义骨架/集合规则
//编辑页面字段
var articleSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true,'请填写文章标题'],
        minlength:1,
        maxlength:20
      },
      //防止是null和undefined
      author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        //作者是用户集合的_id;
        required:[true,'请填写作者']
      },
       publishDate:{
           type:Date,
           default:Date.now()
       },
       cover:{
            type:String,
            default:null
        },
        content:{
            type:String
    
        }
    })
  //3.创建模型/集合(模型名，骨架，集合名) 通常是读取数据
  var Article = mongoose.model('Article', articleSchema,'article');
  
  module.exports={
      Article
   
  }