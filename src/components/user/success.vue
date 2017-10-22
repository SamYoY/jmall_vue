<style>
  .SetSuccess{
    position: absolute;
    min-width: 500px;
    max-width: 600px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 400px;
  }
</style>
<template>
  <div class="SetSuccess">
    <div style="margin-bottom:20px;">
      <slot>
        
      </slot>
    </div>
    <div>
      <el-button @click="ridirectToLogin">立即登录</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data(){

    },
    methods: {
      ridirectToLogin(){
        this.$router.push('/');
      }
    }
  }
</script>
