<template>
  <div class="novelMenuList"  ref="menuWrap">
    <div class="topBanner">
      <img @click="routeBack" class="returnBack" src="../../assets/img/returnback.png" alt="">
      <span class="topTitle">{{novelTitle}}</span>
    </div>
    <div class="lineBg"></div>
    <div class="menus">
      <div class="menuTop">
        <div class="allList">共345章</div>
        <div class="paixu"><img src="../../assets/img/paixu.png" alt=""></div>
      </div>
      <div class="menWra">
        <div class="comRow" v-for="item in menuLists" @click="goRead(novelId,item.chapter,novelTitle)">
          <span class="text">{{item.chapterTitle}}</span>
          <div class="btn" v-if="item.pay">
            <img src="../../assets/img/lock.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="menuBottom">
      <div @click="NovelMenuList(novelId,prepage,'')">上一页</div>
      <div @click="NovelMenuList(novelId,nextpage,'')">下一页</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'novelMenuList',
    data() {
      return {
        menuLists:[],
        novelId:'',
        page:'',
        novelTitle:'',
        nextpage:0,
        prepage:0,
      }
    },
    created() {
      this.novelTitle = this.$route.query.title;
      this.novelId = this.$route.query.id;
      this.page = this.$route.query.begin;
      this.NovelMenuList(this.novelId,this.page,'');
    },
    methods: {
      routeBack() {
        this.$router.go(-1)
      },
      NovelMenuList(id,page,sort){
        if(page==-10){
          return false;
        }
        this.$http({
          method:'get',
          url:this.apiUrl.novelApiCatalog,
          params:{id:id,begin:page,sort:sort}
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            this.$refs.menuWrap.scrollTop = 0;
            this.menuLists = res.data.catalogList;
            this.nextpage = res.data.nextpage;
            this.prepage = res.data.prepage;
          }
        }).catch();
      },
      goRead(id,page,title){
        this.$router.push({path: '/readNovel', query: { id:id,page: page,title:title}});
      },
    }
  }
</script>
<style>
  .novelMenuList{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .novelMenuList .topBanner {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    padding-left: 15px;
    background: #fff;
  }

  .novelMenuList .topBanner .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }

  .novelMenuList .topBanner .topTitle {
    font-size: 18px;
    font-weight: 700;
    vertical-align: middle;
    padding-left: 15px;
  }

  .novelMenuList .lineBg {
    position: fixed;
    left: 0;
    top: 46px;
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png');
  }

  .novelMenuList .menus {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 70px 15px 51px 15px;
  }

  .novelMenuList .menus .menuTop {
    display: -webkit-flex;
    display: flex;
    margin-bottom: 20px;
  }

  .novelMenuList .menus .menuTop div {
    flex: 1;
  }

  .novelMenuList .menus .menuTop .allList {
    color: #999;
  }

  .novelMenuList .menus .menuTop .paixu {
    text-align: right;
  }

  .novelMenuList .menus .menuTop .paixu img {
    width: 25px;
    height: auto;
    vertical-align: middle;
  }

  .novelMenuList .menus .menWra .comRow {
    display: -webkit-flex;
    display: flex;
    line-height: 16px;
    align-items: center;
    padding-bottom: 19px;
    padding-top: 20px;
    border-bottom: 1px solid #e0e0ee;
  }

  .novelMenuList .menus .menWra .comRow .text {
    padding-right: 25px;
    vertical-align: middle;
  }

  .novelMenuList .menus .menWra .comRow .btn {
    flex: 1;
    text-align: right;
  }

  .novelMenuList .menus .menWra .comRow .btn img {
    width: 16px;
    height: auto;
    vertical-align: middle;
  }

  .novelMenuList .menuBottom {
    position: fixed;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    background: #fff;
    display: -webkit-flex;
    display: flex;
    border-top: 1px solid #e0e0e0;
    line-height: 50px;
  }

  .novelMenuList .menuBottom div:first-child {
    border-right: 1px solid #e0e0e0;
  }

  .novelMenuList .menuBottom div {
    flex: 1;
    text-align: center;
  }

</style>

