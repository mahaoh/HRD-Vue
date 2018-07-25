import Vue from 'vue'
import Router from 'vue-router'
import vuex from 'vuex'
import home from '@/views/home/home.vue'
import login from '@/views/login/login.vue'
import loginDL from '../views/login/loginDL.vue'
Vue.use(Router)
Vue.use(vuex)

export default new Router({
  routes: [
  	{
  		path:'*',
  		redirect:'/home'  //当访问的路径不存在时，重定向到首页
  	},
    {
    	path: '/home',
      	name: 'home',
      	component: home   //首页
    },
    {
    	path:'/login/',
    	name:'login',
    	component:login  //注册页面
    },
    {
    	path:'/loginDL/',   //登录页面
    	name:'loginDL',
    	component:loginDL
    }
  ]
});