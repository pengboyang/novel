<template>
  <div class="bookDetail">
    <div class="topBanner">
      <div style="width:46px;height:100%;" @click="routeBack"><img class="returnBack"
                                                                   src="../../assets/img/returnback.png" alt=""></div>
      <div class="topTitle">{{title}}</div>
    </div>
    <div class="lineBg"></div>
    <div class="detaiContent">
      <div class="novelInfo clearfloat">
        <div class="left">
          <img src="../../assets/img/wanmeishijie .png" alt="">
        </div>
        <div class="right">
          <p>{{title}}</p>
          <div class="lei"><span>分类</span><span>{{typename}}</span></div>
          <div class="ahtuor"><span>作者</span><span>{{author}}</span></div>
          <div class="textNum">5币/千字</div>
        </div>
      </div>
      <div class="novelText">
        <div>{{summary}}</div>
        <div class="btn"><img src="../../assets/img/moretext.png" alt=""></div>
      </div>
      <div class="readBtn" @click="readBook"><img src="../../assets/img/readBtn.png" alt=""></div>
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
          <span class="section">{{chapterName}}</span>
          <div class="centerBtn">
            <img src="../../assets/img/new.png" alt="">
          </div>
        </div>
        <div class="comRow">
          <span class="section">更新于<span class="gold">2018-8-13</span><span>12:00</span></span>
        </div>
        <div class="comRow">
          <span class="section">更新于<span class="gold">2018-8-13</span><span>12:00</span></span>
        </div>
      </div>
      <div class="allSection" @click="goNovelMenu">全部章节></div>
      <fine-quality :data="betterMoreList"></fine-quality>
      <wv-loadmore type="line" text="这就是我的底线"></wv-loadmore>
    </div>
  </div>
</template>
<script>
  import fineQuality from '../../components/fineQuality'

  export default {
    name: 'bookDetail',
    data() {
      return {
        bookId: '',
        bookDetailLists: [],
        chapterName: '',
        chapterSum: '',
        novelType: '',
        author: '',
        cover: '',
        id: '',
        summary: '',
        title: '',
        typename: '',
        betterMoreList: []
      }
    },
    created() {
      this.bookId = this.$route.query.id;
      this.bookType = this.$route.query.type;
      this.betterMoreList = this.$route.query.betterMoreList;
      console.log(this.betterMoreList)
      this.bookDetailInfo();
    },
    components: {
      fineQuality,
    },
    methods: {
      routeBack() {
        this.$router.go(-1)
      },
      readBook() {
        this.$router.push({path: '/readNovel'});
      },
      goNovelMenu() {
        this.$router.push({path: '/novelMenuList'});
      },
      bookDetailInfo() {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiDetail,
          params: {id: this.bookId}
        }).then(res => {
          if (res.status == 200) {
            console.log(res);
            this.bookDetailLists = res.data.novelItem;
            this.chapterName = res.data.chapterName;
            this.chapterSum = res.data.chapterSum;
            this.novelType = res.data.novelType;
            this.author = res.data.novelItem.author;
            this.cover = res.data.novelItem.cover;
            this.id = res.data.novelItem.id;
            this.summary = res.data.novelItem.summary;
            this.title = res.data.novelItem.title;
            this.typename = res.data.novelItem.typename;
            this.type = res.data.novelItem.type;
          }
        }).catch();
      },
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
    height: 100%;
    overflow-y: auto;
  }

  .bookDetail .topBanner {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 15px;
    top: 0;
    background: #fff;
    z-index: 999;
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
    right: 30px;
    bottom: 0;
    left: 0;
    margin: auto;
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
    padding: 70px 15px 0 15px;;
  }

  .bookDetail .detaiContent .novelInfo {
    margin-bottom: 20px;
  }

  .bookDetail .detaiContent .novelInfo .left {
    width: 28%;
    float: left;
    padding-right: 16px;
  }

  .bookDetail .detaiContent .novelInfo .left img {
    width: 100%;
  }

  .bookDetail .detaiContent .novelInfo .right {
    width: 65%;
    float: left;
    color: #999;
    font-size: 14px;
  }

  .bookDetail .detaiContent .novelInfo .right p {
    font-size: 17px;
    font-weight: 700;
    color: #000;
  }

  .bookDetail .detaiContent .novelInfo .right .lei {
    line-height: 24px;
  }

  .bookDetail .detaiContent .novelInfo .right .lei span {
    padding-right: 10px;
  }

  .bookDetail .detaiContent .novelInfo .right .ahtuor {
    line-height: 24px;
  }

  .bookDetail .detaiContent .novelInfo .right span {
    padding-right: 10px;
  }

  .bookDetail .detaiContent .novelInfo .right .textNum {
    line-height: 24px;
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
    height: 36px;
    width: 100%;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .bookDetail .detaiContent .readBtn img {
    width: 54%;
    margin: 0 auto;
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

</style>

