<template>
    <div class="col-lg-8" style="margin: 0 auto;max-width:500px;">
    <form @submit.prevent="register()">
      <div class="form-group">
          <label for="usr">Email</label>
          <input type="email" class="form-control" id="usr" name="username"
          v-model="formData.username">
      </div>
      <div class="form-group">
          <label for="pwd">Password</label>
          <input type="password" class="form-control" id="pwd" name="password"
          v-model="formData.password">
      </div>
      <div class="form-group">
          <label for="pwd">Confirm Password</label>
          <input type="password" class="form-control" id="pwd" name="cpassword"
          v-model="formData.cpassword">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled='isFormSubmitted'>Register</button>
      </div>
    </form>
    <div id='loader' v-if="isFormSubmitted">
        <app-loader/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Loader from './Loader.vue'
export default {
    data(){
        return{
            isFormSubmitted: false,
            formData:{
                username: '',
                password: '',
                cpassword:''
            }   
        }
    },
    components: {
        appLoader: Loader
    },
    methods : {
        register(){
            this.isFormSubmitted = true
            //console.log(this.formData)
            axios.post('https://cart-4f3c5.firebaseio.com/users.json', this.formData)
            .then(response => {
                console.log(response)
                this.isFormSubmitted = false
                this.$router.push('/login')
            })
            .catch(e => {
                //this.errors.push(e)
                alert(e)
            })  
        },
        clearFormData(){
            this.username = ''
            this.password = ''
            this.cpassword = ''
        }
    }
}
</script>
