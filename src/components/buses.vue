<template>
  <div class="w3-container">
    <div class="w3-card-4">

<header class="w3-container w3-light-grey">
  <h3></h3>
</header>

<div class="w3-container">
  <p>{{busName}}</p>
  <hr>
  
  <p></p>
</div>

<button class="w3-button w3-block w3-dark-grey">Book Now</button>

</div>
  </div>
</template>


<script>
export default {
    name:'footer',
    data(){
      return {
        busName:[],
        startPoint:[],
        endPoint:[]
      }
    },
    created:function(){
      this.$http.get('http://localhost:8080/getBus',(data)=>{
          this.busName=data
      })
    }
}
</script>

<style scoped>

</style>
