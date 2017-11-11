<style>
  .HeaderContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #f8f8f8;
  }
  .HeaderBtn{
    border: 0px;
    background:inherit;
  }

</style>
<template>
  <div class="HeaderContainer">
    <div style="margin-left:15%;">
      <el-button class="HeaderBtn">登录</el-button>
      <el-button class="HeaderBtn">注册</el-button>
    </div>
    <div style="margin-right:15%;">
      <el-button class="HeaderBtn">购物车<span>(9)</span></el-button>
      <el-button class="HeaderBtn">我的订单</el-button>
      <el-button class="HeaderBtn">我的JMALL</el-button>
      <el-button class="HeaderBtn">关于JMALL</el-button>
    </div>
  </div>
</template>
<script>
</script>
