<template>
<div>
<br>
<br>
  <div class="w3-container">
    <div class="w3-card-4 w3-margin w3-border w3-border-teal" :key="data.busName" v-for="data in datas">

<header class="w3-left w3-margin w3-container w3-light-grey">
  <h2>{{data.busName}}</h2>
</header>

<div class="w3-row">
  <p class="w3-col s3 w3-text"><b>START POINT :</b>{{data.startPoint}}</p> 
  <p class="w3-col s3 w3-text"><b>END POINT :</b>{{data.endPoint}}</p>  
  <p class="w3-col s3 w3-text"><b>SEATS :</b> {{data.no_of_seats}}</p> 
  
   <button class=" w3-col s3 w3-button w3-hover-black w3-block w3-teal w3-text w3-wide" @click="book($event,data)">BOOK NOW</button>
</div>    
</div>
  </div>
</div>
</template>


<script>
export default {
    name:'footer',
    data(){
      return {
       datas:[],
       selected_no_of_seats:0,
       selected_seats:[]
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
    },
    methods:{
      book(e,data){
        this.$http.post('http://localhost:8080/bookBus',{
          email:JSON.parse(localStorage.getItem('user')).email,
          busName:data.busName,
          starting:data.startPoint,
          end:data.endPoint,
          no_of_seats:this.selected_no_of_seats,
          seats:this.selected_seats,
          cost_factor:data.cost_factor
        }).then((data)=>{
          console.log(data)
          this.$router.push({path:'/payment'})
        })
      }
    }
}
</script>

<style scoped>

</style>
