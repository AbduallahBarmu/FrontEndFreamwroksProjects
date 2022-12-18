<template>
  <div class="category__container">
    <div class="categories__list"  v-for="category in categories" :key="category.id">
      <router-link
        class="categories__item"
        :to="'/products/category/' + category">
        {{ category }}
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllCategories",

  data() {
    return {
      categories: [],
      products: [],
    };
  },
  methods: {
    getCategoies() {
      axios.get("https://dummyjson.com/products/categories").then((res) => {
        console.log(res);
        this.categories = res.data;
      });
    },
  },
  mounted() {
    this.getCategoies();
  },
};
</script>

<style scoped>
.category__container {
  background-color: #bdb1f6;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 0.063rem solid white;
  border-radius: 7px;
}
.categories__list {
  list-style-type: none;
  padding: 0.313rem;
}
.categories__item {
  background: #7371fc;
  border: solid 0.063rem #7371fc;
  border-radius: 0.313rem;
  color: white;
  line-height: 3.125rem;
  font-size: 0.938rem;
  padding: 0.125rem 0.438rem;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
