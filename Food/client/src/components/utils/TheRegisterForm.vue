<template>
  <div class="top-margin the-form-bg form">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.the-form-bg {
  height: calc(100vh - 3rem);
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)),
    url("../../assets/images/mandarines.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;
    align-items: center;
    padding: 30px;
    justify-content: space-around;
    .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        margin-bottom: 1rem;
        padding: 0.6rem;
        border: none;
        border-radius: 8px;
      }

      .btn {
        width: 60%;
        color: white;
        background-color: #ff833e;
      }
    }
    .link {
      color: black;
    }
  }
}
</style>