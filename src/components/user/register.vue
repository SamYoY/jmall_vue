<style>
</style>
<template>
    <div>
      <register-password v-if="registerSuccess == false" @register-action="onRegisterAction"></register-password>
      <register-success
        v-if="registerSuccess == true">
        <h1>恭喜你，注册成功！</h1>
      </register-success>
    </div>
</template>
<script>
  import RegisterPassword from './register/registerPassword'
  import RegisterSuccess from './success'
  export default {
    data(){
      return {
        registerSuccess: false
      }
    },
    components: {
      "register-password": RegisterPassword,
      "register-success": RegisterSuccess
    },
    mounted(){
      // this.$nextTick(() => {
      //   this.registerSuccess = false;
      // })
    },
    methods: {
      onRegisterAction(flag){
        this.registerSuccess = flag;
      }
    }
  }
</script>
