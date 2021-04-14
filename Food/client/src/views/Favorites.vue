<template>
  <div class="favorites">
    <h3>Favorites</h3>
    
    <div v-for="(recipe, index) in getAllRecipes" :key="index">
      <p>{{recipe.title}}</p>
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
};
</script>

<style lang="scss">
.favorites {
  margin: 4rem 1rem 0;
}
</style>