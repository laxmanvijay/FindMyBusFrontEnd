<template>
  <div class="w3-container w3-display-middle">
   <form class="w3-container w3-card-4 w3-border w3-border-teal">

<div class="w3-row">
<div class="w3-col s5 w3-margin">
<label class="w3-text w3-left w3-margin"><b>Starting Point</b></label>
<input name="from" list="cities" class="w3-input w3-border w3-margin" type="text" ref="from" v-model="from" @input="getCities($event)">
</div>
<div class="w3-col s5 w3-margin">
<label class="w3-text w3-left w3-margin"><b>Ending Point</b></label>
<input name="to" list="cities" class="w3-input w3-border w3-margin" type="text" ref="to" v-model="to" @input="getCities($event)">
</div>
</div>
<div class="w3-row">
<div class="w3-col s5 w3-margin">
<label class="w3-text w3-left w3-margin"><b>Starting Date</b></label>
<input name="from" list="cities" class="w3-input w3-border w3-margin" type="date" ref="from">
</div>
<div class="w3-col s5 w3-margin">
<label class="w3-text w3-left w3-margin"><b>Ending Date(optional)</b></label>
<input name="to" list="cities" class="w3-input w3-border w3-margin" type="date" ref="to">
</div>
</div>
<datalist class="w3-ul" id="cities">
  <div class="w3-text" v-for="city in cities" :key="city">
  <option :value="city"/>
  </div>
</datalist>
<button class="w3-button w3-teal w3-right w3-margin" @click="search">Search Buses!</button>
 
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
        this.$router.push({path:'/buses',query:{from:this.from,to:this.to}});
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
