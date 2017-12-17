<template>
<div id="header" class="w3-black w3-top w3-margin-bottom">
  <h3 class="w3-text w3-wide">FindMyBus</h3>
 <div class="w3-bar">
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/">Home</router-link></button>
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/search">Search</router-link></button>
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/bushire">Bus Hire</router-link></button>
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/hotels">Hotels</router-link></button>
   <button  class="w3-bar-item w3-button w3-wide w3-right"> <router-link to="/about">About us</router-link></button>
   <button  class="w3-bar-item w3-button w3-wide w3-right w3-text-blue" v-if="!authenticated" @click="auth.login()"> Sign In</button>
  <div class="w3-dropdown-hover w3-right" v-if="authenticated">
  <button class="w3-button w3-wide w3-text w3-text-blue">{{username}}</button>
  <div class="w3-dropdown-content w3-bar-block w3-border">
     <button  class="w3-bar-item w3-button w3-wide w3-right"><router-link to="/dashboard">My Dashboard</router-link></button>
     <button v-if="admin"  class="w3-bar-item w3-button w3-wide w3-right"><router-link to="/admin">Administrate</router-link></button>
      <button  class="w3-bar-item w3-button w3-wide w3-right"><router-link to="/history">History</router-link></button>
     <button  class="w3-bar-item w3-button w3-wide w3-right w3-text-blue" @click="auth.logout()">Sign Out</button>
    </div>
</div>
  
</div>
</div>
</template>

<script>

export default {
  name: 'header',
  props:['authenticated','auth'],
  data()
  {
    return{
    username:JSON.parse(localStorage.getItem('user')).email
    }
  },
  methods:{
    admin(){
      if(JSON.parse(localStorage.getItem('user')).email=='premavir24@gmail.com'){
        return true;
      }
      else{
        return false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration:none
}

#header{
  position:fixed
}
</style>
