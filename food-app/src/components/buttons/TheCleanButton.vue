<template>
  <appear :delay="100" :translate="['50px', 0]">
    <button class="the-button" @click="cleanSelection">Clean selection</button>
  </appear>
</template>

<script>
export default {
  name: "TheCookButton",
  methods: {
    cleanSelection() {
      this.$store.commit("recipes/cleanSelection");
    },
  },
};
</script>

<style lang="scss" scoped>
.the-button {
  border: none;
  outline: none;
  padding: 0.7rem;
  background-color: rgb(255, 230, 217);
  color: rgba(255, 131, 62);
  font-size: 14px;
  border-radius: 10px;
  font-weight: bold;
}
</style>