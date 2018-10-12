<template>
  <!--<v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">-->
    <div class="assortmentList">
      <div class="assortmentTop">
        <div style="width:46px;height:100%;" @click="topBack"><img class="returnBack" src="../../assets/img/returnback.png" alt=""></div>
        <div class="topTitle">分类</div>
      </div>
      <div class="assortmentCont">
        <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }" @scroll="handleScroll">
          <div class="assortment">
            <div class="gender">
              <span @click="changeSex(item,index)" v-for="(item,index) in genderLists"
                    :class="{'Active': genderIndex == index}">{{item==1?'男生':'女生'}}</span>
            </div>
            <div class="mold">
              <span @click="changeAssortment(items,index)" v-for="(items,index) in channelLists"
                    :class="{'Active': channelIndex == index}">{{items.value}}</span>
            </div>
            <div class="completion">
              <span @click="changeType(item,index)" v-for="(item,index) in statusLists"
                    :class="{'Active': typeIndex == index}">{{item==0?'全部':(item==1?'连载':'完结')}}</span>
            </div>
          </div>
          <div class="filament"></div>
          <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <li v-for="item in serachLists" class="page-infinite-listitem">
              <div class="novelBooks">
                <div class="novelCon clearfloat"  @click="goDetail(item.id,item.type)">
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
                        <!-- <span>分类</span> -->
                        <span>{{item.state==0?'全部':(item.state==1?'连载':'完结')}}</span>
                      </div>
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
  <!--</v-touch>-->
</template>
<script>
  import { InfiniteScroll } from 'mint-ui';
  export default {
    name: 'assortmentList',
    data() {
      return {
        loadBegin:false,
        loading: false,
        allLoaded: false,
        show: false,
        cateGoryBookList: [],
        defaultId: 1,//小说id
        defaultType: '',//小说类型
        defaultState: '',//小说状态
        defaultPayState: '',//小说付费
        genderLists: [],//导航性别列表
        statusLists: [],//导航状态列表
        typeLists: [],//导航付费列表
        channelLists: [],//导航类型列表
        genderIndex: 0,//性别默认索引
        channelIndex: 0,//类型默认索引
        typeIndex: 0,//状态默认索引
        serachLists: [],
        wrapperHeight:0,
        nextBegin:1,
        hasmore:true,
        backTopShow: false,
      }
    },
    activated(){
      let scrollTops = sessionStorage.getItem('assortmentCont');
      $('.assortmentCont .page-infinite-wrapper').scrollTop(parseInt(scrollTops));
    },
    created() {
      this.cateGoryList();
    },
    mounted(){
      this.wrapperHeight = document.documentElement.clientHeight - 50;
    },
    methods: {
      routeBack() {
        this.$router.go(-1)
      },
      cateGoryList() {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiCategory,
          params: {gender: this.defaultId}
        }).then(res => {
          if (res.status == 200) {
            this.genderLists = res.data.genderList;
            this.statusLists = res.data.statusList;//小说状态
            this.typeLists = res.data.typeList;//付费状态
            this.channelLists = res.data.channelList;
            this.defaultId = res.data.genderList[0];//小说id
            this.defaultType = res.data.channelList[0].key;//小说类型
            this.defaultState = res.data.statusList[0];//小说状态
            this.defaultPayState = res.data.typeList[0];//小说付费
          }
        }).catch();
      },
      /*改变性别*/
      changeSex(item, index) {
        this.channelIndex = 0,//类型默认索引
        this.typeIndex = 0,//状态默认索引
        this.serachLists = [];
        this.nextBegin =1;
        this.hasmore = true;
        this.defaultId = item;
        this.genderIndex = index;
        this.cateGoryList();
      },
      /*改变小说类型*/
      changeAssortment(item, index) {
        this.hasmore = true;
        this.serachLists = [];
        this.nextBegin =1;
        this.defaultType = item.key;
        this.channelIndex = index;
      },
      /*切换小说状态*/
      changeType(item, index) {
        this.hasmore = true;
        this.serachLists = [];
        this.nextBegin =1;
        this.defaultState = item;
        this.typeIndex = index;
      },
      /*小说列表*/
      othersNovelList(category, status, type,begin) {
        if(!this.hasmore){
          this.loading = false;
          return false;
        }
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiList,
          params: {category: category, status: status, type: type,begin:begin},
        }).then(res => {
          if (res.status == 200) {
            this.serachLists = this.serachLists.concat(res.data.novelList.novelItemList);
            this.nextBegin = res.data.novelList.nextBegin;
            this.hasmore = res.data.novelList.hasMore;
            this.loading = false;
          }
        }).catch()
      },
      goDetail(id, type) {
        this.$router.push({path: '/bookDetail', query: {id: id, type: type}});
      },
      onSwipeLeft(){
        this.$router.push({path:'/novel/mineList',query:{id:4}});
      },
      onSwipeRight(){
        this.$router.push({path:'/novel/womenList',query:{id:2}});
      },
      loadMore(){
          this.loading = true;
          this.othersNovelList(this.defaultType, this.defaultState, this.defaultPayState,this.nextBegin);
      },
      gotop() {
        $('.assortmentCont .page-infinite-wrapper').animate({scrollTop:0}, 500);
      },
      handleScroll() {
        if ($('.assortmentCont .page-infinite-wrapper').scrollTop() > 250) {
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

  .clearfloat {
    zoom: 1
  }

  .assortmentList {
    color: #999;
    font-size: 14px;
    background: #fff;
    height: 100%;
  }

  .assortmentList .assortmentTop {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 0;
    top: 0;
    padding-left:15px;
    background: #fff;
    z-index: 999;
    padding-left: 15px;
    color: #000;
  }

  .assortmentList .assortmentTop .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    vertical-align: middle;
  }

  .assortmentList .assortmentTop .topTitle {
    font-size: 17px;
    font-weight: 700;
    width: 80%;
    height: 46px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .assortmentList .assortmentCont {
    padding: 46px 15px 0 15px;
  }

  .assortmentList .filament {
    margin-top: 16px;
    width: 100%;
    border-bottom: 1px solid #e0e0ee;
  }

  .assortmentList .assortment .gender {
    display: -webkit-flex;
    display: flex;
    line-height: 14px;
    padding: 16px 0 15px 0;
    margin-right: 4px;
  }

  .assortmentList .assortment .gender span {
    border: 1px solid transparent;
    border-radius: 14px;
    padding: 2px 6px;
  }

  .assortmentList .assortment .mold {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    line-height: 14px;
  }

  .assortmentList .assortment .mold span {
    border: 1px solid transparent;
    border-radius: 14px;
    padding: 2px 6px;
    margin-bottom: 15px;
    margin-right: 4px;
  }

  .assortmentList .assortment .mold img {
    width: 16px;
  }

  .assortmentList .assortment .completion {
    display: -webkit-flex;
    display: flex;
    line-height: 14px;
  }

  .assortmentList .assortment .completion span {
    padding: 2px 6px;
    border: 1px solid transparent;
    border-radius: 14px;
    margin-right: 4px;
  }

  .Active {
    border: 1px solid #ff4646 !important;
    border-radius: 14px;
    color: #ff4646;
  }

  .assortmentList .novelBooks {
    margin-top: 20px;
  }

  .assortmentList .novelBooks .novelCon {
    margin-bottom: 15px;
  }

  .assortmentList .novelBooks .novelCon .novelLeft {
    width: 28%;
    float: left;
  }

  .assortmentList .novelBooks .novelCon .novelLeft img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    box-shadow: 0px 0px 5px #999;
  }

  .assortmentList .novelBooks .novelCon .novelRight {
    width: 65%;
    float: right;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookname {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #000;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookDescribed {
    font-size: 12px;
    color: #999;
    margin-bottom: 12px;
    line-height: 16px;
    height: 50px;
    overflow: hidden;
    letter-spacing: 1px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo {
    font-size: 12px;
    color: #999;
    line-height: 14px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .described {
    float: right;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .described span {
    background: #e0e0e0;
    padding: 2px 10px;
    vertical-align: middle;
    border-radius: 10px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author {
    width: 65%;
    overflow: hidden;
    float: left;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author .icon {
    vertical-align: middle;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author .icon img {
    width: 10px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author .man {
    vertical-align: middle;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
     /*5*/
  @media screen and (min-device-width: 300px) and (max-device-width: 373px) {
       .assortmentList .novelBooks .novelCon .novelLeft img {
            height: 128px;
      }
  }
  /*6*/
  @media screen and (min-device-width: 374px) and (max-device-width: 412px) {
       .assortmentList .novelBooks .novelCon .novelLeft img {
            height: 145px;
      }
  }
  /*plus*/
  @media screen and (min-device-width:413px) and (max-device-width: 767px) {
       .assortmentList .novelBooks .novelCon .novelLeft img {
            height: 155px;
      }
  }

  /*ipad*/
  @media screen and (min-device-width:768px) and (max-device-width: 1025px) {
       .assortmentList .novelBooks .novelCon .novelLeft img {
            height: 270px;
      }
  }
  /*1280 1366*/
  @media screen and (min-device-width: 1026px) and (max-device-width: 1367px) {
       .assortmentList .novelBooks .novelCon .novelLeft img{
            height: 350px;
      }
  }
  /*1920*/
  @media screen and (min-device-width: 1368px) and (max-device-width: 1440px) {
       .assortmentList .novelBooks .novelCon .novelLeft img{
            height: 350px;
      }
  }
  /**/
  @media screen and (min-device-width: 1441px) {
       .assortmentList .novelBooks .novelCon .novelLeft img {
            height: 125px;
      }
  }

  /*pc总体*/
  @media screen and (min-device-width: 1026px) {
       .assortmentList .novelBooks .novelCon .novelLeft img {
            height: 480px;
      }
  }
    .page-infinite-wrapper {
        margin-top: -1px;
        padding-bottom: 10px;
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
    .assortmentList .gotop {
      width: 30px;
      height: 30px;
      position: fixed;
      bottom: 80px;
      right: 15px;
    }

    .assortmentList .gotop img {
        width: 100%;
    }
</style>

