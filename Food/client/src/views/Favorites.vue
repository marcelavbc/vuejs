<template>
  <div class="favorites">
    <h3>Favorites</h3>

    <div v-for="(recipe, index) in getAllRecipes" :key="index">
      <the-recipe-card
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
      ></the-recipe-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getAllRecipes() {
      return this.$store.getters["users/getAllFavorites"];
    },
  },
  methods: {
    getRecipes() {
      return this.$store.getters["users/getAllFavorites"];
    },
  },
  beforeMount(){
    console.log('before')
    this.getRecipes()
  }
};
</script>

<style lang="scss">
.favorites {
  margin: 4rem 1rem 0;
}
</style>