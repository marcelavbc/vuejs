<template>
  <div class="ingredient-box">
    <h4>Ingredients:</h4>
    <div class="scroll-content box-content">
      <div
        class="ingredient"
        v-for="(item, index) in this.$store.state.ingredients"
        :key="index"
      >
        <the-ingredient-img>
          <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`" :alt="item.name" @click="addIngredient(item)" />
          <p>{{ item.name }}</p>
        </the-ingredient-img>
      </div>
    </div>
  </div>
</template>

<script>
import TheIngredientImg from "./TheIngredientImg.vue";
export default {
  components: { TheIngredientImg },
  methods: {
    addIngredient(item) {
      let index = this.$store.state.ingredientsSelected.findIndex(
        (element) => element.name === item.name
      );

       index === -1
        ? this.$store.state.ingredientsSelected.push(item)
        : console.log('Ingridient already selected')
    },
  },
};
</script>

<style lang="scss" scoped>

</style>