<template>
<div>
<br>
<br>
  <div class="w3-container">
    <div class="w3-margin" :key="data.id" v-for="data in datas">

<header class="w3-left w3-margin w3-container w3-light-grey">
  <h2><i class="fa fa-bar"></i>{{data.busNAme}}</h2>
</header>

<div class="w3-row">
  <p class="w3-col s3 w3-text"><b>START POINT :</b>{{data.starting}}</p> 
  <p class="w3-col s3 w3-text"><b>END POINT :</b>{{data.end}}</p>  
  <p class="w3-col s3 w3-text"><b>SEATS :</b> {{data.no_of_seats}}</p> 
   <button class=" w3-col s3 w3-button w3-hover-black w3-block w3-teal w3-text w3-wide" @click="book($event,data)">CANCEL</button>
</div>    
</div>
  </div>
</div>
</template>


<script>
export default {
    name:'footer',
    props:['authenticated','auth'],
     data () {
     
      return {
          datas:[]
      }
    },
    created(){
         this.auth.handleAuthentication()
        this.$http.get(`http://localhost:8080/getBookingByEmail?email=${JSON.parse(localStorage.getItem('user')).email}`)
        .then((data)=>{
            this.datas=data.data
            console.log(this.datas)
        })
    }
}

</script>

<style scoped>
div{
  height:30px
}
</style>
