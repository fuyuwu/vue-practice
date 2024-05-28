import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import formatAmount from './utils/formatAmount'

Vue.config.productionTip = false
Vue.prototype.$formatAmount = formatAmount

new Vue({
  render: h => h(App)
}).$mount('#app')