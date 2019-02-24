import Vue from 'vue'
import App from './App.vue'
import QrcodeVue from 'qrcode.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
