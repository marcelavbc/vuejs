<template>
  <div class="ingredient-box">
    <h4>Ingredients:</h4>
    <div v-if="hasIngredients" class="scroll-content box-content">
      <div
        class="ingredient"
        v-for="(item, index) in filteredIngredients"
        :key="index"
      >
        <the-ingredient-img>
          <img
            :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`"
            :alt="item.name"
            @click="addIngredient(item)"
          />
          <p>{{ item.name }}</p>
        </the-ingredient-img>
      </div>
    </div>
    <div v-else class="scroll-content box-content">
    </div>
  </div>
</template>

<script>
import TheIngredientImg from "../ingredients/TheIngredientImg";
export default {
  name: "TheScrollMenu",
  components: { TheIngredientImg },
  computed: {
    filteredIngredients() {
      return this.$store.getters["recipes/ingredients"];
    },
    hasIngredients() {
      return this.$store.getters["recipes/hasIngredients"];
    },
    
  },
  methods: {
    addIngredient(item) {
      let index = this.$store.getters["recipes/ingredientsSelected"].findIndex(
        (element) => element.name === item.name
      );
      if (index === -1) {
        this.$store.commit("recipes/addIngredientToList", item);
        this.$store.commit("recipes/changeInput", "");
        // this.$store.commit("recipes/cleanIngredientsList")
      } else {
        console.log("added before");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>