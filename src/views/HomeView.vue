<template>
  <div class="products section">
    <div class="container">
      <h1 class="section-title">Our Products</h1>

      <ul class="products__list">
        <li
          class="product__item"
          v-for="(product, index) in products"
          :key="index"
        >
          <AppProduct :product="product" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct";

export default {
  name: "home",
  components: { AppProduct },
  data() {
    return {
      products: [],
    };
  },

  created() {
    this.products = this.$store.getters.products;
  },
};
</script>

<style lang="scss">
.products {
  padding-top: 50px;
  padding-bottom: 50px;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      gap: 30px 15px;
    }
    @media (max-width: 359px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
