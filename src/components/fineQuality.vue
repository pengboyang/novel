<template>
  <div class="manContent">
    <div class="manTitle">
      <span class="kind">{{title}}</span>
      <span class="moreList" @click="moreList">更多></span>
    </div>
    <div class="manNovel">
      <div class="novelWra" @click="goDetail(item.id,item.type)" v-for="item in listData">
        <div class="novelPic"><img :src="item.cover" alt=""></div>
        <div class="novelName">{{item.title}}</div>
      </div>
    </div>
    <div class="lineBg"></div>
  </div>
</template>
<script>
  export default {
    name: 'fineQuality',
    data() {
      return {
        listData: [],
        title: '',
        betterMoreList: [],
        noType:''
      }
    },
    created() {
      // console.log(this.$attrs.gender);
      // this.noType=this.$attrs.noType;
      this.genders(this.$attrs.gender)
      this.listData = this.$attrs.data.novelItemList;
      this.title = this.$attrs.data.name;
    },
    methods: {
      moreList() {
        this.$router.push({path: '/moreList',query:{type:this.noType}});
      },
      goDetail(id, type) {
        this.$router.push({path: '/bookDetail', query: {id: id, type: type}});
      }
    }
  }
</script>
<style>
  .manContent {
    padding: 0 15px;
  }

  .manContent .lineBg {
    width: 100%;
    height: 5px;
    background: url('../assets/img/linebg.png')
  }

  .manContent .manTitle {
    padding: 5px 0 20px 0;
  }

  .manContent .manTitle .kind {
    font-size: 16px;
    font-weight: 700;
  }

  .manContent .manTitle .moreList {
    float: right;
    font-size: 14px;
    color: #999;
  }

  .manContent .manNovel {
    width: 100%;
    background-color: white;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .manContent .manNovel .novelWra {
    width: 28%;
    vertical-align: middle;
    color: black;
    text-align: center;
  }

  .manContent .manNovel .novelWra .novelPic {
    width: 100%;
  }

  .manContent .manNovel .novelWra .novelPic img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    box-shadow: 0px 0px 5px #999;
  }

  /*5*/
  @media screen and (min-device-width: 300px) and (max-device-width: 373px) {
      .manContent .manNovel .novelWra .novelPic img {
            height: 128px;
      }
  }
  /*6*/
  @media screen and (min-device-width: 374px) and (max-device-width: 412px) {
      .manContent .manNovel .novelWra .novelPic img {
            height: 145px;
      }
  }
  /*plus*/
  @media screen and (min-device-width:413px) and (max-device-width: 767px) {
      .manContent .manNovel .novelWra .novelPic img {
            height: 155px;
      }
  }

  /*ipad*/
  @media screen and (min-device-width:768px) and (max-device-width: 1025px) {
      .manContent .manNovel .novelWra .novelPic img {
            height: 270px;
      }
  }
  /*1280 1366*/
  @media screen and (min-device-width: 1026px) and (max-device-width: 1367px) {
      .manContent .manNovel .novelWra .novelPic img ,{
            height: 350px;
      }
  }
  /*1920*/
  @media screen and (min-device-width: 1368px) and (max-device-width: 1440px) {
      .manContent .manNovel .novelWra .novelPic img {
            height: 350px;
      }
  }
  /**/
  @media screen and (min-device-width: 1441px) {
      .manContent .manNovel .novelWra .novelPic img {
            height: 125px;
      }
  }

  /*pc总体*/
  @media screen and (min-device-width: 1026px) {
      .manContent .manNovel .novelWra .novelPic img {
            height: 480px;
      }
  }

  .novelName, .novelPrice {
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 10px;
  }
</style>