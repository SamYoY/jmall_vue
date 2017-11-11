<style>
  .Home {
    padding: 10px;
  }
  .HeaderPage{

  }
  .ContentPage{
    margin-top: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .KeywordPage{
    margin-top: 20px;
    padding-left: 50px;
  }
  .FooterPage{

  }
</style>
<template>
  <div class="Home">
    <header-page class="HeaderPage"></header-page>
    <search-page class="ContentPage"></search-page>
    <keyword-page class="KeywordPage"></keyword-page>
    <category-page class="ContentPage"></category-page>
    <footer-page class="FooterPage"></footer-page>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
  import FooterPage from './home/footer'
  import HeaderPage from './home/header'
  import SearchPage from './home/search'
  import KeywordPage from './home/keyword'
  import CategoryPage from './home/category'

  export default {
    data(){
      return {

      }
    },
    components: {
      "footer-page": FooterPage,
      "header-page": HeaderPage,
      "search-page": SearchPage,
      "keyword-page": KeywordPage,
      "category-page": CategoryPage
    },
    methods: {

    }
  }
</script>
