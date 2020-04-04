var express = require('express');
var home = express.Router();

//博客首页
home.get('/', require('./home/index'));

//文章详情页
home.get('/article',require('./home/article') );

//文章评论
home.post('/comment',require('./home/comment') );

//用户注册页面
home.get('/register',require('./home/register'));

//注册功能实现
home.post('/savereg',require('./home/savereg') );

//用户退出
home.get('/logout',require('./home/logout') );
module.exports = home;
