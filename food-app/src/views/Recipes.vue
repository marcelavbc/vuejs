<template>
  <div class="recipes-list">
    <!-- <the-small-recipe-card></the-small-recipe-card> -->
    <div v-for="(recipe, index) in recipesFind" :key="index">
      <the-small-recipe-card
        :title="recipe.title"
        :image="recipe.image"
        :dish="recipe.dishTypes[0]"
        :readyInMinutes="recipe.readyInMinutes"
        :servings="recipe.servings"
        :missedIngredients="recipe.missedIngredients"
        :usedIngredients="recipe.usedIngredients"
        :vegetarian="recipe.vegetarian"
      />
    </div>
  </div>
</template>

<script>
import TheSmallRecipeCard from "../components/TheSmallRecipeCard.vue";

export default {
  components: { TheSmallRecipeCard },
  name: "Recipes",
  computed: {
    recipesFind() {
      return this.$store.getters["recipes/getSuggestedRecipes"];
    },
  },
};
</script>

<style lang="scss" scoped>
.recipes-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(250, 248, 248);
}
</style>
