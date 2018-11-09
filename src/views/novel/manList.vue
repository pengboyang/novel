<template>
  <div class="boy">
    <div class="manList">
      <my-swiper :lists="sweiperList" :gender="gender"></my-swiper>
      <!-- <my-swiper :gender="gender"></my-swiper> -->
      <div v-for="item in dataList">
        <new-book v-if="item.style==3" :data="item" :noType="item.type" :gender="gender"></new-book>
        <fine-quality v-else-if="item.style==6" :data="item" :noType="item.type" :gender="gender"></fine-quality>
        <free-week v-else-if="item.style==4" :data="item" :noType="item.type" :gender="gender"></free-week>
      </div>
    </div>
    <wv-loadmore type="line" text="大蜜小说"></wv-loadmore>
    <div class="qrcode">
      <p>扫描关注"大蜜小说"公众号，精彩小说看不停</p>
      <img src="../../assets/img/qrcode.jpg"/>
    </div>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  import mySwiper from '../../components/mySwiper.vue'
  import fineQuality from '../../components/fineQuality'
  import newBook from '../../components/newbook'
  import freeWeek from '../../components/freeWeek'
  import {MessageBox} from 'mint-ui';

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
    activated(){
      let scrollTops = sessionStorage.getItem('manList');
      $('.wrapper').scrollTop(parseInt(scrollTops));
    },
    created() {
      this.gender = this.$route.query.id;
      this.manPageList();
      let query = this.getCode();
      if (query && query.state && query.state == 'follow') {
        this.login(data => {
          if (data == 'success') {
            this.follow();
          }
        })
      }
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
      follow() {
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method: 'get',
          url: this.apiUrl.novelUserFollow,
          headers: {times: times, sign: md5}
        }).then(res => {
          if (res.status == 200) {
            var data = res.data;
            if (data.code == 1) {
              MessageBox({
                title: '关注成功',
                message: data.content,
                confirmButtonText: '去看书'
              });
            }
          }
        }).catch()
      },
    },
    mounted() {
    }
  }
</script>
<style>
  .qrcode {
    width: 100%;
    text-align: center;
  }
</style>

