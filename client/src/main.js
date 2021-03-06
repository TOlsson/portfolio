import Vue from 'vue'
import App from './App.vue'
import router from './router'
import projectBox from './components/projectBox'
import iconFooter from './components/icon_footer'
import customHeader from './components/custom-header'
import lineClamp from 'vue-line-clamp'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(require('vue-cookies'))
Vue.use(lineClamp)

Vue.$cookies.config('1h')
Vue.$cookies.set('theme', 'default')
Vue.$cookies.set('hover-time', '1s')

Vue.component('project-box', projectBox)
Vue.component('icon-footer', iconFooter)
Vue.component('custom-header', customHeader)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
