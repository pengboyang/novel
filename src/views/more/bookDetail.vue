<template>
  <div class="bookDetail" ref="scroTops">
    <div class="topBanner">
      <div style="width:46px;height:100%;" @click="routeBack"><img class="returnBack" src="../../assets/img/returnback.png" alt=""></div>
      <div class="topTitle">{{title}}</div>
    </div>
    <div class="lineBg"></div>
    <div class="detaiContent">
      <div class="novelInfo clearfloat">
        <div class="left">
          <img :src="novelPic" alt="">
        </div>
        <div class="right">
          <p class="rTitle">{{title}}</p>
          <div class="lei"><span><img src="../../assets/img/leibie.png" alt=""></span><span>{{typename}}</span></div>
          <div class="lei"><span><img src="../../assets/img/man.png" alt=""></span><span>{{author}}</span></div>
          <div class="lei"><span><img src="../../assets/img/jiaqian.png" alt=""></span>5书币/千字</div>
        </div>
      </div>
      <div class="novelText">
        <div>{{summary}}</div>
        <!-- <div class="btn"><img src="../../assets/img/moretext.png" alt=""></div> -->
      </div>
      <div class="readBtn">
        <div @click="goBookshelf" v-if="!joinShelf">
          <img src="../../assets/img/jiarushujia.png" alt="">
        </div>
        <div v-else>
          <img src="../../assets/img/huiseshujia.png" alt="">
        </div>
        <div  @click="readBook">
          <img src="../../assets/img/readBtn.png" alt="">
        </div>
      </div>
      <div class="aboutNovel">
        <div class="comRow">
          <span class="menu">目录</span>
          <span class="section">共<span class="gold">{{chapterSum}}</span>章</span>
          <div class="btn">
            <img src="../../assets/img/serialize.png" alt="">
          </div>
        </div>
        <div class="comRow">
            <span class="section">第<span class="gold">{{chapterSum}}</span>章</span>
            <span class="section" style="font-size:16px;color:#000;">{{chapterName}}</span>
            <!-- <div class="centerBtn">
              <img src="../../assets/img/new.png" alt="">
            </div> -->
        </div>
        <div class="comRow">
            <span class="section">更新于<span class="gold">{{utime}}</span></span>
        </div>
      </div>
      <div class="allSection" @click="goNovelMenu">全部章节></div>
      <!-- <fine-quality :data="betterMoreList"></fine-quality> -->
      <div class="newMore">
        <div class="manTitle">
          <span class="kind">{{typename}}</span>
          <span class="moreList" @click="moreList">更多></span>
        </div>
        <div class="manNovel">
          <div class="novelWra" v-for="item in betterMoreList"  @click="goDetail(item.id,item.type)">
            <div class="novelPic"><img :src="item.cover" alt=""></div>
            <div class="novelName">{{item.title}}</div>
          </div>
        </div>
      </div>
      <wv-loadmore type="line" text="大蜜小说"></wv-loadmore>
    </div>
  </div>
</template>
<script>
  import fineQuality from '../../components/fineQuality'
  import { Toast } from 'mint-ui';
  export default {
    name: 'bookDetail',
    data() {
      return {
        bookId: '',
        bookDetailLists: [],
        novelPic:'',
        chapterName: '',
        chapterSum: '',
        novelType: '',
        author: '',
        cover: '',
        id: '',
        summary: '',
        title: '',
        typename: '',
        utime: '',
        betterMoreList: [],
        moreType:'',
        joinShelf:false,
      }
    },
    created() {
      this.bookId = this.$route.query.id;
      this.bookType = this.$route.query.type;
      this.bookDetailInfo();
      this.bookMoreList();
    },
    components: {
      fineQuality,
    },
    methods: {
      routeBack() {
        this.$router.go(-1)
      },
      readBook() {
        this.$router.push({path: '/readNovel', query: {id: this.bookId, title: this.title,page:1,joinShelf:this.joinShelf,novelType:this.bookType}});
      },
      goNovelMenu() {
        this.$router.push({path: '/novelMenuList',query: {id: this.bookId,begin:0, title: this.title}});
      },
      bookDetailInfo() {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiDetail,
          params: {id: this.bookId}
        }).then(res => {
          if (res.status == 200) {
            this.bookDetailLists = res.data.novelItem;
            this.chapterName = res.data.chapterLatestInfo.chapterName;
            this.chapterSum = res.data.chapterLatestInfo.chapter;
            this.novelType = res.data.chapterLatestInfo.novelType;
            this.utime = res.data.chapterLatestInfo.utime;
            this.author = res.data.novelItem.author;
            this.cover = res.data.novelItem.cover;
            this.id = res.data.novelItem.id;
            this.novelPic = res.data.novelItem.cover;
            this.summary = res.data.novelItem.summary;
            this.title = res.data.novelItem.title;
            this.typename = res.data.novelItem.typename;
            this.type = res.data.novelItem.type;
            this.joinShelf = res.data.joinShelf;
          }
        }).catch();
      },
      bookMoreList() {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiList,
          params: {category: this.bookType}
        }).then(res => {
          if (res.status == 200) {
            var data = res.data.novelList.novelItemList;
            this.betterMoreList = data.slice(0,3);
            this.moreType = res.data.novelList.type
          }
        }).catch()
      },
      goDetail(id, type) {
        this.bookId = id;
        this.bookType = type;
        this.bookDetailInfo();
        this.bookMoreList();
        this.$refs.scroTops.scrollTop=0;
      },
      moreList() {
        this.$router.push({path: '/moreList',query:{type:this.moreType}});
      },
      goBookshelf(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'post',
          url:this.apiUrl.novelShelfAdd,
          params:{pk:this.bookId},
          headers: {times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            this.joinShelf = true;
            Toast({
              message: res.data.msg,
              position: 'center',
              duration: 2000
            });
          }
        }).catch();
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

  .bookDetail {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
  }

  .bookDetail .topBanner {
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
  }

  .bookDetail .topBanner .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    vertical-align: middle;
  }

  .bookDetail .topBanner .topTitle {
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

  .bookDetail .lineBg {
    position: fixed;
    left: 0;
    top: 46px;
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png')
  }

  .bookDetail .detaiContent {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    padding: 70px 15px 0 15px;;
  }

  .bookDetail .detaiContent .novelInfo {
    margin-bottom: 20px;
  }

  .bookDetail .detaiContent .novelInfo .left {
    width: 35%;
    float: left;
    margin-right: 20px;
  }

  .bookDetail .detaiContent .novelInfo .left img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    box-shadow: 0px 0px 5px #999;
  }

  .bookDetail .detaiContent .novelInfo .right {
    width: 50%;
    float: left;
    color: #999;
  }

  .bookDetail .detaiContent .novelInfo .right .rTitle{
    font-size: 17px;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
  }

  .bookDetail .detaiContent .novelInfo .right .lei {
    display: -webkit-flex;
    display: flex;
    font-size: 14px;
    line-height: 13px;
    margin-bottom: 12px;
    align-items: center;
  }

  .bookDetail .detaiContent .novelInfo .right .lei img{
    width: 14px;
    height: auto;
    vertical-align: middle;
  }

  .bookDetail .detaiContent .novelInfo .right .lei span {
    padding-right: 10px;
  }

  .bookDetail .detaiContent .novelText {
    color: #999;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 13px;
    text-indent: 24px;
    position: relative;
  }

  .bookDetail .detaiContent .novelText .btn {
    position: absolute;
    right: 14px;
    bottom: 8px;
  }

  .bookDetail .detaiContent .novelText .btn img {
    width: 16px;
    vertical-align: middle;
  }

  .bookDetail .detaiContent .readBtn {
    width: 100%;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
  }

  .bookDetail .detaiContent .readBtn img {
    width: 75%;
    height: auto;
    vertical-align: middle;
  }

  .bookDetail .detaiContent .aboutNovel .comRow {
    display: -webkit-flex;
    display: flex;
    line-height: 16px;
    align-items: center;
    padding: 4px 0;
  }

  .bookDetail .detaiContent .aboutNovel .comRow .menu {
    vertical-align: middle;
    font-size: 16px;
    font-weight: 700;
    padding-right: 20px;
  }

  .bookDetail .detaiContent .aboutNovel .comRow .section {
    font-size: 12px;
    color: #999;
    padding-right: 15px;
  }

  .bookDetail .detaiContent .aboutNovel .comRow .centerBtn {
    text-align: right;
  }

  .bookDetail .detaiContent .aboutNovel .comRow .centerBtn img {
    width: 50px;
    height: auto;
    vertical-align: middle;
  }

  .bookDetail .detaiContent .aboutNovel .comRow .btn {
    flex: 1;
    text-align: right;
  }

  .bookDetail .detaiContent .aboutNovel .comRow .btn img {
    width: 55px;
    height: auto;
    vertical-align: middle;
  }

  .bookDetail .detaiContent .allSection {
    width: 100%;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-weight: 700;
    border-bottom: 5px solid #e0e0e0;
  }

  .bookDetail .detaiContent .newMore .manTitle {
    padding: 22px 0 20px 0;
  }

  .bookDetail .detaiContent .newMore .manTitle .kind {
    font-size: 16px;
    font-weight: 700;
  }

  .bookDetail .detaiContent .newMore .manTitle .moreList {
    float: right;
    font-size: 14px;
    color: #999;
  }

  .bookDetail .detaiContent .newMore .manNovel {
    width: 100%;
    background-color: white;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .bookDetail .detaiContent .newMore .manNovel .novelWra {
    width: 26%;
    vertical-align: middle;
    color: black;
    text-align: center;
  }

  .bookDetail .detaiContent .newMore .manNovel .novelWra .novelPic {
    width: 100%;
  }

  .bookDetail .detaiContent .newMore .manNovel .novelWra .novelPic img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    box-shadow: 0px 0px 5px #999;
  }

  .bookDetail .detaiContent .newMore .manNovel .novelWra .novelName {
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 10px;
  }

</style>

