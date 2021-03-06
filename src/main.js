import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from '@/components/common/toast'

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast) 

// 解决移动端300ms延迟的问题
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(VueLazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
