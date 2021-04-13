<template>
  <div class="nav-container">
    <div class="nav-content">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <div v-if="isLoggedIn">
        <router-link to="/favorites" @click.native="showFavorites()">
          <i class="far fa-heart"></i>
        </router-link>
      </div>
      <div v-if="!isLoggedIn">
        <router-link to="/login">
          <i class="fas fa-sign-in-alt"></i>
        </router-link>
      </div>
      <div v-if="isLoggedIn">
        <a @click.prevent="logoutUser" to="/login">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters["users/isLoggedIn"];
    },
  },
  methods: {
    logoutUser: function () {
      console.log("out");
      this.$store.dispatch("users/logout").then(() => {
        this.$router.push("/login");
      });
    },
    showFavorites() {
      console.log("favorites clicked");
      let userId = this.$store.getters["users/getUserId"];

      this.$store.dispatch("recipes/loadFavorites", userId);
    },
  },
};
</script>

<style lang="scss" >
#nav {
  .nav-container {
    width: 100%;
    height: 3rem;
    position: fixed;
    top: 0;
    background-color: rgba(250, 248, 248);
    margin-bottom: 1rem;
    .nav-content {
      display: flex;
      justify-content: space-between;
      padding: 1em;
      a {
        font-weight: bold;
        color: rgba(163, 163, 163);
        &.router-link-exact-active {
          color: #ff833e;
        }
      }
    }
  }
}
</style>