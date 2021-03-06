/*
路由器模块
 */
// import Vue from 'vue'
// import { createApp } from 'vue'
// import VueRouter from 'vue-router'

import { createRouter, createWebHashHistory } from "vue-router";

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

  const  routes = [
      {
        path: '/',
        redirect: '/msite'
      },
      {
        path: '/msite',
        component: Msite,
      },
      {
        path: '/search',
        component: Search,
      },
      {
        path: '/order',
        component: Order,
      },
      {
        path: '/profile',
        component: Profile,
      }
    ]
    const router = createRouter({
      history: createWebHashHistory(), //
      routes,
    });
    export default router;    
  