<template>
  <div class="button-div">
    <button class="grey-button" @click="getRecipes">Find recipes</button>
  </div>
</template>

<script>
export default {
  name: "TheCookButton",

  methods: {
    getRecipes() {
      this.$store.dispatch("recipes/loadTheRecipes", 'array');
    },
  },
};
</script>

<style lang="scss" scoped>
.button-div {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  .grey-button {
    border: none;
    outline: none;
    padding: 0.7rem;
    background-color: rgba(255, 131, 62);
    color: rgba(250, 248, 248);
    font-size: 14px;
    border-radius: 10px;
    font-weight: bold;
  }
}
</style>