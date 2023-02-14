import App from './App'

import tabBar from '@/components/tabbar/tabBar.vue'
Vue.component('tabbar',tabBar) //挂载
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
// 挂在全局自定义的tarbar


import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif