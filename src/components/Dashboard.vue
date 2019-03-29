<template>
  <div class="hello">
    <!-- Custom Component-->
    <Carousel></Carousel>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
  <a class="navbar-brand" href=""><i>S-Cart</i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/electronics">Electronics</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/men">Men</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/women">Women</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/baby-kids">Baby & Kids</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/home-furniture">Home & Furniture</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/sports-books-more">Sports, Books & More</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/grocery">Grocery</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact</router-link>
      </li>
      <li class="nav-item" v-if="!getIsUserAuthenticated">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item" v-if="getIsUserAuthenticated">
        <a class="nav-link" @click="logout">Logout</a>
      </li>
      <li>
        <router-link class="nav-link" to="/cart">
          <i class="fa fa-shopping-cart" aria-hidden="true">
            <sup v-show="getCartItems.length > 0"><span class="badge badge-success">{{ getCartItems.length }}</span></sup>
          </i>
        </router-link>
      </li>
    </ul>
  </div>
</nav>
<br>

<div class="container">
  <router-view/>
</div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import Router from 'vue-router'
export default {
  data () {
    return {
      isUserLogged: false
    }
  },
  methods: {
    ...mapMutations([
      'IS_USER_AUTHENTICATED'
    ]),
    logout(){
      this.IS_USER_AUTHENTICATED('false')
      window.location.reload()
      this.$router.push('/electronics')
    }
  },
  props: {

  },
  components: {
    Carousel
  },
  computed: {
    ...mapGetters([
        'getIsUserAuthenticated',
        'getCartItems'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
