export default {
    isLoggedIn(state) {
        return state.isLoggedIn;
    },
    getUser(state){
        return state.user.username
    },
    isFavorite(state) {
        return state.recipes
    },
    ingredients(state) {
        return state.ingredients
    },
    ingredientsAreLoading(state) {
        return state.loadingIng;
    },
    hasIngredients(state) {
        return state.ingredients && state.ingredients.length > 0;
    },
    ingredientsSelected(state) {
        return state.ingredientsSelected;
    },
    getInputValue(state) {
        return state.input;
    },
    getSuggestedRecipes(state) {
        return state.recipes;
    },
    isLoading(state) {
        return state.loading;
    },
    getRecipeDetails(state) {
        return state.recipeInDetail
    },
    showModal(state) {
        return state.showModal
    }

}