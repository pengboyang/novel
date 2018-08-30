<template>
  <div class="allView">
    <navbar class="topnav"></navbar>
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
  .topnav{
    position:fixed;
    top:0;
    left:0;
    z-index: 2;
  }
  .wrapper{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    padding-top: 85px;
    overflow-y: auto;
    z-index: 1;
  }
  
</style>

