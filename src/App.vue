<template>
  <div id="app">
    <app-Header
     :auth="auth" 
      :authenticated="authenticated"/>
    <router-view 
      :auth="auth" 
      :authenticated="authenticated"/>
    <app-footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import AuthService from './Auth/authService'

let auth=new AuthService();

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  components:{
    'app-Header':Header,
    'app-footer':Footer
  },
   data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      console.log(authenticated)
    })
    return {
      auth,
      authenticated
    }
},
 methods:{
  login,logout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
