import Vue from 'vue'
import Router from 'vue-router'
import search from '@/views/search'
import homepage from '@/views/homepage'
import like from '@/views/like'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/search', component: search
    },
    {
      path: '/',
     
      component: homepage
    },
    {
    	path:'/like',
    	component:like
    },
  ]
})
