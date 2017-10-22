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
        <div>
          <span>密码提示问题为：</span><span>{{questionContent}}</span>
        </div>
        <el-form-item label="请输入密码提示答案：">
          <el-input type="text" placeholder="问题答案" :model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;background: #e72955;color:#ffffff;" @click="checkAnswer()">下一步</el-button>
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
    props: [
      "questionContent"
    ],
    methods: {
      checkAnswer(){
        this.$emit('next-step', "setNewPassword")
      }
    }
  }
</script>
