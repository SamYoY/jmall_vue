<style>
.CheckUserName{
  position: absolute;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  min-width: 300px;
  border-radius: 4px;
  border: 1px solid #eee;
  background: #fff;
}
</style>
<template>
    <div class="CheckUserName">
      <el-form ref="checkUserForm">
        <el-form-item style="text-align:center;border-bottom:1px solid #888888;">
          <h2>找回密码</h2>
        </el-form-item>
        <el-form-item label="请输入用户名：">
          <el-input type="text" placeholder="用户名" :model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;background: #e72955;color:#ffffff;" @click="checkUsername()">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        username: ""
      }

    },
    methods: {
      checkUsername(){
        this.$emit('next-step', 'checkAnswer')
      }
    }
  }
</script>
