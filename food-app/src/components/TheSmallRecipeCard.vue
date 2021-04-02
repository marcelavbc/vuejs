<template>
  <div class="small-card-container">
    <div class="recipe-card">
      <div>
        <img :src="image" alt="Chai Oatmeal" />
      </div>

      <article>
        <h3>{{ title }}</h3>
        <h4>{{ dish }}</h4>
        <ul>
          <li>
            <span><i class="fas fa-user-friends icon"></i></span
            ><span>{{ servings }}</span>
          </li>
          <li>
            <span><i class="far fa-clock icon"></i></span
            ><span> {{ readyInMinutes }} min</span>
          </li>
          <li v-if="vegetarian">
            <span><i class="fas fa-carrot icon"></i></span><span>Veg</span>
          </li>
        </ul>
        <div class="ingredients">
          <div class="recipe-info">
            <p>You already have:</p>
            <h4
              class="info-text"
              v-for="(item, index) in usedIngredients"
              :key="`used_${item.id}` + index"
            >
              <span>{{ item.name }}<span class="separator">|</span></span>
            </h4>
          </div>
          <div class="recipe-info">
            <p>You need to buy:</p>
            <h4
              class="info-text"
              v-for="(item, index) in missedIngredients"
              :key="`missed_${item.id}` + index"
            >
              <span>{{ item.name }} <span class="separator"> | </span></span>
            </h4>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSmallCardConteiner",
  props: [
    "title",
    "image",
    "dish",
    "readyInMinutes",
    "servings",
    "missedIngredients",
    "usedIngredients",
    "vegetarian",
  ],
};
</script>

<style lang="scss" scoped>
.recipe-card {
  background: #fff;
  margin: 1rem;
  width: 90%;
  max-width: 496px;
  img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
  }
  article {
    padding: 1.5rem 1.5rem;

    h3,
    h4 {
      margin: 0;
      font-weight: 300;
    }

    h4 {
      color: #838689;
    }

    ul {
      list-style: none;
      margin: 0.5rem 0 0;
      padding: 0;
      li {
        display: inline-block;
        margin-left: 0.6rem;
        line-height: 1rem;
        &:first-child {
          margin-left: 0;
        }

        .icon {
          vertical-align: bottom;
          display: inline;
          color: rgba(255, 131, 62);
        }
        span:nth-of-type(2) {
          margin-left: 0.3rem;
          font-size: 0.8rem;
          font-weight: 300;
          vertical-align: middle;
          color: #838689;
        }
      }
    }

    .ingredients {
      margin: 1rem 0 0.5rem;

      .recipe-info {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
        .info-text {
          display: inline-block;
          margin-top: 0.5rem;
        }
        .separator {
          color: rgba(255, 131, 62);
          font-weight: 400;
          margin: 0 0.2rem;
          
        }
      }
    }
  }
}
</style>