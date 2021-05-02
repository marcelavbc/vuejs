import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import TheForm from '../src/components/utils/TheForm.vue'
import IngredientImage from '../src/components/utils/IngredientImage.vue'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
const accessToken = localStorage.getItem('access_token')

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

Vue.component('the-form', TheForm)
Vue.component('ingredient-image', IngredientImage)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
