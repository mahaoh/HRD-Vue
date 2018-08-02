import Vue from 'vue'
import Router from 'vue-router'
import vuex from 'vuex'
import axios from 'axios'
import home from '@/views/home/home.vue'
import login from '@/views/login/login.vue'
import loginDL from '../views/login/loginDL.vue'
import detailss from '@/views/details/details.vue'
Vue.use(Router)
Vue.use(vuex)
Vue.prototype.$axios=axios;

export default new Router({
  mode: 'history',//在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
  routes: [
  	{
  		path:'*',
  		redirect:'/home'  //当访问的路径不存在时，重定向到首页
  	},
    {
    	  path: '/home',
      	name: 'home',
      	component: home  //首页  
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
    },
    {
      path:'/detailss/',    //列表详情页
      name:'detailss',
      component:detailss
    }
  ]
});
