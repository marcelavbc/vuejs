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
    async loadTheRecipes(context, payload) {
        console.log(context, payload)
        const params = context.state.ingredientsSelected;
        const ingrNames = []
        params.forEach(obj => ingrNames.push(obj.name))
        const paramToSearch = ingrNames.join()
        console.log(paramToSearch)

        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
            params: {
                ingredients: paramToSearch,
                number: '2',


                ranking: '1',
                ignorePantry: 'true'
            },
            headers: {
                'x-rapidapi-key': process.env.VUE_APP_SPOONCULAR_API_KEY,
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        const res = await axios.request(options);
        const suggestedRecipes = [];
        res.data.forEach(recipe => {
            suggestedRecipes.push(recipe)
        })

        //console.log('suggestedRecipes', suggestedRecipes)

        let ids = [];
        suggestedRecipes.forEach(recipe => ids.push(recipe.id));
        const idsToSearch = ids.join()
        console.log(idsToSearch)

        const optionsIds = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
            params: { ids: idsToSearch },
            headers: {
                'x-rapidapi-key': '3ae8633d0fmshea232df942d8d7bp19b871jsn75705b922f90',
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        const infoRecipes = await axios.request(optionsIds)
        const finalRecipes = [];
        infoRecipes.data.forEach(recipe => {
            finalRecipes.push(recipe)
        })

        for (let i = 0; i < finalRecipes.length; i++) {
            for (let j = 0; j < suggestedRecipes.length; j++) {
                if (finalRecipes[i].id === suggestedRecipes[j].id) {
                    finalRecipes[i].missedIngredientCount = suggestedRecipes[j].missedIngredientCount;
                    finalRecipes[i].missedIngredients = suggestedRecipes[j].missedIngredients;
                    finalRecipes[i].usedIngredients = suggestedRecipes[j].usedIngredients;

                }
            }
        }

        console.log('finalRecipes', finalRecipes)
        context.commit('loadRecipes', finalRecipes)
    }


}