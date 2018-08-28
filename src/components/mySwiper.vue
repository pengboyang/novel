<template>
<div class="comSwiepr">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/img/banner.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/img/banner.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/img/banner.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/img/banner.png" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
  export default{
    name:'mySwiper',
    data(){
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
          },
          loop : true,
        }
      }
    }
  }
</script>
<style>
.comSwiepr{
  padding: 0 15px;
  box-sizing: border-box;
}
.swiper-container{
  width: 100%;
}
.swiper-container img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 5px !important;
}
.swiper-pagination{
  text-align: right !important;
}
</style>

