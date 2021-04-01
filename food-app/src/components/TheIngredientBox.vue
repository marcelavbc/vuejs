<template>
  <div class="ingredient-box">
    <h4>Ingredients Selected:</h4>
    <div class="box-content selected-box">
      <div
        class="ingredient"
        v-for="(item, index) in selectedIngredients"
        :key="index"
      >
        <the-ingredient-img>
          <img
            :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`"
            :alt="item.name"
            @click="deleteIngredient(item)"
          />
          <p>{{ item.name }}</p>
        </the-ingredient-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheIngredientBox",
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

<style lang="scss" scoped>
</style>