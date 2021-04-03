<template>
  <appear :delay="100" :translate="['-50px', 0]">
  <router-link to="/recipes">
    <button class="cook-button" @click="getRecipes">Find recipes</button>
  </router-link>
  </appear>
</template>

<script>
export default {
  name: "TheCookButton",

  methods: {
    getRecipes() {
      this.$store.dispatch("recipes/loadTheRecipes", "array");
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