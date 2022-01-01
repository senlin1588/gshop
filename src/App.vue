<template>
<div id="app">
    <header-top></header-top>
   <router-view></router-view>
   <footer-guide></footer-guide>
</div>
 
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import HelloWorld from './components/HelloWorld.vue'
import ShopList from './components/ShopList/ShopList.vue'

export default {
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
