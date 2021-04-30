import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      data: {},
      status: '',
      errorMessage: ''
    }
  },
  getters: {
    getError(state) {
      return state.user.errorMessage
    }
  },
  mutations: {
    auth_success(state, { token, user }) {
      state.user.status = 'success';
      state.user.token = token;
      state.user.data = user;
      state.user.errorMessage = '';
    },
    auth_error(state, error) {
      state.user.status = 'error';
      state.user.errorMessage = error
    },
    logout(state) {
      state.user.status = ''
      state.user.token = ''
      state.user.data = {}
    }
  },
  actions: {
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
    }
  },
  modules: {
  }
})
