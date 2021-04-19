<template>
  <div class="recipes">
    <div class="recipes-list">
      <div v-if="isLoading">
        <loading-spinner />
      </div>
      <div v-else v-for="(recipe, index) in recipesFind" :key="index">
        <appear :delay="400" :translate="['-100px', 0]">
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
          >
            <router-link
              :to="{ name: 'RecipeDetails', params: { id: recipe.id } }"
            >
              <span @click="getDetails(recipe.id)"
                ><i class="fas fa-book-reader details"></i></span
            ></router-link>
          </the-recipe-card>
        </appear>
      </div>
    </div>
  </div>
</template>

<script>
import TheRecipeCard from "../components/TheRecipeCard.vue";

export default {
  components: { TheRecipeCard },
  name: "Recipes",
  computed: {
    recipesFind() {
      return this.$store.getters["recipes/getSuggestedRecipes"];
    },
    isLoading() {
      return this.$store.getters["recipes/isLoading"];
    },
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

    .details {
      position: relative;
      left: 250px;
      bottom: 40px;
      font-size: 1rem;
      color: rgba(255, 131, 62);
      border: 1px solid rgba(255, 131, 62);
      border-radius: 50%;
      padding: 0.5rem;
      background-color: rgba(250, 248, 248);
      @media only screen and (min-width: 768px) {
        left: 90%;
      }
    }
  }
}
</style>
