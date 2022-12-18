<template>
  <div class="container">

    <AllCategories />
    <AllProducts />
  </div>
</template>

<script>
import AllProducts from "../components/AllProducts.vue";
import AllCategories from "../components/AllCategories.vue";

export default {
  name: "MainPage",
  data() {
    return {};
  },
  components: {
 
    AllProducts,
    AllCategories,
  },
};
</script>

<style scoped>
.container {
  padding-left: 0.938rem;
  padding-right: 0.938rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
