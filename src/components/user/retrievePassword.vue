<style>
</style>
<template>
    <div>
      <check-username
        v-if="currentStepFlag == 'checkUsername'"
        @next-step="nextStepTrigger">
      </check-username>
      <check-answer
        v-if="currentStepFlag == 'checkAnswer'"
        @next-step="nextStepTrigger"
        :question-content="questionContent">
      </check-answer>
      <set-newpassword
        v-if="currentStepFlag == 'setNewPassword'"
        @next-step="nextStepTrigger">
      </set-newpassword>
      <set-success
        v-if="currentStepFlag == 'success'">
        <h1>恭喜你，重置密码成功！</h1>
      </set-success>
    </div>
</template>
<script>
  import CheckUsername from './retrievePassword/checkUsername'
  import CheckAnswer from './retrievePassword/checkAnswer'
  import SetNewPassword from './retrievePassword/setNewPassword'
  import SetSuccess from './success'
  export default {
    data(){
      return {
        currentStepFlag: 'checkUsername',
        questionContent: 'test'
      }
    },
    components: {
      checkUsername: CheckUsername,
      checkAnswer: CheckAnswer,
      setNewpassword: SetNewPassword,
      setSuccess: SetSuccess
    },
    methods: {
      nextStepTrigger(flag){
        this.currentStepFlag = flag;
      }
    }
  }
</script>
