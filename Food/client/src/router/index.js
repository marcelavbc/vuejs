import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import Recipes from '../views/Recipes.vue'
import Favorites from '../views/Favorites.vue'
import Resources from '../components/resources/Resources.vue'
import RecipeDetails from '../views/RecipeDetails.vue'

import store from '../store/modules/users/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/recipes/:id',
    name: 'RecipeDetails',
    component: RecipeDetails,
    props: true,
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resources,
    meta: {
      requiresAuth: true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
});

export default router
