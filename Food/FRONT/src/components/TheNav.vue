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
    height: 3rem;
    position: fixed;
    top:0;
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