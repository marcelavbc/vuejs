<template>
  <div class="combo-header">
    <div class="text">
      <h3>Free combo</h3>
      <p>Burguer + Coke for new users</p>
    </div>
    <div class="combo-img">
      <img src="../assets/burguer.png" alt="combo-img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.combo-header {
  background-color: rgba(74, 174, 84);
  color: rgb(255, 255, 255);
  padding: 1.2rem;
  border-radius: 1.2rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2.9rem;
  height: 6.5rem;
  .text {
    width: 50%;
    p {
      font-weight: 300;
    }
    h3 {
      font-weight: 400;
    }
  }
  .combo-img {
    width: 50%;
    position:absolute;
    img {
      width: 70%;
      object-fit: cover;
      position: relative;
      bottom: 60px;
      left:190px
    }
  }
}
</style>