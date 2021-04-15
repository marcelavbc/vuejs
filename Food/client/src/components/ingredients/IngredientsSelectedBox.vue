<template>
  <div class="ingredient-box">
    <h4>Ingredients Selected:</h4>
    <div class="box-content scroll-content">
      <div
        class="ingredient"
        v-for="(item, index) in selectedIngredients"
        :key="index"
      >
        <appear>
          <the-ingredient-img>
            <img
              :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`"
              :alt="item.name"
              @click="deleteIngredient(item)"
            />
            <p>{{ item.name }}</p>
          </the-ingredient-img>
        </appear>
      </div>
    </div>
  </div>
</template>

<script>
import TheIngredientImg from "./TheIngredientImg";

export default {
  components: { TheIngredientImg },
  name: "IngredientsSelectedBox",
  computed: {
    selectedIngredients() {
      return this.$store.getters["recipes/ingredientsSelected"];
    },
  },
  methods: {
    deleteIngredient(item) {
      this.$store.commit("recipes/deleteIngredient", item);
    },
  },
};
</script>