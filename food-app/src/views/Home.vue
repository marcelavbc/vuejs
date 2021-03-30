<template>
  <div class="home">
    <div class="header">
      <h2 class="title">Hello, <strong>Marcela</strong></h2>
      <the-search-bar />
      <the-banner/>
      <the-scroll-menu/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheSearchBar from "../components/TheSearchBar";
import TheBanner from "../components/TheBanner";
import TheScrollMenu from "../components/TheScrollMenu";


export default {
  name: "Home",
  components: { TheSearchBar, TheBanner, TheScrollMenu },
};
</script>

<style lang="scss" >
.home {
  margin: 1rem;
  .header {
    .title {
      font-weight: 300;
    }
  }
}
</style>
