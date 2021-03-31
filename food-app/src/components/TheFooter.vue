<template>
  <div class="nav-container">
    <div class="nav-content">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link to="/basket">
        <i class="fas fa-shopping-basket"></i>
      </router-link>
      <router-link to="/favorites">
        <i class="far fa-heart"></i>
      </router-link>
      <router-link to="/timer">
        <i class="fas fa-history"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
#nav {
  .nav-container {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: white;
    .nav-content {
      display: flex;
      justify-content: space-between;
      padding: 1em;
      a {
        font-weight: bold;
        color: rgba(163, 163, 163);
        &.router-link-exact-active {
          color: rgba(255, 131, 62);
        }
      }
    }
  }
}
</style>