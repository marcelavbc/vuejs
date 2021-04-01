import axios from 'axios';

export default {
    async loadIngredients(context, payload) {
        const newValue = payload.target.value.toLowerCase();
        const options = {
            method: "GET",
            url:
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
            params: { number: "5", query: newValue },
            headers: {
                "x-rapidapi-key":
                    "3ae8633d0fmshea232df942d8d7bp19b871jsn75705b922f90",
                "x-rapidapi-host":
                    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            },
        };

        const res = await axios.request(options)
        const suggestedIngredients = []
        res.data.forEach(ingredient => {
            suggestedIngredients.push(ingredient)
        })
        context.commit('loadIngredients', suggestedIngredients)
    }, 
    

}