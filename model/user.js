var mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
//2.定义骨架/集合规则
var userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        minlength:2,
        maxlength:20
      },
      //防止是null和undefined
    email: {
          type:String,
          required:true,
          unique:true
        },
    password: {
            type:String,
            required:true,
          },
    role: {
            type:String,
            required:true,
          },
    state: {
            type:Number,
            default:0
            //0是启用1是禁用
          },
    })
  //3.创建模型/集合(模型名，骨架，集合名) 通常是读取数据
  var User = mongoose.model('User', userSchema,'user');
  
  async function createUser () {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
      username:"zjj",
      email:"zhuojiajia1019@163.com",
      password:pass,
      role:"admin",
      state:0
  })
  
  }
  // createUser()


  // 验证用户
 function validateUser(user){
  const schema = {
		username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
		email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
		role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
    state: Joi.number().valid(0, 1).required().error(new Error('状态值非法')),
	
	};

    // 实施验证
    return Joi.validate(user, schema);
 }
  
  module.exports={
      User,
      validateUser
  }