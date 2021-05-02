<template>
  <div class="ingredient-box">
    <h4>Ingredients Selected:</h4>
    <div class="box-content scroll-content">
      <div
        class="ingredient"
        v-for="item in getSelectedIngredients"
        :key="item.name"
      >
        <ingredient-image>
          <img
            :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`"
            :alt="item.name"
            @click="deleteIngredient(item)"
          />
          <p>{{ item.name }}</p>
        </ingredient-image>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "IngredientsSelected",
  computed: {
    ...mapGetters(["getSelectedIngredients"]),
  },
  methods: {
    ...mapActions(["deleteIngredient"]),
  },
};
</script>

<style>
</style>