<style>
  .login{
    /*position: relative;*/
    background: #7AA7CA;
    min-height: 100%;
  }
  .login-logo{
    position: absolute;
    top: 50px;
    left: 50px;
  }
  .login-container{
    position: absolute;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    min-width:300px;
    max-width: 400px;
    padding: 30px 30px 20px;
    background: #eee;
    border-radius: 4px;
    box-shadow: 0 2px 16px #999, 0 0 1px #999, 0 0 1px #999;
  }
  .login-footer{
    position: fixed;
    bottom: 0;
    left:0;
    margin:20px auto;
    font-size: 12px;
    color: #eee;
    width: 100%;
    text-align: center;
  }
</style>
<template>
    <div class="login">
      <div class="login-logo">
        <!-- <img src="../assets/image/logo.png"/> -->
      </div>
      <div class="login-container" @keyup.enter="login('loginForm')">
        <el-form label-width="100px;" label-position="right" ref="loginForm" :model="loginForm" :rules="loginRule">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginForm.username" auto-complete="off" :disabled="loading"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" :disabled="loading"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;">
            <el-button type="primary" style="width: 100%;" @click="login('loginForm')">登录</el-button>
          </el-form-item>
          <el-form-item style="text-align: right;">
              <el-button style="border: 0px;background:inherit;" @click="retrieve()">忘记密码</el-button>
              <el-button style="border: 0px;background:inherit;" @click="register()">免费注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-footer">
      </div>
    </div>
</template>
<script>
  import LoginService from '../service/login'
  export default {
    data(){
      var checkUsername = (rule, value, callback) => {
        if(!value){
          return callback(new Error('用户名不能为空！'))
        }else{
          return callback();
        }
      }
      var checkPassword = (rule, value, callback) => {
        if(!value){
          return callback(new Error('密码不能为空！'))
        }else{
          return callback();
        }
      }
      return {
        loginForm: {
          username: "",
          password: ""
        },
        loading: false,
        loginRule: {
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ],
          password: [
            {validator: checkPassword, trigger: 'blur'}
          ]
        }
      }
    },
    mounted(){

    },
    methods: {
      login(formName){
        this.$refs[formName].validate((valid) => {
          if(valid){
            this.loading = true;
            LoginService.login(this.loginForm.username, this.loginForm.password).then((res) => {
              let ret = res.data;
              if(ret.code == 1){
                this.$router.push("/home");
              }
            });
          }else{
            return false;
          }
        });
      },
      retrieve(){
        this.$router.push('/user/retrieve-password')
      },
      register(){
        this.$router.push('/user/register')
      }
    }
  }
</script>
