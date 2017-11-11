<style>
  .Home {
    padding: 10px;
  }
  .HeaderPage{

  }
  .SearchPage{
    margin-top: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .ProductList{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .ProductListItem{
    background:#ffffff;
    width:200px;
    padding:20px;
    margin-right:20px;
  }
  .FooterPage{

  }
</style>
<template>
  <div class="Home">
    <header-page class="HeaderPage"></header-page>
    <search-page class="SearchPage"></search-page>
    <div class="ProductList" >
      <div class="ProductListItem" v-for="item in productList">
        <router-link target="_blank" :to="{ name: 'Detail', query: {productId: item.id} }">
          <!-- <div>
            <h3>{{item.name}}</h3>
          </div> -->
          <img  style="height:200px;width:180px;margin-top:10px;" :src="'http://img.happymmall.com/'+ item.main_image"
          :alt="item.name">
          <div>

          </div>
        </router-link>
      </div>
    </div>
    <footer-page class="FooterPage"></footer-page>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
  import FooterPage from '../footer'
  import HeaderPage from '../header'
  import SearchPage from '../search'
  import ProductService from '../../../service/product'

  export default {
    data(){
      return {
        searchField: "",
        productList: {}
      }
    },
    components: {
      "footer-page": FooterPage,
      "header-page": HeaderPage,
      "search-page": SearchPage
    },
    mounted(){
      this.searchField = this.$route.query.keyword || this.$route.query.categoryId;
      if(this.$route.query.keyword){
        this.searchProductByKeyword();
      }else if(this.$route.query.categoryId){
        this.searchProductByCategoryId();
      }
    },
    methods: {
      searchProductByKeyword(){

      },
      searchProductByCategoryId(){
        ProductService.getProductListByCategoryId(this.searchField).then((res) => {
          this.productList = res.data.result;
          console.log(this.productList);
        }).catch((error) => {

        })
      }
    }
  }
</script>
