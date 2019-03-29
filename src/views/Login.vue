<template>
  <div class="col-lg-8" style="margin: 0 auto;max-width:500px;">
          <form @submit.prevent="login">
            <div class="form-group">
                <label for="usr">Name</label>
                <input type="text" class="form-control" id="usr" name="username">
            </div>
            <div class="form-group">
                <label for="pwd">Password</label>
                <input type="password" class="form-control" id="pwd" name="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Router from 'vue-router'
export default {
    computed: {
    ...mapState([
      'isUserAuthenticated'
    ])
    },
    methods: {
    ...mapMutations([
      'IS_USER_AUTHENTICATED'
    ]),
    login(){
      this.IS_USER_AUTHENTICATED('ture')
      this.$router.push('/electronics')
    }
    }
}
</script>
