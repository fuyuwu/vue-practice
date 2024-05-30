import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import formatAmount from './utils/formatAmount'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.prototype.$formatAmount = formatAmount
Vue.use(Vuetify)

new Vue({
  Vuetify,
  render: h => h(App)
}).$mount('#app')