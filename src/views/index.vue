<template>
  <div class="allView">
    <navbar></navbar>
    <router-view class="wrapper"></router-view>
  </div>
</template>
<script>
  import navbar from '../components/topbar'
  export default{
    name:'index',
    data(){
      return{
        wrapperHeight:0
      }
    },
    components:{
      navbar
    },
  }
</script>
<style>
  .allView{
    width: 100%;
    height: 100%;
  }
  .wrapper{
    width: 100%;
    height: 100%;
    padding-top: 90px;
  }
  
</style>

