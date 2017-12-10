<template>
  <div class="w3-container w3-display-middle">
   <form class="w3-container w3-card-4">

<label class="w3-text w3-left w3-margin"><b>From</b></label>
<input class="w3-input" type="text" ref="from" v-model="from">
 
<label class="w3-text w3-left w3-margin"><b>To</b></label>
<input class="w3-input" type="text" ref="to" v-model="to">

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
        to:''
      }
    },
    methods:{
      search(){
        this.$router.push({path:'/buses',query:{from:this.from,to:this.to}})
      }
    }
}
</script>

<style scoped>

div{
  width:80%;
  height:30%
}

</style>
