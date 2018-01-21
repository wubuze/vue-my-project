import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import UserCenter from '@/components/Users/center'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children : [
        { path: '', component: Home },
        { path: '/user-center', component: UserCenter }
      ]
    },
    { path: '/login', name: 'login', component: Login }

  ]
})
