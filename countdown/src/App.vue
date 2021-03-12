<template>
  <h1>The Counter Component</h1>
  <the-counter
    :year="2022"
    :month="2"
    :date="12"
    :hour="12"
    :minute="13"
    :second="0"
    :millisecond="0"
  />
</template>

<script>
import TheCounter from "@/components/TheCounter.vue";
export default {
  name: "App",
  components: {
    TheCounter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
