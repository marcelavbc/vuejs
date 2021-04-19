<template>
  <appear :delay="100" :translate="['-50px', 0]">
    <router-link to="/recipes">
      <div v-if="isLoggedIn">
        <button class="cook-button" @click="getRecipes">Find recipes</button>
      </div>
      <div v-else>
        <button class="cook-button" @click="notLogGetRecipes">
          Find recipes
        </button>
      </div>
    </router-link>
  </appear>
</template>

<script>
export default {
  name: "TheCookButton",
  methods: {
    getRecipes() {
      this.$store.dispatch("recipes/loadTheRecipes");
    },
    notLogGetRecipes() {
      this.$store.dispatch("recipes/loadTheRecipesNotLogg");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters["users/isLoggedIn"];
    },
  },
};
</script>

<style lang="scss" scoped>
.cook-button {
  border: none;
  outline: none;
  padding: 0.7rem;
  background-color: rgba(255, 131, 62);
  color: rgba(250, 248, 248);
  font-size: 14px;
  border-radius: 10px;
  font-weight: bold;
}
</style>