<template>
<div id="app">
   <router-view></router-view>
   <footer-guide></footer-guide>
</div>
 
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    FooterGuide
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
