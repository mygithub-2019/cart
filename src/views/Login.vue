<template>
  <div class="col-lg-8" style="margin: 0 auto;max-width:500px;">
    <form @submit.prevent="login">
      <div class="form-group">
          <label for="usr">Name</label>
          <input type="text" class="form-control" id="usr" name="username"
          v-model="username">
      </div>
      <div class="form-group">
          <label for="pwd">Password</label>
          <input type="password" class="form-control" id="pwd" name="password"
          v-model="password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled='isSubmit'>Login</button>
      </div>
      <div class="form-group">
        <a href="" @click.prevent="regesterUser()">New user? Please click here.</a>
      </div>
      <div v-if="isSubmit">
        <app-loader/>
      </div>
    </form>
  </div>
</template>
<script>
import Loader from './Loader.vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
//import Router from 'vue-router'
import axios from 'axios'
export default {
  data(){
    return{
      username:'',
      password: '',
      isSubmit: false
    }
  },
  components:{
    appLoader: Loader
  },
    computed: {
      ...mapState([
        'isUserAuthenticated'
      ])
    },
    methods: {
    ...mapMutations([
      'IS_USER_AUTHENTICATED',
      'SET_CURRENT_USER'
    ]),
    login(){
      this.isSubmit = true
      axios.get('https://cart-4f3c5.firebaseio.com/users.json')
            .then(response => {
              let _userFound = false
                //console.log(response.data)
                //this.isFormSubmitted = false
                //this.$router.push('/login')
                if(response.data){
                  let _usersIds = Object.keys(response.data)
                  let _loggedUserData = {}
                  for(let i=0;i<_usersIds.length;i++){
                    console.log(response.data[_usersIds[i]])
                    if(response.data[_usersIds[i]].username === this.username 
                      && response.data[_usersIds[i]].password === this.password){
                        //this.isFormSubmitted = false
                        //this.$router.push('/electronics')
                        _loggedUserData = response.data[_usersIds[i]]
                        _userFound = true
                        break
                    }
                  }
                  if(_userFound){
                    this.IS_USER_AUTHENTICATED('ture')
                    this.SET_CURRENT_USER(_loggedUserData)
                    this.$router.push('/electronics')
                  }else{
                      alert('Invalid credentials entered.')
                  }
                }else{
                  alert('Please register before login.')
                }
                this.isSubmit = false
            })
            .catch(e => {
                //this.errors.push(e)
                alert(e)
            }) 
    },
    regesterUser(){
      this.$router.push('/registration')
    }
  }
}
</script>
