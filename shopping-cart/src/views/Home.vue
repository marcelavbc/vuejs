<template>
  <div class="home">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
import ProductSummaryCard from "../components/products/ProductSummaryCard";
import ProductDescriptionDrawer from "../components/products/ProductDescriptionDrawer";

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
  },
  data() {
    return {
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true
      console.log(this.product);
    },
    closeProductDrawer(){
      this.active.product_drawer = false
    }
  },
  computed:{
    allProducts(){
      return this.$store.getters.allProducts
    }
  }
};
</script>

<style land="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
