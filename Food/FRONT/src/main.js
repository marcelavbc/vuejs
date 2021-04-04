import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheIngredientImg from './components/ingredients/TheIngredientImg'
import LoadingSpinner from './components/utils/LoadingSpinner'
import Appear from './components/utils/Appear'
import AlertModal from './components/utils/AlertModal'



Vue.config.productionTip = false
Vue.component('the-ingredient-img', TheIngredientImg)
Vue.component('loading-spinner', LoadingSpinner)
Vue.component('appear', Appear)
Vue.component('alert-modal', AlertModal)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
