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
  @media only screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
}

p {
  font-size: 10px;
  margin-top: 0.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
}
</style>