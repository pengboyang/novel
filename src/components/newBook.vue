<template>
  <div class="newBook">
    <div class="manTitle">
      <span class="kind">{{title}}</span>
      <span class="moreList" @click="newMoreList">更多></span>
    </div>
    <div class="books">
      <div class="content clearfloat" v-for="item in newBookList" @click="goNovelDetail(item.id,item.type)">
        <div class="bookLeft">
          <img :src="item.cover" alt="">
        </div>
        <div class="bookRight">
          <p class="bookname">{{item.title}}</p>
          <div class="bookDescribed">{{item.summary}}</div>
          <div class="bookInfo clearfloat">
            <div class="author">
              <span class="icon"><img src="../assets/img/man.png" alt=""></span>
              <span class="man">作者：{{item.author}}</span>
            </div>
            <div class="described">
              <span>{{item.typename}}</span>
              <span>完结</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lineBg"></div>
  </div>
</template>
<script>
  export default {
    name: 'newBook',
    data() {
      return {
        newBookList: [],
        title: '',
        betterMoreList: [],
      }
    },
    created() {
      this.noType=this.$attrs.noType;
      this.newBookList = this.$attrs.data.novelItemList;
      this.title = this.$attrs.data.name;
    },
    methods: {
      newMoreList() {
         this.$router.push({path: '/moreList',query:{type:this.noType}});
      },
      /*推荐*/
      goNovelDetail(id, type) {
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

  .clearfloat {
    zoom: 1
  }

  .newBook {
    padding: 0 15px;
  }

  .newBook .lineBg {
    width: 100%;
    height: 5px;
    background: url('../assets/img/linebg.png')
  }

  .newBook .manTitle {
    padding: 20px 0 20px 0;
  }

  .newBook .manTitle .kind {
    font-size: 16px;
    font-weight: 700;
  }

  .newBook .manTitle .moreList {
    float: right;
    font-size: 14px;
    color: #999;
  }

  .newBook .books {
    width: 100%;
  }

  .newBook .books .content {
    width: 100%;
    margin-bottom: 16px;
  }

  .newBook .books .content:last-child {
    margin-bottom: 15px;
  }

  .newBook .books .content .bookLeft {
    width: 28%;
    float: left;
  }

  .newBook .books .content .bookLeft img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    box-shadow: 0px 0px 5px #999;
  }

  .newBook .books .content .bookRight {
    width: 66%;
    float: right;
  }

  .newBook .books .content .bookRight .bookname {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .newBook .books .content .bookRight .bookDescribed {
    font-size: 12px;
    color: #999;
    margin-bottom: 12px;
    line-height: 16px;
    height: 50px;
    overflow: hidden;
    letter-spacing: 1px;
  }

  .newBook .books .content .bookRight .bookInfo {
    font-size: 12px;
    color: #999;
    line-height: 14px;
  }

  .newBook .books .content .bookRight .bookInfo .described {
    float: right;
  }

  .newBook .books .content .bookRight .bookInfo .described span {
    background: #e0e0e0;
    padding: 0px 5px 1px 5px;
    vertical-align: middle;
    border-radius: 10px;
  }

  .newBook .books .content .bookRight .bookInfo .author {
    width: 52%;
    overflow: hidden;
    float: left;
  }

  .newBook .books .content .bookRight .bookInfo .author .icon {
    vertical-align: middle;
  }

  .newBook .books .content .bookRight .bookInfo .author .icon img {
    width: 10px;
  }

  .newBook .books .content .bookRight .bookInfo .author .man {
    vertical-align: middle;
  }
</style>

