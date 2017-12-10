import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Home from '@/components/home'
import Search from '@/components/search'
import Buses from '@/components/buses'
import Hotels from '@/components/hotels'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/hotels',
      name:'hotels',
      component:Hotels
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/buses',
      name:'buses',
      component:Buses
    }
  ]
})
