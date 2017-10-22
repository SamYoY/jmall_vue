import Vue from 'vue'
import Router from 'vue-router'
import AdminRouter from './adminRouter'
import OrdinaryRouter from './ordinaryRouter'
import UserRouter from './userRouter'
import Login from '@/components/login'
import Home from '@/components/home'
import Manage from '@/components/manage'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: OrdinaryRouter
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      children: AdminRouter
    },
    {
      path: '/user',
      meta: {
        auth: true,
      },
      component: (resolve) => require(['../components/user.vue'], resolve),
      children: UserRouter
    }

  ]
})
