import axios from 'axios';

export default {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({ url: 'http://localhost:5000/api/auth/login', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.token
                    const user = resp.data.user
                    console.log('user', resp.data.user)
                    console.log(resp.data.token)
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', {token, user})
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
            axios({ url: 'http://localhost:5000/api/auth/signup', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.token
                    const user = resp.data.user
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', {token, user})
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            console.log(reject)
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    }, 
    addRecipe({commit}, recipe){
        return new Promise((resolve, reject) => {
            axios({ url: 'http://localhost:5000/api/auth/addRecipe', data: recipe, method: 'POST' })

            console.log(reject)
            console.log(recipe)
            let recipeToAdd = recipe
            commit('add_recipe', recipeToAdd)
            resolve()
        })
    }

    
}
