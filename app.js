var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
//morgan默认引入
var config=require('config')
var session=require('express-session')
// 导入art-tempate模板引擎
const template = require('art-template');

// 导入dateformat第三方模块
const dateFormat = require('dateformat');



var homeRouter = require('./routes/home');
var adminRouter = require('./routes/admin');

var app = express();
//数据库连接,app引入即可其他文件不用再引入
require('./model/connect');

//模版引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
app.engine('art',require('express-art-template'))
// 向模板内部导入dateFormate变量
template.defaults.imports.dateFormat = dateFormat;

//配置session
app.use(session(
  { secret:'secret key',
    resave: false,
    saveUninitialized: false,
    // 未登录不要保存一个cookie
    cookie:{
      maxAge:24*60*60*1000
    }
}))

//可以将请求信息打印在控制台，便于开发调试
if(process.env.NODE_ENV=="development"){
	app.use(morgan('dev'));
} else {
	console.log("当前是生产环境")
}


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));
//拦截请求，判断用户登录状态
app.use('/admin',require('./middleware/loginGuard'))




//路由
app.use('/home', homeRouter);
app.use('/admin', adminRouter);

//添加/编辑 错误处理+重定向
app.use((err, req, res, next) => {
	// 将字符串对象转换为对象类型
	// JSON.parse() 
	const result = JSON.parse(err);
	// {path: '/admin/user-edit', message: '密码比对失败,不能进行用户信息的修改', id: id}
	let params = [];
	for (let attr in result) {
		if (attr != 'path') {
			params.push(attr + '=' + result[attr]);
		}
	}
	res.redirect(`${result.path}?${params.join('&')}`);
})

//监听端口
app.listen(80,function(){
  console.log("服务器正在运行");
  
})
module.exports = app;
