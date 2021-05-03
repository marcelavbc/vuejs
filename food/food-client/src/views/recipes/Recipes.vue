<template>
  <div class="recipes">
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
          :isFavorite="recipe.isFavorite"
        >
        </recipe-card>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "../../components/spooncular/RecipeCard";

import { mapGetters } from "vuex";
export default {
  components: { RecipeCard },
  name: "Recipes",
  computed: {
    ...mapGetters(["getSuggestedRecipes"]),
  },
  methods: {
    getDetails(id) {
      this.$store.dispatch("recipes/loadTheRecipeDetail", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.recipes {
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  .recipes-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(250, 248, 248);
  }
}
</style>
