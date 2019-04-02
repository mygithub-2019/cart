import Vue from 'vue'
import Router from 'vue-router'

// Components
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/electronics',
      name: 'electronics',
      component: () => import(/* webpackChunkName: "about" */ './views/Electronics.vue')
    },
    {
      path: '/men',
      name: 'men',
      component: () => import(/* webpackChunkName: "about" */ './views/Men.vue')
    },
    {
      path: '/women',
      name: 'women',
      component: () => import(/* webpackChunkName: "about" */ './views/Women.vue')
    },
    {
      path: '/baby-kids',
      name: 'kids',
      component: () => import(/* webpackChunkName: "about" */ './views/Kids.vue')
    },
    {
      path: '/home-furniture',
      name: 'home-furniture',
      component: () => import(/* webpackChunkName: "about" */ './views/Furniture.vue')
    },
    {
      path: '/sports-books-more',
      name: 'sports-books-more',
      component: () => import(/* webpackChunkName: "about" */ './views/Sports.vue')
    },
    {
      path: '/grocery',
      name: 'grocery',
      component: () => import(/* webpackChunkName: "about" */ './views/Grocery.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
    },
    {
      path: '/place-order',
      name: 'place-order',
      component: () => import('./views/PlaceOrder.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('./views/Registration.vue')
    },
    {
      path: '*',
      name: 'none',
      redirect: { name: 'login' }
    }
  ]
})
