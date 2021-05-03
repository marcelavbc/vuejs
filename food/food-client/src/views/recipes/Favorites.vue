<template>
  <div class="favorites">
    <h3>Favorites</h3>
    <div v-for="(recipe, index) in favorites" :key="index">
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
      ></recipe-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RecipeCard from "../../components/spooncular/RecipeCard";
export default {
  name: "Favorites",
  components: { RecipeCard },
  computed: {
    ...mapGetters(["favorites"]),
  },
};
</script>

<style>
</style>