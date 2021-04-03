<template>
  <div class="home">
    <div class="header">
      <h2 class="title">Hello, <strong>Chef</strong></h2>
    </div>
    <main>
      <the-search-bar />
      <the-scroll-menu />
      <ingredients-selected-box />
      <div v-if="selectedIngredients.length > 0">
        <div class="buttons">
          <the-cook-button />
          <the-clean-button />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import TheSearchBar from "../components/TheSearchBar";
import TheScrollMenu from "../components/ingredients/TheScrollMenu";
import IngredientsSelectedBox from "../components/ingredients/IngredientsSelectedBox";
import TheCookButton from "../components/buttons/TheCookButton";
import TheCleanButton from "../components/buttons/TheCleanButton";

export default {
  name: "Home",
  components: {
    TheSearchBar,
    TheScrollMenu,
    IngredientsSelectedBox,
    TheCookButton,
    TheCleanButton,
  },
  computed: {
    selectedIngredients() {
      return this.$store.getters["recipes/ingredientsSelected"];
    },
  },
};
</script>

<style lang="scss" >
.home {
  margin: 4rem 1rem 0;
  height: 100vh;
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
        padding: 0.5rem;

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
    .buttons {
      width: 100%;
      display: flex;
      margin-top: 1rem;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
