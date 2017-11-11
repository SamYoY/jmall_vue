<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*************************************/
  .CategoryContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
  }
  .CategoryContent{
    flex: 3;
    background: #999999;
  }
  .CarouselContent{
    flex: 9;
    background: #999999;
    margin-left: 20px;
  }
  .CategoryTag{
    margin-top: 10px;
    background: none;
  }
</style>
<template>
  <div class="CategoryContainer">
    <div class="CategoryContent">
      <div>
        <el-tag class="CategoryTag">
          <router-link target="_blank" :to="{ path: 'list', query: {keyword: '手机'} }">手机</router-link>
        </el-tag>
        <el-tag class="CategoryTag">数码</el-tag>
      </div>
      <div>
        <el-tag class="CategoryTag">电脑</el-tag>
        <el-tag class="CategoryTag">办公配件</el-tag>
      </div>
      <div>
        <el-tag class="CategoryTag">电视</el-tag>
        <el-tag class="CategoryTag">空调</el-tag>
        <el-tag class="CategoryTag">冰箱</el-tag>
        <el-tag class="CategoryTag">洗衣机</el-tag>
      </div>
    </div>
    <div class="CarouselContent">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        categoryList: []
      }
    },
    components: {

    },
    mounted(){
    },
    methods: {
      getAllCategory(){
        // ProductService.getAllCategory().then((res) => {
        //   this.categoryList = res.data.result;
        //
        // }, (res) => {
        //
        // })
      }
    }
  }
</script>
