<template>
  <div class="allView">
    <navbar></navbar>
    <router-view class="wrapper" :style="{height:wrapperHeight+'px'}"></router-view>
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
    mounted(){
        this.wrapperHeight = document.documentElement.clientHeight - 104;
    }
  }
</script>
<style>
  .allView{
    width: 100%;
    height: 100%;
  }
  .wrapper{
    overflow-y: auto;
  }
  
</style>

