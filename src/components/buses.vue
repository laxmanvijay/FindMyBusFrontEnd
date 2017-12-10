<template>
  <div class="w3-container">
    <div class="w3-card-4 w3-margin" :key="data.busName" v-for="data in datas">

<header class="w3-container w3-light-grey">
  <h3>{{data.busName}}</h3>
</header>

<div class="w3-container">
  <p class="w3-text">Start point:{{data.startPoint}}</p>
   <p class="w3-text">End point:{{data.endPoint}}</p>
  <hr>
  
  <p class="w3-text">Seats: {{data.no_of_seats}}</p>
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
       datas:[]
      }
    },
    created(){
      this.$http.post('http://localhost:8080/getBus',{
        from:this.$route.query.from,
        to:this.$route.query.to
      }).then((data)=>{
          this.datas=data.data
          console.log(data.data)
      })
    }
}
</script>

<style scoped>

</style>
