<template>
  <div class="input">
    <input
      type="text"
      placeholder="Type to search"
      @keyup="getIngredient($event)"
      v-model="inputValue"
    />
    <div class="icon-input">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TheSearchBar",
  computed: {
    inputValue: {
      get() {
        return this.$store.getters["recipes/getInputValue"];
      },
      set(value) {
        this.$store.commit("recipes/changeInput", value);
      },
    },
  },
  methods: {
    getIngredient(event) {
      const newValue = event.target.value.toLowerCase();
      const arrayIngredients = this.$store.getters["recipes/ingredients"];
      
      const options = {
        method: "GET",
        url:
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete",
        params: { number: "2", query: newValue },
        headers: {
          "x-rapidapi-key":
            "3ae8633d0fmshea232df942d8d7bp19b871jsn75705b922f90",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          response.data.forEach((ingredient) =>
            arrayIngredients.unshift(ingredient)
          );
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 1.2rem;
  input {
    width: 100%;
    background-color: rgba(250, 248, 248);
    border: 0;
    outline: none;
    padding: 0.7rem;
    padding-left: 2rem;
    border-radius: 10px;
  }
  .icon-input {
    position: absolute;
    margin-left: 0.5rem;
  }
}
</style>