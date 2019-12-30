import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false
if (process.env['VUE_APP_GAID']) {
  Vue.use(VueGtag, {
    config: { id: process.env['VUE_APP_GAID'] }
  }, router)
}

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
