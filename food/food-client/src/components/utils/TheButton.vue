<template>
  <div class="the-button">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.the-button {
  border: none;
  outline: none;
  padding: 0.7rem;
  background-color: rgba(255, 131, 62);
  color: rgba(250, 248, 248);
  font-size: 14px;
  border-radius: 10px;
  font-weight: bold;
}
</style>