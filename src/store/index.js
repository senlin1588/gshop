/*
vuex的核心管理对象store对象模块
 */

import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'



export default createStore({
  state,
  mutations,
  actions,
  
})

