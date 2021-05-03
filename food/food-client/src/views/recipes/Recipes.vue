<template>
  <div class="recipes">
    <div v-if="isLoading">
      <loading-spinner/>
    </div>
    <div v-else>
      <div class="recipes-list">
        <div v-for="(recipe, index) in getSuggestedRecipes" :key="index">
          <recipe-card
            :title="recipe.title"
            :image="recipe.image"
            :dish="recipe.dishTypes[0]"
            :readyInMinutes="recipe.readyInMinutes"
            :servings="recipe.servings"
            :missedIngredients="recipe.missedIngredients"
            :usedIngredients="recipe.usedIngredients"
            :vegetarian="recipe.vegetarian"
            :id="recipe.id"
            :recipe="recipe"
          >
          <router-link :to="{ name: 'RecipeDetails', params: { id: recipe.id } }">
          <i
            @click="getRecipeDetails(recipe.id)"
            class="fas fa-book-reader details"
          ></i>
        </router-link>
          </recipe-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "../../components/spooncular/RecipeCard";

import { mapGetters, mapActions } from "vuex";
export default {
  components: { RecipeCard },
  name: "Recipes",
  computed: {
    ...mapGetters(["getSuggestedRecipes", "isLoading"]),
  },
  methods: {
    ...mapActions(["getRecipeDetails"]),
  },
};
</script>

<style lang="scss" >
.recipes {
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  .recipes-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(250, 248, 248);
    .img-container {
      position: relative;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      .details {
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 1rem;
        color: rgba(255, 131, 62);
        border: 1px solid rgba(255, 131, 62);
        border-radius: 50%;
        padding: 0.5rem;
        background-color: rgba(250, 248, 248);
      }
    }
  }
}
</style>
