<template>
  <div class="home">
    <div class="header">
      <h2 class="title">
        Hello,
        <strong>
          <span v-if="isLoggedIn">{{ getUser.username }}</span>
          <span v-else>Chef</span>
        </strong>
      </h2>
    </div>
    <div class="main">
      <search-bar></search-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchBar from '../components/utils/SearchBar.vue';
export default {
  name: "Home",
  components: {
    SearchBar
  },
  computed: {
    ...mapGetters(["getUser", "isLoggedIn"]),
  },
};
</script>

<style lang="scss" >
.home {
  margin: 3.4rem 1rem;
  @media only screen and (min-width: 768px) {
    margin: 2rem 1rem;
    width: 60%;
  }
  .header {
    .title {
      font-weight: 300;
      @media only screen and (min-width: 768px) {
        font-size: 1.9rem;
      }
    }
  }
  main {
    @media only screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
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
        @media only screen and (min-width: 768px) {
          min-height: 150px;
        }

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
          @media only screen and (min-width: 768px) {
            width: 100px;
            height: 100px;
          }
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
