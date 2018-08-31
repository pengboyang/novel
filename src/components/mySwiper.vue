<template>
  <div class="comSwiepr">
    <wv-swipe :autoplay="10000" :height="120">
      <wv-swipe-item v-for="(item,index) in srcLists" :key="index"><img @click="goBookDetail(item.id,item.type)" style="width:100%;height:auto;vertical-align:middle" :src="item.cover" alt=""></wv-swipe-item>
    </wv-swipe>
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
        console.log(this.srcLists);
      }
    },
    created() {
    },
    methods:{
      goBookDetail(id,type){
         this.$router.push({path: '/bookDetail', query: {id: id,type: type}});
      }
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
</style>

