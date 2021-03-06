import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import _resize from "@/direcitives/v-resize.js";
Vue.directive('resize', _resize)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
