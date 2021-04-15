<template>
  <div class="home">
    <div class="header">
      <h2 class="title">
        Hello,
        <strong>
          <span v-if="isLoggedIn">{{getUser}}</span>
          <span v-else>Chef</span>
        </strong>
      </h2>
    </div>
    <main>
      <the-search-bar />
      <ingredients-list></ingredients-list>
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
import TheSearchBar from "../components/TheSearchBar";
import IngredientsList from "../components/ingredients/IngredientsList";
import IngredientsSelectedBox from "../components/ingredients/IngredientsSelectedBox";
import TheCookButton from "../components/buttons/TheCookButton";
import TheCleanButton from "../components/buttons/TheCleanButton";

export default {
  name: "Home",
  components: {
    TheSearchBar,
    IngredientsList,
    IngredientsSelectedBox,
    TheCookButton,
    TheCleanButton,
  },
  computed: {
    selectedIngredients() {
      return this.$store.getters["recipes/ingredientsSelected"];
    },
    isLoggedIn() {
      return this.$store.getters["users/isLoggedIn"];
    },
    getUser() {
      return this.$store.getters["users/getUser"];
    },
  },
};
</script>

<style lang="scss" >
.home {
  margin: 3.4rem 1rem;
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
        padding: 0.4rem;

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
