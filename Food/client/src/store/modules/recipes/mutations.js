export default {
    changeInput(state, payload) {
        state.input = payload;
    },
    addIngredientToList(state, payload) {
        state.ingredientsSelected.push(payload);
    },
    cleanIngredientsList(state) {
        state.ingredients = [];
    },
    loadIngredients(state, payload) {
        state.ingredients = payload;
    },
    deleteIngredient(state, payload) {
        const index = state.ingredientsSelected.findIndex(ingredient => ingredient.name === payload.name);
        if (index > -1) {
            state.ingredientsSelected.splice(index, 1);
        }
    },
    loadRecipes(state, payload){
        state.recipes = payload;
    }, 
    loadRecipeDetail(state, payload){
        state.recipeInDetail = payload;
    }, 
    cleanSelection(state){
        state.ingredientsSelected = [];
    }, 
    toggleModal(state){
        state.showModal = !state.showModal;
    }
    
}