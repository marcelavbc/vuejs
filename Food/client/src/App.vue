<template>
  <div id="app">
    <div id="nav">
      <the-nav></the-nav>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNav from "./components/TheNav";
export default {
  components: { TheNav },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('users/logout')
        }
        throw err;
      });
    });
  }
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

  .top-margin {
    margin-top: 3rem;
  }
}
</style>
