import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'



Vue.config.productionTip = false


/* eslint-disable no-new */


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
