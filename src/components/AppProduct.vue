<template>
  <router-link class="products-card" :to="/products/ + product.id">
    <div class="products-card__img">
      <img :src="product.img" :alt="product.title" />
    </div>
    <h3 class="products-card__title">{{ product.title }}</h3>
    <span class="products-card__price">${{ product.price }}</span>
  </router-link>
</template>

<script>
export default {
  name: "AppProduct",
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang='scss' scoped>
.products-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 480px) {
    font-size: 15px;
    gap: 10px;
  }

  &:hover {
    .products-card {
      &__img {
        img {
          transform: scale(1.05);
        }
      }

      &__title {
        color: rebeccapurple;
      }
    }
  }

  &__img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    transition: 400ms ease;
    overflow: hidden;

    @media (max-width: 480px) {
      height: 120px;
    }

    @media (max-width: 359px) {
      height: 180px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 500ms ease;
    }
  }

  &__title {
    font-weight: 400;
    transition: 400ms ease;
  }

  &__price {
    font-weight: 700;
  }
}
</style>