<template>
  <div class="comSwiepr">
    <wv-swipe :autoplay="10000" :height="120" :prevent="true">
      <wv-swipe-item v-for="(item,index) in srcLists" :key="index"><img @click="goBookDetail(item.id,item.type)" style="width:100%;height:auto;vertical-align:middle" :src="item.cover" alt=""></wv-swipe-item>
    </wv-swipe>
    <div class="secondTab">
      <div class="tabCon" @click="goBookcase">
        <img src="../assets/img/nansheng.png" alt="">
        <div class="text">书架</div>
      </div>
      <div class="tabCon" @click="goFenlei">
        <img src="../assets/img/fenleis.png" alt="">
        <div class="text">分类</div>
      </div>
      <div class="tabCon" @click="goWode">
        <img src="../assets/img/wode.png" alt="">
        <div class="text">我的</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mySwiper',
    data() {
      return {
        srcLists: [],
      }
    },
    props: {
      lists: {
        type: Array,
        default() {
          return []
        }
      },
    },
    watch: {
      lists: function (od, nw) {
        this.srcLists = od;
      }
    },
    created() {
    },
    methods:{
      goBookDetail(id,type){
         this.$router.push({path: '/bookDetail', query: {id: id,type: type}});
      },
      goFenlei(){
        this.$router.push({path:'/assortmentList'});
      },
      goBookcase(){
        this.$router.push({path:'/bookShelf'});
      },
      goWode(){
        this.$router.push({path:'/mineList'});
      },
    }
  }
</script>
<style>
  .comSwiepr {
    padding: 0 15px;
    box-sizing: border-box;
  }

  .swiper-container {
    width: 100%;
  }

  .swiper-container img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 5px !important;
  }

  .swiper-pagination {
    text-align: right !important;
  }
  
  .comSwiepr .secondTab{
    margin-top: 30px;
    display: -webkit-flex;
    display: flex;
    text-align: center;
    justify-content:space-between;
  }

  .comSwiepr .secondTab .tabCon{
  }

  .comSwiepr .secondTab .tabCon img{
    width: 50%;
    height: auto;
    vertical-align: middle;
  }

  .comSwiepr .secondTab .tabCon .text{
    font-size: 14px;
    color: #999;
    line-height: 36px;
  }
</style>

