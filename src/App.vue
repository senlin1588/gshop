<template>
<div id="app">
   <router-view></router-view>
   <footer-guide v-show="$route.meta.showFooter"></footer-guide>
</div>
 
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import HelloWorld from './components/HelloWorld.vue'
import ShopList from './components/ShopList/ShopList.vue'
import {reqAddress} from '@/api'
export default {
  created () {
  // 异步获取address
   this.$store.dispatch('getAddress')
},
  async mounted(){
      //const result = await reqAddress('116.36867','40.10038')
     
  },
  name: 'App',
  components: {
    FooterGuide,
    HeaderTop,
    ShopList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
