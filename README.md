# Node+Express+Mongodb+Art-template后台管理、前台展示多用户博客系统
## 描述
基于node.js的博客，没有采用前后端分离，采用后端渲染的方式

主要目的：

- 了解node.js
- 熟悉Express框架
- 熟悉后端开发的流程

## 主要技术

- 服务端：Node.js `v10.19.0 `
- 数据库：MongoDB `v3.4.10`
- 数据库操作工具：mongoose`^5.9.6`
- Express框架：`~4.16.1`
- 模板引擎-art-template: `^4.13.2`

## 页面目前功能

前台：

- 首页展示
- 登陆
- 注册
- 退出
- 文章详情
- 评论
- 分页


后台：

- 用户管理 (普通/超级管理员)
- 用户增删改查
- 文章管理
- 文章增删改查


## 使用方法

```
# install dependencies
(c)npm install 或者 yarn

# serve at localhost: 80 (可自行更改)
nodemon

```

## 页面效果
效果展示图片加载可能比较慢，请耐心等待，感谢。

### 首页：
![首页](./static/blog首页.png)


### 登录：
![文章](./static/登录界面.png)

### 注册：
![文章](./static/前台注册.png)

### 文章详情：
![首页](./static/文章详情页.png)

### 登录后评论：
![文章](./static/登录后评论.png)

### 后台用户列表：
![文章](./static/后台用户列表.png)

### 后台文章列表：
![后台](./static/后台文章列表.png)

### 新增用户：
![文章](./static/新增用户.png)


