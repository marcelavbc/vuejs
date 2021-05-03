<template>
  <div class="nav-container">
    <div class="nav-content">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <div v-if="isLoggedIn">
        <router-link to="/favorites">
          <i class="far fa-heart" @click="getFavoriteRecipes(getUser._id)"></i>
        </router-link>
      </div>
      <div v-if="isLoggedIn">
        <a @click.prevent="logout" to="/login">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </div>
      <div v-else>
        <router-link to="/login">
          <i class="fas fa-sign-in-alt"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["isLoggedIn", "getUser"]),
  },
  methods: {
    ...mapActions(["logout", "getFavoriteRecipes"]),
  },
};
</script>

<style lang="scss" >
.nav-container {
  z-index: 100;
  width: 100vw;
  height: 3rem;
  position: fixed;
  top: 0;
  background-color: rgba(250, 248, 248);
  margin-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    height: 4rem;
    display: flex;
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    width: 100%;

    a {
      font-weight: bold;
      color: rgba(163, 163, 163);
      &.router-link-exact-active {
        color: #ff833e;
      }
      @media only screen and (min-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }
}
</style>