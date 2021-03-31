import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheIngredientImg from './components/TheIngredientImg'

Vue.config.productionTip = false
Vue.component('the-ingredient-img', TheIngredientImg)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
