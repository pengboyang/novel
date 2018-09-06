<template>
  <!--<v-touch v-on:swipeleft="onSwipeLeft">-->
    <div class="manList">
      <my-swiper :lists="sweiperList"></my-swiper>
      <div v-for="item in dataList">
        <new-book v-if="item.style==3" :data="item" :noType="item.type"></new-book>
        <fine-quality v-else-if="item.style==6" :data="item" :noType="item.type"></fine-quality>
        <free-week v-else-if="item.style==4" :data="item" :noType="item.type"></free-week>
      </div>
      <wv-loadmore type="line" text="大蜜小说"></wv-loadmore>
    </div>
  <!--</v-touch>-->
</template>
<script>
  import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import mySwiper from '../../components/mySwiper.vue'
  import fineQuality from '../../components/fineQuality'
  import newBook from '../../components/newbook'
  import freeWeek from '../../components/freeWeek'

  export default {
    name: 'manList',
    data() {
      return {
        gender: 0,
        dataList: [],
        manNewBookList: [],
        manHotBookList: [],
        manBetterBookList: [],
        manFreeBookList: [],
        sweiperList: [],
      }
    },
    components: {
      mySwiper,
      fineQuality,
      newBook,
      freeWeek
    },
    created() {
      this.gender = this.$route.query.id;
      this.manPageList();
    },
    methods: {
      manPageList() {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiLibrary,
          params: {gender: this.gender}
        }).then(res => {
          if (res.status == 200) {
            var data = res.data.novelLists;
            this.sweiperList = res.data.novelItemList;
            this.dataList = res.data.novelLists;
          }
        }).catch()
      },
      onSwipeLeft(){
        this.$router.push({path:'/novel/womenList',query:{id:2}});
      },
      a(){},
      b(){},
    },
    mounted() {
    }
  }
</script>
<style>

</style>

