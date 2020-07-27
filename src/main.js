import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import {TaskNode, TaskNodeStore} from './lib/index'
import '../build/dist/css/vnode.css'
Vue.config.productionTip = false
Vue.use(TaskNode)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TaskNodeStore
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
