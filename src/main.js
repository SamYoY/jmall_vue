// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'

import Store from './store'
import App from './app'
import ViewRouter from './router'
import I18n from './locale'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import './assets/css/common.css'

Vue.use(ElementUi);

Vue.config.productionTip = false

ViewRouter.beforeEach((to, from, next) => {
  next()
})

Axios.interceptors.request.use((config) => {
  config.url = "http://localhost:3000" + config.url;
  return config
}, (err) => {
  return Promise.reject(err);
})

new Vue({
  el: '#app',
  router: ViewRouter,
  sotre: Store,
  i18n: I18n,
  template: '<App/>',
  components: { App }
})
