var express = require('express');
var admin = express.Router();

//登录页面
admin.get('/login',require('./admin/loginPage') );

//登录功能
admin.post('/savelogin',require('./admin/login') );

//用户列表
admin.get('/user',require('./admin/userPage'));

//新增、编辑用户页面
admin.get('/user-edit',require('./admin/user-edit'));

//新增用户功能
admin.post('/save-user-add',require('./admin/save-user-add'));

//编辑用户功能
admin.post('/save-user-edit',require('./admin/save-user-edit'));

//删除用户功能
admin.get('/user-delete',require('./admin/user-delete'));

//文章列表页面
admin.get('/article',require('./admin/articlePage'));

//文章新增、编辑页面
admin.get('/article-edit',require('./admin/article-edit'));

//新增文章功能
admin.post('/save-article-add',require('./admin/save-article-add'));

//编辑文章功能
admin.post('/save-article-edit',require('./admin/save-article-edit'));

//删除文章功能
admin.get('/article-delete',require('./admin/article-delete'));

//退出功能
admin.get('/logout', require('./admin/logout'));



module.exports = admin;
