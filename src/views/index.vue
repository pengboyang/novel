<template>
  <div class="allView">
    <navbar class="topnav"></navbar>
    <transition :name="$store.state.transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="wrapper">
        </router-view>
      </keep-alive>
    </transition>
    <transition :name="$store.state.transitionName">
          <router-view class="wrapper" v-if="!$route.meta.keepAlive"></router-view>
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
        // console.log(to);
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
    /*touch-action: pan-y !important;*/
  }

  .moreList, .novelCont, .readNovel .page ,.touchBox,.vip,.page-infinite-wrapper{
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

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .mint-msgbox-message {
    color: #9d9d9d !important;
    line-height: 26px !important;
    font-size: 15px !important;
    text-align: left!important;
  }

  .mint-msgbox-title {
    font-size: 17px !important;
    font-weight: 700 !important;
  }

  .mint-msgbox-confirm {
    color: #e6374a !important;
    font-size: 16px !important;
  }

  .mint-msgbox {
    width: 68% !important;
  }
</style>

