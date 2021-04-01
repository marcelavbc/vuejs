export default{
    changeInput(state, payload){
        state.input = payload
    },
    addIngredientToList(state, payload){
        state.ingredientsSelected.push(payload)
    }
}