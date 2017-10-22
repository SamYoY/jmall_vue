<style>
  .RegisterPassword{
    position: absolute;
    min-width: 300px;
    max-width: 500px;
    min-height: 300px;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
  }
</style>
<template>
  <div class="RegisterPassword">
    <div style="text-align:center;margin-bottom:10px;border-bottom:1px solid #888888;">
      <h2>新用户注册</h2>
    </div>
    <el-form ref="registerForm" :model="registerForm" label-width="100px" label-position="left">

      <el-form-item label="用户名">
        <el-input type="text" :model="registerForm.username" auto-complete="off" :disabled="loading"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" :model="registerForm.password" auto-complete="off" :disabled="loading"/>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="text" :model="registerForm.confirmPassword" auto-complete="off" :disabled="loading"/>
      </el-form-item>
      <el-form-item label="电话">
        <el-input type="text" :model="registerForm.phone" auto-complete="off" :disabled="loading"/>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input type="text" :model="registerForm.email" auto-complete="off" :disabled="loading"/>
      </el-form-item>
      <el-form-item label="密码提示问题">
        <el-input type="text" :model="registerForm.question" auto-complete="off" :disabled="loading"/>
      </el-form-item>
      <el-form-item label="密码提示答案">
        <el-input type="text" :model="registerForm.answer" auto-complete="off" :disabled="loading"/>
      </el-form-item>
    </el-form>
    <div>
      <el-button style="width:100%;background: #e72955;color:#ffffff;" @click="onRegister">立即注册</el-button>
    </div>
    <div style="text-align:right;">
      <el-button style="border: 0px;background:inherit;" @click="ridirectToLogin">已有帐号，去登录>></el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        loading: false,
        registerForm: {
          username: "",
          password: "",
          confirmPassword: "",
          phone: "",
          email: "",
          question: "",
          answer: ""
        }
      }
    },
    methods: {
      onRegister(){
        this.$emit("register-action", true);
      },
      ridirectToLogin(){
        this.$router.push('/');
      }
    }
  }
</script>
