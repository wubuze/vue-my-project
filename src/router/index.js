import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import home from '@/components/home'
import userCenter from '@/components/Users/center'
import userManage from '@/components/Users/manage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children : [
        { path: '', component: home },
        { path: '/user-center', component: userCenter },
        { path: '/user-manage', component: userManage }
      ]
    },
    { path: '/login', name: 'login', component: login }

  ]
})
