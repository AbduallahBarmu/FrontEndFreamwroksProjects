<template>
  <div class="card">
    <img class="card__image" :src="product.thumbnail" alt="" />
    <div class="card__content">
      <span class="product__category">{{ product.category }}</span>
      <ul class="product__list">
        <li class="product__item">{{ product.brand }}</li>
        <li class="product__item">{{ product.price }}</li>
        <li class="product__item">{{ product.rating }}</li>
      </ul>
    </div>
    <p class="product__description">{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
  mounted() {
    console.log(this.product);
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  max-width: 21.875rem;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background: #f5efff;
  margin: 2rem;
}

.card__image {
  aspect-ratio: 1/1;
  max-width: 21.875rem;
  border-radius: 0.313rem;
  object-fit: cover;
  margin-bottom: 1.125rem;
}
.card__content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
}
.product__category {
  background-color: #ffafcc;
  border: solid 0.063rem #ece9e6;
  border-radius: 0.313rem;
  padding: 0.188rem 0.313rem;
  color: black;
}
.product__list {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  color: black;
}
.product__item {
  padding: 0.3rem 0.5rem;
  margin-right: 0.5rem;
  background: #cdc1ff;
  border-radius: 0.3rem;
  font-size: 0.85em;
  font-weight: bold;
}
.product__description {
  color: black;
  font-size: 0.75rem;
  margin: 1.25rem;
}
</style>
