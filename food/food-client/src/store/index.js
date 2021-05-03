import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    user: {
      data: {},
      status: '',
      errorMessage: '',
      isLoggedIn: false
    },
    recipes: {
      ingredientInput: '',
      ingredients: [],
      ingredientsSelected: [],
      recipesFound: [],
      recipeInDetail: {}
    },

  },
  getters: {
    getState(state) {
      return state.recipes
    },
    getError(state) {
      return state.user.errorMessage
    },
    isLoggedIn(state) {
      return state.user.isLoggedIn;
    },
    getUser(state) {
      return state.user.data;
    },
    getSearchInput(state) {
      return state.recipes.ingredientInput
    },
    getIngredients(state) {
      return state.recipes.ingredients
    },
    getSelectedIngredients(state) {
      return state.recipes.ingredientsSelected
    },
    getSuggestedRecipes(state) {
      return state.recipes.recipesFound
    },
    getDetails(state) {
      return state.recipes.recipeInDetail
    },
    isLoading(state) {
      return state.isLoading
    }

  },
  mutations: {
    //Auth Mutations
    auth_success(state, { token, user }) {
      state.user.status = 'success';
      state.user.token = token;
      state.user.data = user;
      state.user.errorMessage = '';
      state.user.isLoggedIn = true
    },
    auth_error(state, error) {
      state.user.status = 'error';
      state.user.errorMessage = error;
    },
    logout(state) {
      state.user.status = '';
      state.user.token = '';
      state.user.data = {};
      state.user.isLoggedIn = false
    },
    //Recipes Mutations
    isLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setInput(state, newInput) {
      state.recipes.ingredientInput = newInput;
    },
    setSuggestedIngredients(state, payload) {
      state.recipes.ingredients = payload;
    },
    getSuggestedIngredients(state, payload) {
      state.recipes.ingredientsSelected.unshift(payload);
    },
    deleteIngredient(state, index) {
      state.recipes.ingredientsSelected.splice(index, 1);
    },
    getRecipes(state, payload) {
      state.recipes.recipesFound = payload;
    },
    getRecipe(state, recipe) {
      state.recipes.recipeInDetail = recipe;
    },
    cleanSelection(state) {
      state.recipes.ingredientsSelected = [];
    }

  },
  actions: {
    //Auth Actions
    register({ commit }, user) {
      axios({ url: 'http://localhost:3000/api/user/register', data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token, user })
          router.push("/")
        })
        .catch((error) => {
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log('error.response');
            const errorMessage = error.response.data.error;
            console.log(errorMessage);
            localStorage.removeItem('token')
            commit('auth_error', errorMessage)
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    },
    login({ commit }, user) {
      axios({ url: 'http://localhost:3000/api/user/login', data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token, user })
          router.push("/")
        })
        .catch((error) => {
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log('error.response');
            const errorMessage = error.response.data.error;
            console.log(errorMessage);
            localStorage.removeItem('token')
            commit('auth_error', errorMessage)
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    },
    logout({ commit }) {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    },
    //Recipes Actions
    SET_INPUT(context, newInput) {
      context.commit("setInput", newInput)
    },
    async loadTheIngredients({ commit }, payload) {
      const newValue = payload.target.value.toLowerCase();
      const options = {
        method: "GET",
        url:
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
        params: { number: "6", query: newValue },
        headers: {
          'x-rapidapi-key': process.env.VUE_APP_SPOONCULAR_API_KEY,
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
      const res = await axios.request(options)
      const suggestedIngredients = []
      res.data.forEach(ingredient => {
        suggestedIngredients.push(ingredient)
      })
      commit('setSuggestedIngredients', suggestedIngredients)

    },
    addIngredient({ commit }, payload) {
      let index = this.state.recipes.ingredientsSelected.findIndex(element => element === payload)
      if (index === -1) {
        commit('getSuggestedIngredients', payload)
      }
    },
    deleteIngredient({ commit }, payload) {
      let index = this.state.recipes.ingredientsSelected.findIndex(element => element === payload)
      commit('deleteIngredient', index)
    },
    cleanIngredients({ commit }) {
      commit("cleanSelection")
    },
    async loadRecipes({ commit }) {
      commit("isLoading")
      const ingredients = this.state.recipes.ingredientsSelected;
      const params = [];
      ingredients.forEach(ingredient => params.push(ingredient.name));
      const paramToSearch = params.join();

      const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
        params: {
          ingredients: paramToSearch,
          number: '5',
          ranking: '1',
          ignorePantry: 'true'
        },
        headers: {
          'x-rapidapi-key': process.env.VUE_APP_SPOONCULAR_API_KEY,
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      const res = await axios.request(options);
      const suggestedRecipes = [];
      res.data.forEach(recipe => {
        suggestedRecipes.push(recipe)
      })
      let ids = [];
      suggestedRecipes.forEach(recipe => ids.push(recipe.id));
      const idsToSearch = ids.join()

      const optionsIds = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
        params: { ids: idsToSearch },
        headers: {
          'x-rapidapi-key': '3ae8633d0fmshea232df942d8d7bp19b871jsn75705b922f90',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      const infoRecipes = await axios.request(optionsIds)
      const finalRecipes = [];
      infoRecipes.data.forEach(recipe => {
        finalRecipes.push(recipe)
      })

      for (let i = 0; i < finalRecipes.length; i++) {
        for (let j = 0; j < suggestedRecipes.length; j++) {
          if (finalRecipes[i].id === suggestedRecipes[j].id) {
            finalRecipes[i].missedIngredientCount = suggestedRecipes[j].missedIngredientCount;
            finalRecipes[i].missedIngredients = suggestedRecipes[j].missedIngredients;
            finalRecipes[i].usedIngredients = suggestedRecipes[j].usedIngredients;
          }
        }
      }
      commit('getRecipes', finalRecipes);
      router.push('/recipes');
      commit("isLoading")

    },
    async getRecipeDetails({ commit }, id) {
      commit("isLoading")
      const recipeArray = this.state.recipes.recipesFound;
      const recipe = await recipeArray.find(recipe => recipe.id === id);
      commit('getRecipe', recipe);
      setTime()
      function setTime(){
        setTimeout(() => {
          commit("isLoading")
        }, 1000)
      }
    }
  },
  modules: {
  }
})
