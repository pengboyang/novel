<template>
  <div class="moreList">
    <div class="topBanner">
      <div style="width:46px;height:100%;" @click="routeBack">
        <img class="returnBack" src="../../assets/img/returnback.png" alt="">
      </div>
      <div class="topTitle">{{novelTitle}}</div>
    </div>
    <div class="lineBg"></div>
    <div class="comBooks">
      <div class="novelCon clearfloat" v-for="item in moreLists"  @click="goNovelDetail(item.id,item.type)">
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
    </div>
    <wv-loadmore type="line" text="这就是我的底线"></wv-loadmore>
  </div>
</template>
<script>
  export default {
    name: 'moreList',
    data() {
      return {
        novelType:'',
        novelTitle:'',
        moreLists:[]
      }
    },
    created() {
      this.novelType=this.$route.query.type;
      this.novelMoreList();
    },
    methods: {
      routeBack() {
        this.$router.go(-1)
      },
      novelMoreList(){
        this.$http({
          method:'get',
          url:this.apiUrl.novelApiList,
          params:{category:this.novelType}
        }).then(res=>{
          if(res.status==200){
            this.moreLists = res.data.novelList.novelItemList;
            this.novelTitle = res.data.novelList.name;
          }
        }).catch();
      },
      goNovelDetail(id, type){
         this.$router.push({path: '/bookDetail', query: {id: id, type: type}});
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
    overflow-y: auto;
  }

  .clearfloat {
    zoom: 1
  }

  .topBanner {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 15px;
    top: 0;
    background: #fff;
  }

  .topBanner .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }

  .topBanner .topTitle {
    font-size: 17px;
    font-weight: 700;
    width: 100px;
    height: 46px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 30px;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .lineBg {
    position: fixed;
    left: 0;
    top: 46px;
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png')
  }

  .comBooks {
    padding: 65px 15px 0 15px;
  }

  .comBooks .novelCon {
    margin-bottom: 15px;
  }

  .comBooks .novelCon .novelLeft {
    width: 28%;
    float: left;
  }

  .comBooks .novelCon .novelLeft img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .comBooks .novelCon .novelRight {
    width: 65%;
    float: right;
  }

  .comBooks .novelCon .novelRight .bookname {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #000;
  }

  .comBooks .novelCon .novelRight .bookDescribed {
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
    line-height: 20px;
    height: 64px;
    overflow: hidden;
    letter-spacing: 1px;
  }

  .comBooks .novelCon .novelRight .bookInfo {
    font-size: 12px;
    color: #999;
    line-height: 14px;
  }

  .comBooks .novelCon .novelRight .bookInfo .described {
    float: right;
  }

  .comBooks .novelCon .novelRight .bookInfo .described span {
    background: #e0e0e0;
    padding: 0px 5px 1px 5px;
    vertical-align: middle;
    border-radius: 10px;
  }

  .comBooks .novelCon .novelRight .bookInfo .author {
    width: 96px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    float: left;
  }

  .comBooks .novelCon .novelRight .bookInfo .author .icon {
    vertical-align: middle;
  }

  .comBooks .novelCon .novelRight .bookInfo .author .icon img {
    width: 8px;
  }

  .comBooks .novelCon .novelRight .bookInfo .author .man {
    vertical-align: middle;
  }
</style>

