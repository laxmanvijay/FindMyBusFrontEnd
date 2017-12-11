<template>
  <div class="w3-container w3-display-middle">
   <form class="w3-container w3-card-4">

<label class="w3-text w3-left w3-margin"><b>From</b></label>
<input name="from" list="cities" class="w3-input" type="text" ref="from" v-model="from" @input="getCities($event)">
 
<label class="w3-text w3-left w3-margin"><b>To</b></label>
<input name="to" list="cities" class="w3-input" type="text" ref="to" v-model="to" @input="getCities($event)">
<datalist class="w3-ul" id="cities">
  <div class="w3-text" v-for="city in cities" :key="city">
  <option :value="city"/>
  </div>
</datalist>
<button class="w3-btn w3-teal w3-left w3-margin" @click="search">Search Buses!</button>
 
</form>
  </div>
</template>


<script>
export default {
    name:'footer',
    data(){
      return {
        from:'',
        to:'',
        cities:[]
      }
    },
    methods:{
      search(){
        this.$router.push({path:'/buses',query:{from:this.from,to:this.to}})
      },
      getCities(event){
       
        this.$http.get('http://localhost:8080/getCities?name='+event.data).then((res)=>{
          this.cities=res.data;
        })
      }
    }
}
</script>

<style scoped>

div{
  width:80%;
  height:30%
}

input::-webkit-calendar-picker-indicator {
  display: none;
}

</style>
