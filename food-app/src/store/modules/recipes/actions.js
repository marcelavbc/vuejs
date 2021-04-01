import axios from 'axios';

export default {
    async loadTheIngredients(context, payload) {
        const newValue = payload.target.value.toLowerCase();
        const options = {
            method: "GET",
            url:
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
            params: { number: "5", query: newValue },
            headers: {
                'x-rapidapi-key': process.env.VUE_APP_SPOONCULAR_API_KEY,
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
    // async loadTheRecipes(context, payload) {
    //     console.log(context, payload)
    //     const options = {
    //         method: 'GET',
    //         url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
    //         params: {
    //           ingredients: 'apples,flour,sugar',
    //           number: '5',
    //           ranking: '1',
    //           ignorePantry: 'true'
    //         },
    //         headers: {
    //           'x-rapidapi-key': process.env.SPOONCULAR_API_KEY,
    //           'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //         }
    //       };

    // }


}