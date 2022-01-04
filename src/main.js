import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
// new Vue({
//     el: '#app',
//     render: h => h(App),
    
//   })