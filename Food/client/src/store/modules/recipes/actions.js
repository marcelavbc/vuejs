import axios from 'axios';

export default {
    async loadTheIngredients(context, payload) {
        const newValue = payload.target.value.toLowerCase();
        context.state.loadingIng = true;
        const options = {
            method: "GET",
            url:
                "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
            params: { number: "6", query: newValue },
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
    async loadTheRecipes(context) {
        context.state.loading = true;
        const params = context.state.ingredientsSelected;
        const ingrNames = []
        params.forEach(obj => ingrNames.push(obj.name))
        const paramToSearch = ingrNames.join()

        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
            params: {
                ingredients: paramToSearch,
                number: '20',
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
        let ids = [];
        suggestedRecipes.forEach(recipe => ids.push(recipe.id));
        const idsToSearch = ids.join()

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

        const favoriteArray = context.rootState.users.user.recipes;
        console.log('favorite', favoriteArray)
        
        for (let i = 0; i < finalRecipes.length; i++) {
            for (let j = 0; j < favoriteArray.length; j++) {
                if (finalRecipes[i].id === favoriteArray[j].id) {
                    console.log(finalRecipes[i].id)
                    console.log('isfavorite')
                    finalRecipes[i].isFavorite = true
                } 
            }
        }

        context.state.loading = false
        context.commit('loadRecipes', finalRecipes)
    },
    async loadTheRecipesNotLogg(context) {
        context.state.loading = true;
        const params = context.state.ingredientsSelected;
        const ingrNames = []
        params.forEach(obj => ingrNames.push(obj.name))
        const paramToSearch = ingrNames.join()

        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
            params: {
                ingredients: paramToSearch,
                number: '20',
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
        let ids = [];
        suggestedRecipes.forEach(recipe => ids.push(recipe.id));
        const idsToSearch = ids.join()

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

        const favoriteArray = context.rootState.users.user.recipes;
        
        for (let i = 0; i < finalRecipes.length; i++) {
            for (let j = 0; j < favoriteArray.length; j++) {
                if (finalRecipes[i].id === favoriteArray[j].id) {
                    console.log(finalRecipes[i].id)
                    finalRecipes[i].isFavorite = true
                } 
            }
        }

        context.state.loading = false
        context.commit('loadRecipes', finalRecipes)
    },
    async loadTheRecipeDetail(context, payload) {
        const recipesArray = context.state.recipes;
        const recipe = await recipesArray.find(recipe => recipe.id === payload)
        console.log(recipe)
        context.commit('loadRecipeDetail', recipe)
    },
    cleanRecipesState({commit}){
        commit('cleanRecipesState')
    }
}