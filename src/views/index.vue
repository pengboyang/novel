<template>
  <div class="allView">
    <navbar class="topnav"></navbar>
    <router-view class="wrapper"></router-view>
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
    components: {
      navbar
    },
  }
</script>
<style>
  .allView {
    width: 100%;
    height: 100%;
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
    padding-top: 115px;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
  }
  .novelCont{
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
</style>

