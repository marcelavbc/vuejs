<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
  width: 40px;
  height: 40px;
}

p {
  font-size: 10px;
  margin-top: 0.5rem;
}
</style>