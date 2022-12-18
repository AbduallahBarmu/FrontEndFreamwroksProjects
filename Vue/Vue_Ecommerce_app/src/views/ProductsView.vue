<template>
  <div class="container">
    <AllCategories class="AllCategories"/> 
    <div v-for="product in products" :key="product.id">
      <router-link class="product__link" :to="'/product/' + product.id">
        <ProductBox :product="product" />
      </router-link>
 
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductBox from "../components/ProductBox.vue";
import AllCategories from "../components/AllCategories.vue";

export default {
  name: "ProductView",
  data() {
    return {
      products: [],
    };
  },
  components: {
    ProductBox,
    AllCategories
  },

  methods: {
    async getCategoryProducts() {
      await axios
        .get("https://dummyjson.com/products/category/" + this.$route.params.id)
        .then((res) => {
          this.products = res.data.products;
        });
    },
  },
  created() {
    this.getCategoryProducts();
  },
};
</script>

<style scoped>
.container {
  /* margin-top: 7rem; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.AllCategories{
  margin-bottom: 2rem ;

}
.product__link {
  text-decoration: none;
}
</style>
