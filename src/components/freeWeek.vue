<template>
  <div class="freeWeek">
    <div class="manTitle">
      <span class="kind">{{title}}</span>
      <!--<span class="timer"><span class="hour">04</span>时<span class="minute">04</span>分<span class="second">10</span>秒</span>-->
      <span class="moreList" @click="freeMoreList">更多></span>
    </div>
    <div class="freeNovel">
        <div class="novelWra" v-for="item in freeBookList" @click="goDetail(item.id,item.type)">
          <div class="novelPic"><img :src="item.cover" alt=""></div>
          <div class="novelName">{{item.title}}</div>
          <div class="novelPrice">
            <!-- <span class="costPrice">￥99.99</span>
            <span class="currentPrice">￥0</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'freeWeek',
    data() {
      return {
        freeBookList: [],
        title: '',
        betterMoreList: []
      }
    },
    created() {
      this.noType=this.$attrs.noType;
      this.freeBookList = this.$attrs.data.novelItemList;
      this.title = this.$attrs.data.name;
    },
    methods: {
      freeMoreList() {
         this.$router.push({path: '/moreList',query:{type:this.noType}});
      },
      goDetail(id, type) {
        this.$router.push({path: '/bookDetail', query: {id: id, type: type}});
      }
    }
  }
</script>
<style>
  .freeWeek {
    padding: 0 15px;
    margin-bottom: 10px;
  }

  .freeWeek .manTitle {
    padding: 20px 0 20px 0;
  }

  .freeWeek .manTitle .timer {
    color: #999;
    font-size: 12px;
    margin-left: 10px;
    vertical-align: middle;
  }

  .freeWeek .manTitle .timer .hour {
    padding: 2px 3px;
    border-radius: 4px;
    background: #ff4646;
    color: #fff;
    margin-right: 3px;
  }

  .freeWeek .manTitle .timer .minute {
    padding: 2px 3px;
    border-radius: 4px;
    background: #000;
    color: #fff;
    margin-right: 3px;
    margin-left: 3px;
  }

  .freeWeek .manTitle .timer .second {
    padding: 2px 3px;
    border-radius: 4px;
    background: #000;
    color: #fff;
    margin-right: 3px;
    margin-left: 3px;
  }

  .freeWeek .manTitle .kind {
    font-size: 16px;
    font-weight: 700;
  }

  .freeWeek .manTitle .moreList {
    float: right;
    font-size: 14px;
    color: #999;
    vertical-align: middle;
  }

  .freeWeek .freeNovel {
    width: 100%;
    background-color: white;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .freeWeek .freeNovel .novelWra {
    font-size: 12px;
    width: 28%;
    vertical-align: middle;
    color: black;
    text-align: center;
  }

  .freeWeek .freeNovel .novelWra .novelPic {
    width: 100%;
  }

  .freeWeek .freeNovel .novelWra .novelPic img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .freeWeek .freeNovel .novelWra .novelPrice .costPrice {
    text-decoration: line-through;
  }

  .freeWeek .freeNovel .novelWra .novelPrice .currentPrice {
    color: #ff4646;
  }
</style>

