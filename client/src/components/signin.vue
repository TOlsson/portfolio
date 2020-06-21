<template>
  <div>
    <custom-header></custom-header>

    <div id="signIn">
      <input v-model="username" placeholder="Username" v-on:keyup.enter="signIn"><br>
      <input v-model="password" type="password" placeholder="Password" v-on:keyup.enter="signIn"><br>
      <button v-on:click="signIn">Sign In</button>
    </div>

    <icon-footer></icon-footer>
  </div>

  
</template>

<script>
import loginAPI from '@/services/update_API.js'
import router from '../router'

export default {
  name: 'signin',
  data () {
    return {
      username: '',
      password: '',
      aboutInfo: {}
    }
  },
  mounted () {
  },
  methods: {
    async signIn () {
      const response = await loginAPI.signIn(this.username, this.password)
      if (response.status === 203) {
        // Error message
        console.log("Wrong credentials!")
      }
      else if (response.status === 202) {
        this.$cookies.set('auth', response.data.auth)
        router.push({name: 'update'})
      }
    }
  }
}
</script>

<style>
  #signIn {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
</style>