import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import islogin from '@/components/islogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/islogin',
      name: 'islogin',
      component: islogin
    }
  ]
})
