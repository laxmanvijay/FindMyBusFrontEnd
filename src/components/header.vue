<template>
<div>
  <h3 class="w3-text w3-wide">FindMyBus</h3>
 <div class="w3-bar w3-teal">
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/">Home</router-link></button>
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/search">Search</router-link></button>
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/bushire">Bus Hire</router-link></button>
  <button  class="w3-bar-item w3-button w3-wide"> <router-link to="/hotels">Hotels</router-link></button>
</div>
</div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration:none
}
</style>
