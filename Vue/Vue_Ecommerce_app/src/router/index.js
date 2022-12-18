import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductProfile from '../views/ProductProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/products/category/:id',
    name: 'ProductView',
    component: ProductsView,

  },
  {
    path: '/product/:id',
    name: 'ProductProfile',
    component: ProductProfile,
    
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
