<template>
  <div class="scroll-menu">
    <div class="scroll-content">
      <div class="avatar" v-for="(item, index) in 10" :key="index">
        <i class="fas fa-hamburger"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.scroll-menu {
  .scroll-content {
    display: flex;
    overflow-y: auto;
    .avatar {
      background-color: rgba(250, 248, 248);
      padding: 1.3rem;
      border-radius: 1rem;
      margin: .3rem;
      i {
        color: rgba(255, 131, 62);
      }
    }
  }
}
</style>