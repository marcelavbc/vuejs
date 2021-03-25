<template>
  <div class="home">
    <ProductGallery :images="product.images" />
    <Appear :delay="900" :translate="['-100px', 0]">
          <h1>{{ product.title }}</h1>
    </Appear>
    <p>{{ product.description }}</p>
    <div class="order">
      <div class="product-price">{{ product.price }} <sup>USD</sup></div>
      <button>Pick me</button>
    </div> 
  </div>
</template>
<script>
import ProductGallery from '@/components/ProductGallery';
export default {
  name: 'Home',
  data: () => {
    return {
      product: {
        images: [
          'dog_01.jpg', 'dog_02.jpg', 'dog_03.jpg', 'dog_04.jpg', 'dog_05.jpg',
        ],
        title: 'Choose a puppy!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti neque, quibusdam temporibus quis nisi pariatur obcaecati odio sed explicabo maxime ullam mollitia porro similique nostrum eum voluptatibus ex perspiciatis, quas nemo facere possimus veniam ducimus blanditiis! Delectus, animi sapiente.',
        price: 1108.99
      }
    }
  },
  components: {
    ProductGallery
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Abel&family=Galada&display=swap');
  .home {
    width: 100vw;
    max-width: 768px;
    height: 100vh;
    overflow: hidden;
    margin: 0 auto;
    
  }
  h1 { 
    padding: 16px;
    margin: 16px 0 0;
    font-family: Galada, arial;
    font-size: 3rem;
  }
  p { 
    padding: 16px; 
    margin: 0;
    font-family: Abel, arial;
    font-size: 1.3rem;
  }
  .order {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px;
    .product-price {
      font-family: Galada, arial;
      font-size: 2rem;
      margin-right: 32px;
      sup { font-size: 1rem; }
    }
    button {
      padding: 6px 32px 0;
      color: #fefefe;
      background-color: #2c3e50;
      font-family: Galada, arial;
      font-size: 1.3rem;
      border: 1px solid #fefefe;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  
</style>
