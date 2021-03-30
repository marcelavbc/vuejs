<template>
  <div class="input">
    <input type="text" placeholder="Type to search" />
    <div class="icon-input">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 1.2rem;
  input {
    width: 100%;
    background-color: rgba(250, 248, 248);
    border: 0;
    outline: none;
    padding: 0.7rem;
    padding-left: 2rem;
    border-radius: 10px;
  }
  .icon-input {
    position: absolute;
    margin-left: 0.5rem;
  }
}
</style>