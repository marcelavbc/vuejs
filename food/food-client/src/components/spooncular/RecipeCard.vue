<template>
  <div class="small-card-container">
    <div class="recipe-card">
      <div class="img-container">
        <img :src="image" :alt="title" />
        <slot/>
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
          <li class="save-recipe-icon">
            <span>
              <i class="far icon fa-heart"></i>
            </span>
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
            <div v-if="missedIngredients.length > 0">
              <h4
                class="info-text"
                v-for="(item, index) in missedIngredients"
                :key="`missed_${item.id}` + index"
              >
                <span>{{ item.name }} <span class="separator"> | </span></span>
              </h4>
            </div>
            <div v-else>
              <h4 class="info-text">You have everything!</h4>
            </div>
          </div>
        </div>
        <div v-if="instructions" class="instructions">
          <p>Instructions:</p>
          <div class="instructions-info">
            <h4>{{ instructions }}</h4>
          </div>
        </div>
        <div v-if="instructions === null" class="instructions">
          <p>Instructions:</p>
          <div class="instructions-info">
            <h4>Sorry... There is no instructions available</h4>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  data() {
    return {};
  },
  props: [
    "title",
    "image",
    "dish",
    "readyInMinutes",
    "servings",
    "missedIngredients",
    "usedIngredients",
    "vegetarian",
    "id",
    "instructions",
    "recipe",
    "isFavorite",
  ],
};
</script>

<style lang="scss" scoped>
.small-card-container {
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  .recipe-card {
    background: #fff;
    margin: 1rem;
    width: 90%;
    max-width: 496px;
    .img-container {
      position: relative;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      .details {
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 1rem;
        color: rgba(255, 131, 62);
        border: 1px solid rgba(255, 131, 62);
        border-radius: 50%;
        padding: 0.5rem;
        background-color: rgba(250, 248, 248);
      }
    }

    article {
      padding: 1rem 1.5rem 1.5rem 1.5rem;

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
      .instructions {
        margin: 1rem 0 0.5rem;
        .instructions-info {
          margin-top: 0.5rem;
          h4 {
            line-height: 1.3rem;
          }
        }
      }
    }
  }
  .modal-container {
    .modal {
      position: fixed;
      width: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ff833e;
      padding: 20px;
      z-index: 101;
      border-radius: 8px;
      color: rgba(250, 248, 248);
      @media only screen and (min-width: 768px) {
        font-size: 1.2rem;
        width: 30%;
        padding: 30px;
      }
      .info-modal {
        text-align: center;
        line-height: 1.4rem;
      }
      .buttons-div {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 0.7rem;
        button {
          padding: 8px;
          border: none;
          border-radius: 2px;
          color: #ff833e;
          background: rgba(250, 248, 248);
        }
      }
    }
  }
}
</style>