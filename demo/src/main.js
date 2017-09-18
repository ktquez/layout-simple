import Vue from 'vue'
import router from './router'
import VueHead from 'vue-head'
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueExtendLayout)
Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout
})
