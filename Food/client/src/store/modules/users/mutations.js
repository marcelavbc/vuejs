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
        console.log(state, payload)
        let recipesArray = [...state.recipes];
        console.log(recipesArray)
        let index = recipesArray.indexOf(payload);
        console.log('index', index)
        for (let i = 0; i < recipesArray.length; i++) {
            if(recipesArray[i].id !== payload.id){
                recipesArray.push(payload)
                console.log(recipesArray)
            } else {
                recipesArray[i].isFavorite = false;
                recipesArray.slice(index, 1)
                console.log(recipesArray)
            }
        }
        console.log('payload', payload)
        state.recipes = recipesArray
    },
    getRecipes(state, payload) {
        state.recipes = payload
    }
}