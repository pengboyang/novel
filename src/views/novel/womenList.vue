<template>
  <div class="manList">
    <my-swiper></my-swiper>
    <fine-quality title="女生精品"></fine-quality>
    <new-book title="女生新书"></new-book>
    <fine-quality title="女生热搜"></fine-quality>
    <free-week title="女生热搜"></free-week>
    <wv-loadmore type="line" text="这就是我的底线"></wv-loadmore>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import mySwiper from '../../components/mySwiper'
  import fineQuality from '../../components/fineQuality'
  import newBook from '../../components/newbook'
  import freeWeek from '../../components/freeWeek'

  export default {
    name: 'manList',
    data() {
      return {
        isFirstEnter: false, // 是否第一次进入，默认false
      }
    },
    components: {
      mySwiper,
      fineQuality,
      newBook,
      freeWeek
    },
    methods: {},
    mounted() {
      console.log(this.$route)
    },
    created() {
      this.isFirstEnter = true;
    },
    activated() {
      if (!this.$route.meta.isBack || this.isFirstEnter) {
        // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
      }
      // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
      this.$route.meta.isBack = false;
      // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
      this.isFirstEnter = false;
    },
  }
</script>
<style>
</style>

