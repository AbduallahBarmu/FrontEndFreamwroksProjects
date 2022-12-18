<template>
  <div class="profile__container">
    <AllCategories class="AllCategories" />

    <div class="wrapper">
      <div class="left__wrapper">
        <img :src="productProfile.thumbnail" alt="" />
      </div>
      <div class="right__wrapper">
        <div class="profile__info">
          <h2 class="profile__title">{{ productProfile.title }}</h2>
          <p class="profile-description">{{ productProfile.description }}</p>
          <div class="profile__contant">
            <h3 class="profile__rating">Rate: {{ productProfile.rating }}</h3>
            <h3>Stock: {{ productProfile.stock }}</h3>
          </div>
        </div>
        <div class="profile-price-btn">
          <p>
            <span>{{ productProfile.price }}$</span>
          </p>
          <button type="button">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AllCategories from "../components/AllCategories.vue";

export default {
  mode: "production",
  data() {
    return {
      productProfile: [],
    };
  },
  components: {
    AllCategories,
  },
  methods: {
    async getProductProfile() {
      await axios
        .get(`https://dummyjson.com/products/${this.$route.params.id}`)
        .then((res) => {
          this.productProfile = res.data;
        });
    },
  },
  created() {
    this.getProductProfile();
  },
};
</script>

<style scoped>
.profile__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.AllCategories {
  margin-bottom: 3rem;
}
.wrapper {
  display: flex;
  height: 25rem;
  width: 50rem;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid black;
  box-shadow: black 0px 2px 8px;
}
.left__wrapper {
  width: 25rem;
}
.left__wrapper img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.313rem;
}
.right__wrapper {
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5efff;
}
.profile__info {
  margin: 0;
}
.profile__contant {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.profile__description {
  height: 7.813rem;
  margin: 0 0 0 38px;
  font-family: "Playfair Display", serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 0.9375em;
  font-weight: lighter;
  overflow: hidden;
}

.profile-price-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 6.4375rem;
  width: 20.4375rem;
  margin-bottom: 1.25rem;
  margin-left: 1.25rem;
  padding-left: 3.125rem;
}

span {
  display: inline-block;
  font-family: "Suranna", serif;
  font-size: 2.125rem;
}

.profile-price-btn button {
  display: inline-block;
  height: 3.125rem;
  width: 11rem;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 3.75rem;
  font-family: "Raleway", sans-serif;
  font-size: 0.875em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.profile-price-btn button:hover {
  background-color: #79b0a1;
}

@media screen and (max-width: 750px) {
  .wrapper {
    flex-direction: column;
    height: auto;
    width: 25rem;
    border-radius: 0.625rem;
  }
  .left__wrapper img {
    width: 25rem;
  }
  .right__wrapper {
    width: 24rem;
  }
}
</style>
