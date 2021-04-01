// import axios from 'axios';

export default {
    changeInput(state, payload) {
        state.input = payload
    },
    addIngredientToList(state, payload) {
        state.ingredientsSelected.push(payload)
    },
    cleanIngredientsList(state) {
        state.ingredients = []
    },
    loadIngredients(state, payload) {
        state.ingredients = payload;
    },
    deleteIngredient(state, payload) {
        const index = state.ingredientsSelected.findIndex(ingredient => ingredient.name === payload.name);
        if (index > -1) {
            state.ingredientsSelected.splice(index, 1)
        }
    }
}