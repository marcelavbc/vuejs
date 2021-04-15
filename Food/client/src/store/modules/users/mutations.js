export default {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, { token, user }) {
        state.status = 'success'
        state.token = token
        state.user = user
        state.isLoggedIn = true
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.isLoggedIn = false
        state.status = ''
        state.token = ''
        state.user = {}
    },
    addRecipe(state, payload) {
        let recipesArray = [...state.recipes];
        console.log(recipesArray)
        console.log('payload', payload)

        recipesArray.push(payload)
        state.recipes = recipesArray
    },
    getRecipes(state, payload){
        state.recipes = payload
    }
}