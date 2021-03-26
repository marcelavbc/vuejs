<template>
  <div class="product-gallery">
    <div class="side-gallery">
      <div
        v-for="(item, index) in images"
        :key="'img' + index"
        class="container"
      >
        <Appear :delay="150 * (index + 1)" :translate="['-100px', 0]">
          <img
            class="dog-img"
            :src="require(`../assets/images/${item}`)"
            alt=""
            @click="mainImage(index)"
          />
        </Appear>
      </div>
    </div>

    <div class="main-image">
      <Appear :delay="500" :translate="['100px', 0]">
        <img
          :src="require(`../assets/images/${this.images[this.activeImg]}`)"
          alt=""
        />
      </Appear>
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data: () => {
    return { activeImg: 0 };
  },
  methods: {
    mainImage(index) {
      this.activeImg = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-gallery {
  height: 50vh;
  display: flex;

  .side-gallery {
    width: 20%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    .container {
      height: 18%;
      .dog-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px 5px 5px 40px;
        filter: grayscale(100%);
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
  .main-image img {
    width: 98%;
    height: 98%;
    margin: 3px 3px 3px 10px;
    object-fit: cover;
    border-radius: 15px 15px 120px 15px;
  }
}
</style>

