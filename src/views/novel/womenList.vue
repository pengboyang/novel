<template>
  <!--<v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">-->
    <div class="manList">
      <my-swiper :lists="sweiperList" :gender="gender"></my-swiper>
      <!-- <my-swiper :gender="gender"></my-swiper> -->
      <div v-for="item in womenBookList">
        <new-book v-if="item.style==3" :data="item" :noType="item.type" :gender="gender"></new-book>
        <fine-quality v-else-if="item.style==6" :data="item" :noType="item.type" :gender="gender"></fine-quality>
        <free-week v-else-if="item.style==4" :data="item" :noType="item.type" :gender="gender"></free-week>
      </div>
      <wv-loadmore type="line" text="大蜜小说"></wv-loadmore>
    </div>
  <!--</v-touch>-->
</template>
<script>
  import mySwiper from '../../components/mySwiper'
  import fineQuality from '../../components/fineQuality'
  import newBook from '../../components/newbook'
  import freeWeek from '../../components/freeWeek'

  export default {
    name: 'manList',
    data() {
      return {
        gender: 0,
        womenBookList: [],
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
      this.womenPageList();
    },
    methods: {
      womenPageList() {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiLibrary,
          params: {gender: this.gender}
        }).then(res => {
          if (res.status == 200) {
            console.log(res)
            this.womenBookList = res.data.novelLists;
            this.sweiperList = res.data.novelItemList;
          }
        }).catch()
      },
      onSwipeLeft(){
        this.$router.push({path:'/novel/assortmentList',query:{id:3}});
      },
      onSwipeRight(){
        this.$router.push({path:'/novel/manList',query:{id:1}});        
      }
    },
  }
</script>
<style>
</style>

