import axios from 'axios';

export default {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({ url: 'http://localhost:3000/api/user/login', data: user, method: 'POST' })
                .then(resp => {
                    console.log(resp)
                    const token = resp.data.data.token
                    const user = resp.data.data.user
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', { token, user })
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({ url: 'http://localhost:3000/api/user/register', data: user, method: 'POST' })
                .then(resp => {
                    console.log(resp)
                    const token = resp.data.token
                    const user = resp.data.user
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', { token, user })
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token')
                    console.log('Err in actions', err)
                    reject(err)
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    },
    addToFavorites({ commit }, { recipe, user }) {
        return new Promise((resolve) => {
            axios({ url: 'http://localhost:3000/api/favorites/' + user, data: recipe, method: 'PUT' })
                .then(() => {
                    commit('addRecipe', recipe);
                    resolve()
                })
                .catch(err => console.log('err', err))
        })
    },
    getUserRecipes({ commit }, user) {
        return new Promise((resolve) => {
            axios({ url: 'http://localhost:3000/api/favorites/' + user, data: user, method: 'GET' })
                .then((resp) => {
                    const recipes = resp.data.recipes
                    commit('getRecipes', recipes)
                    resolve()
                })
        })
    }
}
