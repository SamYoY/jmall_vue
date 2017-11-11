<style>
</style>
<template>
  <div>
    <el-input
      placeholder="请输入商品"
      icon="search"
      v-model="keyword"
      :on-icon-click="handleIconClick">
    </el-input>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        keyword: ""
      }
    },
    methods: {
      handleIconClick(){

      }
    }
  }
</script>
