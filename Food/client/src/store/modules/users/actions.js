import axios from 'axios';

export default {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({ url: 'http://localhost:4000/api/auth/signin', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.token
                    const user = resp.data.user
                    console.log('user', resp.data)
                    localStorage.setItem('token', token)
                    // Add the following line:
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
            axios({ url: 'http://localhost:4000/api/auth/signup', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.token
                    const user = resp.data.user
                    console.log(resp.data)
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
            axios({ url: 'http://localhost:4000/api/recipe/' + user, data: recipe, method: 'PUT' })
                .then(() => {
                    console.log(recipe);
                    commit('addRecipe', recipe);
                    resolve()
                })
                .catch(err => console.log('err', err))
        })
    },
    getUserRecipes({commit}, user) {
        console.log(commit)
        return new Promise((resolve) => {
            axios({url: 'http://localhost:4000/api/recipe/' + user, data: user, method: 'GET' })
            .then((resp) => {
                const recipes = resp.data.recipes
                commit('getRecipes', recipes)
                resolve()
            })
        })
    }
}
