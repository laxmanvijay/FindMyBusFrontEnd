import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Home from '@/components/home'
import Search from '@/components/search'
import Buses from '@/components/buses'
import Hotels from '@/components/hotels'
import About from '@/components/about'
import Dashboard from '@/components/dashboard'
import Payment from '@/components/payment'
import Admin from '@/components/admin'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/admin',
      name:'admin',
      component:Admin
    },
    {
      path:'/hotels',
      name:'hotels',
      component:Hotels
    },
      {
      path:'/buses',
      name:'buses',
      component:Buses
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/payment',
      name:'payment',
      component:Payment
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:Dashboard
    }
  
  ]
})
