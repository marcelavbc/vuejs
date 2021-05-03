import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import TheForm from '../src/components/utils/TheForm.vue'
import IngredientImage from '../src/components/utils/IngredientImage.vue'
import TheButton from '../src/components/utils/TheButton.vue'
import LoadingSpinner from '../src/components/utils/LoadingSpinner'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
const accessToken = localStorage.getItem('access_token')

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

Vue.component('the-form', TheForm)
Vue.component('ingredient-image', IngredientImage)
Vue.component('the-button', TheButton)
Vue.component('loading-spinner', LoadingSpinner)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
