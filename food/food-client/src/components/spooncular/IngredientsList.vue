<template>
  <div class="ingredient-box">
    <h4>Ingredients:</h4>
    <div v-if="getIngredients.length" class="box-content selected-box">
      <div
        class="ingredient"
        v-for="(item, index) in getIngredients"
        :key="index"
      >
        <ingredient-image>
          <img
            :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`"
            :alt="item.name"
            @click="addIngredient(item)"
          />
          <p>{{ item.name }}</p>
        </ingredient-image>
      </div>
    </div>
    <div v-else class="box-content"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import IngredientImage from "../utils/IngredientImage.vue";
export default {
  components: { IngredientImage },
  name: "IngredientsList",
  computed: {
    ...mapGetters(["getIngredients"]),
  },
  methods: {
      ...mapActions(['addIngredient'])
  },
};
</script>

<style length="scss" scoped>
</style>