<template>
  <div class="product">
    <div class="container">
      <div class="product__top">
        <router-link class="product__back btn" :to="{ name: 'home' }">
          Back
        </router-link>
      </div>
      <div class="product__wrapper">
        <div class="product__img">
          <img :src="product.img" :alt="product.title" />
        </div>
        <div class="product__right">
          <h1 class="product__title">{{ product.title }}</h1>
          <p class="product__text">{{ product.descr }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProductView",
  data() {
    return {
      product: {},
    };
  },
  created() {
    let id = +this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
  },
};
</script>

<style lang="scss">
.product {
  padding: 50px 0;

  &__top {
    margin-bottom: 30px;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__img {
    max-height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: 30px;
    margin-bottom: 30px;
  }
}
</style>