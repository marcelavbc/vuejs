import Vue from 'vue'
import Vuex from 'vuex'

import recipesModule from './modules/recipes/index';
import usersModule from './modules/users/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    recipes: recipesModule,
    users: usersModule
  }
})
