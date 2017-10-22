<style>
.CheckAnswer{
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
    <div class="CheckAnswer">
      <el-form ref="checkAnswerForm">
        <el-form-item style="text-align:center;border-bottom:1px solid #888888;">
          <h2>找回密码</h2>
        </el-form-item>
        <el-form-item label="请输入新密码：">
          <el-input type="text" placeholder="新密码" :model="newPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="text" placeholder="确认密码" :model="newPasswordConfirm"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;background: #e72955;color:#ffffff;" @click="setNewPassword()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        newPassword: "",
        newPasswordConfirm: ""
      }

    },
    methods: {
      setNewPassword(){
        this.$emit('next-step', 'success');
      }
    }
  }
</script>
