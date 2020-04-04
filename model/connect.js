var mongoose=require('mongoose');
var config=require('config')
//1.连接数据库
mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, { useNewUrlParser: true, useUnifiedTopology: true },function(err){
  if(err){
    throw err;
  } else {
    console.log('数据库连接成功');
    
  }
})
