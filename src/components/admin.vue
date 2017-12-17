<template>
<div>
<br>
<br>
<br>
  <div class=" w3-black w3-bottom">
    <div :key="data.id" v-for="data in datas">
      <p> {{data}}</p> 
    </div>
  </div>
</div>
</template>


<script>
export default {
    name:'footer',
    data(){
        return{
            datas:[]
        }
    },
    created(){
        this.$http.get('http://localhost:8080/admin').then((res)=>{
            this.datas=res.data;
            console.log(res.data);
        })
    }

}
</script>

<style scoped>
div{
  height:30px
}
</style>
