<template>
  <div class="home">
    <div class="header">
      <h2 class="title">Hello, <strong>Chef</strong></h2>
    </div>
    <main>
      <the-search-bar />
      <the-scroll-menu />
      <the-ingredient-box />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import TheSearchBar from "../components/TheSearchBar";
import TheScrollMenu from "../components/TheScrollMenu";
import TheIngredientBox from "../components/TheIngredientBox";

export default {
  name: "Home",
  components: { TheSearchBar, TheScrollMenu, TheIngredientBox },
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
  main {
    .ingredient-box {
      margin-top: 1rem;
      .scroll-content {
        align-items: center;
        overflow-y: auto;
      }
      .selected-box {
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .box-content {
        margin-top: 1rem;
        background-color: rgba(250, 248, 248);
        border-radius: 1rem;
        min-height: 90px;
        display: flex;
        padding: .5rem;

        .ingredient {
          padding: 1rem;
          border-radius: 1rem;
          margin: 0.3rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: white;
          width: 70px;
          height: 70px;
        }
      }
    }
  }
}
</style>
