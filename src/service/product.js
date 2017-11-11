import axios from 'axios'
function getAllCategory(){
  return axios.get('/jmall/product/category')
}

function getProductListByCategoryId(categoryId){
  console.log(categoryId)
  return axios.get('/jmall/product/getProductByCategory', {
    params: {
      "categoryId": categoryId
    }
  })
}

function getProductListByKeyword(keyword){
  return axios.get('/jmall/product/getProductByKeyword', {
    params: {
      "keyword": keyword
    }
  })
}

function getProductDetail(productId){
  console.log(productId);
  return axios.get('/jmall/product/getProductDetail', {
    params: {
      "productId": productId
    }
  })
}

function addProductToCart(userId, productId, quantity){
  return axios.post('/jmall/product/',{
    userId,
    productId,
    quantity,
    "checked": 1
  })
}

export default {
  getAllCategory,
  getProductListByCategoryId,
  getProductDetail,
  getProductListByKeyword,
  addProductToCart
}
