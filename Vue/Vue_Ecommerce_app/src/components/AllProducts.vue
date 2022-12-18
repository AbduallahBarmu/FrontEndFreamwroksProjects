<template>
  <div class="product">
    <div class="card" v-for="products in AllProducts" :key="products.id">
      <router-link class="product__link" :to="'/product/' + products.id">
        <div class="card__body">
          <span class="card__header">
            <img
              class="card__image"
              :src="products.images[0]"
              alt="card-image" />
          </span>
          <div class="card__content">
            <ul class="card__list">
              <li class="card__item">{{ products.category }}</li>
              <li class="card__item">{{ products.brand }}</li>
              <li class="card__item">{{ products.price }}$</li>
            </ul>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainPage",
  data() {
    return {
      AllProducts: [],
    };
  },

  methods: {
    // Fetch all products function
    async getAllProducts() {
      await axios.get("https://dummyjson.com/products").then((res) => {
        this.AllProducts = res.data.products;
      });
    },
  },
  mounted() {
    this.getAllProducts();
    console.log(this.AllProducts);
  },
  components: {},
};
</script>

<style scoped>
.product {
  margin-top: 7rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.card {
  margin: 0.5rem;
  border-radius: 1em;
  background: #E5D9F2;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
}
.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card__image {
  display: block;
  aspect-ratio: 1/1;
  max-width: 18.75rem;
}
.card__content {
  padding: 1.5rem;
}
.card__list {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}
.card__item {
  padding: 0.3rem 0.5rem;
  margin-right: 0.5rem;
  background: #e5d9f2;
  border-radius: 0.3rem;
  font-size: 0.85rem;
  font-weight: bold;
}
.product__link {
  text-decoration: none;
}
</style>
