export default{
    ingredients(state){
        return state.ingredients
    }, 
    hasIngredients(state){
        return state.ingredients && state.ingredients.length > 0;
    }, 
    ingredientsSelected(state){
        return state.ingredientsSelected
    }, 
    getInputValue(state){
        return state.input
    }, 
    getSuggestedRecipes(state){
        return state.recipes
    }
}