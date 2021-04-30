import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheForm from '../src/components/utils/TheForm.vue'
import axios from 'axios'


Vue.config.productionTip = false

Vue.prototype.$http = axios;
const accessToken = localStorage.getItem('access_token')

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

Vue.component('the-form', TheForm)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
