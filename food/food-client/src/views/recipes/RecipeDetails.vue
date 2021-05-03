<template>
  <div>
    <div v-if="isLoading">
      <loading-spinner />
    </div>
    <div v-else>
<recipe-card
      :title="getDetails.title"
      :image="getDetails.image"
      :dish="getDetails.dishTypes[0]"
      :readyInMinutes="getDetails.readyInMinutes"
      :servings="getDetails.servings"
      :missedIngredients="getDetails.missedIngredients"
      :usedIngredients="getDetails.usedIngredients"
      :vegetarian="getDetails.vegetarian"
      :id="getDetails.id"
      :instructions="getDetails.instructions"
    >
    </recipe-card>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RecipeCard from "../../components/spooncular/RecipeCard.vue";
export default {
  components: { RecipeCard },
  name: "RecipeDetails",
  computed: {
    ...mapGetters(["getDetails", "isLoading"]),
  },
};
</script>

<style>
</style>