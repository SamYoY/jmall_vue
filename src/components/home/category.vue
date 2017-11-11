<style>
  .productTitle{
    border-bottom: 1px solid #c40000;
    margin-bottom: 20px;
  }
  .ProductListContainer{
    display: flex;
    flex-direction: row;
  }
  .ProductListItem{
    background:#ffffff;
    width:200px;
    padding:20px;
    margin-right:20px;
  }
</style>
<template>
  <div>
    <div v-for="(category, key) in categoryList" style="margin-top:20px;">
      <div>
        <h2 class="productTitle">{{category.parent.name}}</h2>
      </div>
      <div class="ProductListContainer">
        <div class="ProductListItem" v-for="item in category.items">
          <router-link :to="{ name: 'List', query: {categoryId: item.id} }">
            <div>
              <h3>{{item.name}}</h3>
            </div>
            <img  style="height:200px;width:180px;margin-top:10px;" src="http://img.happymmall.com/ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg"
            alt="【测试学习使用】Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电">
            <div>

            </div>
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import ProductService from '../../service/product'
  export default {
    data(){
      return {
        categoryList: {},
        parentList: ""
      }
    },
    components: {

    },
    mounted(){
      this.getAllCategory();
    },
    methods: {
      getAllCategory(){
        ProductService.getAllCategory().then((res) => {
          this.categoryList = res.data.result;
          let _this =this;
          // Object.keys(ret).forEach(function(value, index){
          //   _this.categoryList.push(ret[value]);
          // })
          // console.log(this.categoryList[0].parent.name)
        }, (res) => {

        })
      }
    }
  }
</script>
