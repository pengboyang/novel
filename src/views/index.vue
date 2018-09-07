<template>
  <div class="allView">
    <navbar class="topnav"></navbar>
    <transition :name="$store.state.transitionName">
        <router-view class="wrapper"></router-view>
    </transition>
  </div>
</template>
<script>
  import navbar from '../components/topbar'

  export default {
    name: 'index',
    data() {
      return {
        wrapperHeight: 0
      }
    },
    watch:{
      '$route'(to,from){
        console.log(to);
        if(to.query.id<3){
          if(to.query.id>from.query.id){
            this.$store.state.transitionName = 'slide-left'
          }else{
            this.$store.state.transitionName = 'slide-right'
          }
        }else{
          this.$store.state.transitionName = ''
        }
      }
    },
    components: {
      navbar
    },
  }
</script>
<style>
  .allView {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .topnav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 56px;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
    transition: all .8s cubic-bezier(.55, 0, .1, 1);
    /*touch-action: pan-y !important;*/
  }
  .moreList,.novelCont,.readNovel .page{
    -webkit-overflow-scrolling: touch;
  }
  .transparentBg {
    background: rgba(255, 255, 255, 0);
  }

  .comSwiepr, .manContent, .newBook, .manContent, .freeWeek, .weui-loadmore, .assortment, .assortmentCont, .mineList, .detaiContent, .comBooks, .manList, .assortmentList, .moreList, .bookDetail {
    background: #fff;
  }

  .kind, .bookname {
    color: #000;
  }

  .novelPic img {
    box-shadow: 0px 0px 5px #999;
  }

  .slide-left-enter,
  .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
  }
 
  .slide-left-leave-active,
  .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
</style>

