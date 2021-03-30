<template>
  <div id="app">
    <div id="nav">
      <the-footer></the-footer>
    </div>
    <router-view />
  </div>
</template>

<script>
import TheFooter from "./components/TheFooter";
export default {
  components: { TheFooter },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
