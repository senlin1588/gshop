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
import Login from '../pages/Login/Login.vue'

  const  routes = [
      {
        path: '/',
        redirect: '/msite'
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/msite',
        component: Msite,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/search',
        component: Search,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/order',
        component: Order,
        meta: {
          showFooter: true
        }
      },
      {
        path: '/profile',
        component: Profile,
        meta: {
          showFooter: true
        }
      }
    ]
    const router = createRouter({
      history: createWebHashHistory(), //
      routes,
    });
    export default router;    
  