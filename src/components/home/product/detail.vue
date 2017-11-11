<style>
  .DetailList{
    padding: 20px 10% 20px 10%;
    display: flex;
    flex-direction: row;
  }
  .LargeImage{
    width: 500px;
    height: 300px;
    border: 1px solid #999999;
  }
  .SmallImage{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
  }
  .SmallImageItem{
    width: 100px;
    height: 100px;
    border: 1px solid #999999;
    margin-right: 20px;
  }
  .ProductDetailImage{

  }
  .ProductDetailInfo{
    margin-left: 20px;
  }
  .PriceInfo{
    vertical-align: middle;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 50px;
    background: #999999;
  }
  .StockInfo{
    margin-bottom: 15px;
  }
  .ProductNumSelect{
    margin-bottom: 15px;
  }
</style>
<template>
  <div class="DetailList">
    <div class="ProductDetailImage">
      <div>
        <img class="LargeImage" :src="mainImageUrl"/>
      </div>
      <div class="SmallImage">
        <img class="SmallImageItem" v-for="(subimage, key) in subImageList"
          :src="'http://img.happymmall.com/'+subimage" @mouseenter="onMouseenterSubimage">
      </div>
    </div>
    <div class="ProductDetailInfo">
      <div class="DetailTitle">
        <span style="font-size: 18px;">{{productDetail.name}}</span>
      </div>
      <div class="DetailSubtitle">
        <span style="color:#c40000;">{{productDetail.subtitle}}</span>
      </div>
      <div class="PriceInfo">
        <span>价格：</span>
        <span style="color:#c40000;">{{productDetail.price}}</span>
      </div>
      <div class="StockInfo">
        <span>库存：</span>
        <span>{{productDetail.stock}}</span>
      </div>
      <div class="ProductNumSelect">
        <span>数量：</span>
        <span>
          <el-input-number size="small" v-model="purchaseNumber"></el-input-number>
        </span>
      </div>
      <div class="PushIntoCart">
        <el-button style="background:#c40000;color:#ffffff;" @click="addToCart">加入购物车</el-button>
      </div>
    </div>
    <div class="ProductDetailImage">
      <!-- {{productDetail.detail}} -->
    </div>
  </div>

</template>
<script>
  import ProductService from '../../../service/product'
  export default{
    data(){
      return {
        productId: "",
        productDetail: {},
        purchaseNumber: 1,
        subImageList: [],
        detailImage: "",
        mainImageUrl: ""
      }
    },
    mounted(){
      this.productId = this.$route.query.productId;
      this.getProductDetail();
    },
    methods: {
      getProductDetail(){
        ProductService.getProductDetail(this.productId).then((res) => {
          this.productDetail = res.data.result[0];
          this.subImageList = this.productDetail.sub_images.split(',');
          this.mainImageUrl = 'http://img.happymmall.com/' + this.productDetail.main_image;
        }).catch((error) => {

        })
      },
      onMouseenterSubimage(e){
        console.log(e.target.src)
        this.mainImageUrl = e.target.src
      },
      addToCart(){
        // need sign is if logined
        // default as checked
        ProductService.addProductToCart(userId, productId, quantity).then((res) => {
          this.$route.push("/home/success")
        }).catch((error) => {

        })
      }
    }
  }
</script>
