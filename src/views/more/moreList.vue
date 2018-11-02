<template>
  <div class="moreList">
    <div class="topBanner">
      <div style="width:46px;height:100%;" @click="routeBack">
        <img class="returnBack" src="../../assets/img/returnback.png" alt="">
      </div>
      <div class="topTitle">{{novelTitle}}</div>
    </div>
    <div class="comBooks">
      <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }" @scroll="handleScroll">
        <div class="lineBg"></div>
        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
          <li v-for="item in moreLists" class="page-infinite-listitem">
            <div class="novelCon clearfloat" @click="goNovelDetail(item.id,item.type)">
              <div class="novelLeft">
                <img :src="item.cover" alt="">
              </div>
              <div class="novelRight">
                <p class="bookname">{{item.title}}</p>
                <div class="bookDescribed">{{item.summary}}</div>
                <div class="bookInfo clearfloat">
                  <div class="author">
                    <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                    <span class="man">作者：{{item.author}}</span>
                  </div>
                  <div class="described">
                    <span>{{item.typename}}</span>
                    <span>{{item.state==2?'完结':'连载'}}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <p v-show="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          加载中...
        </p>
        <wv-loadmore v-if="!hasmore" type="line" text="大蜜小说"></wv-loadmore>
      </div>
    </div>
    <div class="gotop" @click="gotop" v-show="backTopShow"><img src="../../assets/img/gotop.png"/></div>
  </div>
</template>
<script>
  export default {
    name: 'moreList',
    data() {
      return {
        novelType: '',
        novelTitle: '',
        moreLists: [],
        wrapperHeight:0,
        loading: false,
        allLoaded: false,
        hasmore:true,
        nextBegin:1,
        isFirstEnter:false,
        backTopShow: false,
      }
    },
    // activated(){
    //   let scrollTops = sessionStorage.getItem('comBooks');
    //   $('.comBooks .page-infinite-wrapper').scrollTop(parseInt(scrollTops));
    // },
    beforeRouteEnter(to, from, next) {
      console.log(from)
      if(from.name=='bookDetail'||from.name=='womenList'){
          to.meta.isBack=true;
      }
      next();
    },
    activated() {
      // console.log(this.$route.query.type)
      if(!this.$route.meta.isBack || this.isFirstEnter){
          this.nextBegin = 1;
          this.novelType = this.$route.query.type;
          this.moreLists = [];
          this.loadMore();
          // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
          // 如果isFirstEnter是true，表明是第一次进入此页面或用户刷新了页面，需获取新数据
      }else{
          let scrollTops = sessionStorage.getItem('comBooks');
          $('.comBooks .page-infinite-wrapper').scrollTop(parseInt(scrollTops));
      }
      // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
      this.$route.meta.isBack=false
      // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
      this.isFirstEnter=false;
    },
    created() {
      // this.isFirstEnter=true;
      this.novelType = this.$route.query.type;
    },
    mounted(){
      this.wrapperHeight = document.documentElement.clientHeight - 46;
    },
    methods: {
      loadMore(){
          this.loading = true;
          this.novelMoreList(this.novelType, this.nextBegin);
      },
      routeBack() {
        this.$router.go(-1)
      },
      novelMoreList(category,begin) {
        if(!this.hasmore){
          this.loading = false;
          return false;
        }
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiList,
          params: {category: category,begin:begin}
        }).then(res => {
          if (res.status == 200) {
            console.log(res);
            this.moreLists = this.moreLists.concat(res.data.novelList.novelItemList);
            this.novelTitle = res.data.novelList.name;
            this.nextBegin = res.data.novelList.nextBegin;
            this.hasmore = res.data.novelList.hasMore;
            this.loading = false;
          }
        }).catch();
      },
      goNovelDetail(id, type) {
        this.$router.push({path: '/bookDetail', query: {id: id, type: type}});
      },
      gotop() {
        $('.comBooks .page-infinite-wrapper').animate({scrollTop:0}, 500);
      },
      handleScroll() {
        if ($('.comBooks .page-infinite-wrapper').scrollTop() > 250) {
          this.backTopShow = true;
        } else {
          this.backTopShow = false;
        }
      }
    }
  }
</script>
<style>
  .clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
  }

  .moreList {
    height: 100%;
    background: #fff;
  }

  .clearfloat {
    zoom: 1
  }

  .moreList .topBanner {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 0px;
    top: 0;
    padding-left: 15px;
    background: #fff;
  }

  .moreList .topBanner .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }

  .moreList .topBanner .topTitle {
    font-size: 17px;
    font-weight: 700;
    width: 100px;
    height: 46px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .moreList .lineBg {
    margin-bottom: 15px;
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png')
  }

  .moreList .comBooks{
    background: #fff;
    padding-top: 47px;
  }

  .moreList .comBooks .novelCon {
    padding: 0 15px;
    margin-bottom: 15px;
  }

  .moreList .comBooks .novelCon .novelLeft {
    width: 28%;
    float: left;
  }

  .moreList .comBooks .novelCon .novelLeft img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    box-shadow: 0px 0px 5px #999;
  }

  .moreList .comBooks .novelCon .novelRight {
    width: 65%;
    float: right;
  }

  .moreList .comBooks .novelCon .novelRight .bookname {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #000;
  }

  .moreList .comBooks .novelCon .novelRight .bookDescribed {
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
    line-height: 20px;
    height: 64px;
    overflow: hidden;
    letter-spacing: 1px;
  }

  .moreList .comBooks .novelCon .novelRight .bookInfo {
    font-size: 12px;
    color: #999;
    line-height: 14px;
  }

  .moreList .comBooks .novelCon .novelRight .bookInfo .described {
    float: right;
  }

  .moreList .comBooks .novelCon .novelRight .bookInfo .described span {
    background: #e0e0e0;
    padding: 0px 5px 1px 5px;
    vertical-align: middle;
    border-radius: 10px;
  }

  .moreList .comBooks .novelCon .novelRight .bookInfo .author {
    width: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
  }

  .moreList .comBooks .novelCon .novelRight .bookInfo .author .icon {
    vertical-align: middle;
  }

  .moreList .comBooks .novelCon .novelRight .bookInfo .author .icon img {
    width: 8px;
  }

  .moreList .comBooks .novelCon .novelRight .bookInfo .author .man {
    vertical-align: middle;
  }
    /*5*/
  @media screen and (min-device-width: 300px) and (max-device-width: 373px) {
       .moreList .comBooks .novelCon .novelLeft img {
            height: 128px;
      }
  }
  /*6*/
  @media screen and (min-device-width: 374px) and (max-device-width: 412px) {
       .moreList .comBooks .novelCon .novelLeft img {
            height: 145px;
      }
  }
  /*plus*/
  @media screen and (min-device-width:413px) and (max-device-width: 767px) {
       .moreList .comBooks .novelCon .novelLeft img {
            height: 155px;
      }
  }

  /*ipad*/
  @media screen and (min-device-width:768px) and (max-device-width: 1025px) {
       .moreList .comBooks .novelCon .novelLeft img {
            height: 270px;
      }
  }
  /*1280 1366*/
  @media screen and (min-device-width: 1026px) and (max-device-width: 1367px) {
       .moreList .comBooks .novelCon .novelLeft img{
            height: 350px;
      }
  }
  /*1920*/
  @media screen and (min-device-width: 1368px) and (max-device-width: 1440px) {
       .moreList .comBooks .novelCon .novelLeft img{
            height: 350px;
      }
  }
  /**/
  @media screen and (min-device-width: 1441px) {
       .moreList .comBooks .novelCon .novelLeft img {
            height: 125px;
      }
  }

  /*pc总体*/
  @media screen and (min-device-width: 1026px) {
       .moreList .comBooks .novelCon .novelLeft img {
            height: 480px;
      }
  }
    .page-infinite-wrapper {
        margin-top: -1px;
        /* overflow: scroll; */
        overflow-x: auto;
        overflow-y: auto;
    }

    .page-infinite-loading {
        text-align: center;
        height: 50px;
        line-height: 50px;
    }

    .page-infinite-loading div {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }
    .moreList .gotop {
      width: 30px;
      height: 30px;
      position: fixed;
      bottom: 80px;
      right: 15px;
    }

    .moreList .gotop img {
        width: 100%;
    }
</style>

