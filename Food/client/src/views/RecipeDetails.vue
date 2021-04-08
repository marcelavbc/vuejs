<template>
  <div class="details-container">
    <the-recipe-card
      :title="recipeInDetails.title"
      :image="recipeInDetails.image"
      :dish="recipeInDetails.dishTypes[0]"
      :readyInMinutes="recipeInDetails.readyInMinutes"
      :servings="recipeInDetails.servings"
      :missedIngredients="recipeInDetails.missedIngredients"
      :usedIngredients="recipeInDetails.usedIngredients"
      :vegetarian="recipeInDetails.vegetarian"
      :id="recipeInDetails.id"
      :instructions="recipeInDetails.instructions"
    >
    </the-recipe-card>
  </div>
</template>

<script>
import TheRecipeCard from "../components/TheRecipeCard.vue";

export default {
  name: "RecipeDetails",
  components: { TheRecipeCard },
  computed: {
    recipeInDetails() {
      return this.$store.getters["recipes/getRecipeDetails"];
    },
  },
  methods: {},
};
</script>

<style>
.details-container {
  margin: 4rem 1rem 0;
}
</style>