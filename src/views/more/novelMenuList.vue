<template>
  <div class="novelMenuList"  ref="menuWrap">
    <div class="topBanner">
      <div style="width:46px;height:100%;display: inline-block;" @click="routeBack"><img class="returnBack" src="../../assets/img/returnback.png" alt=""></div>
      <span class="topTitle">{{novelTitle}}</span>
    </div>
    <div class="lineBg"></div>
    <div class="menus">
      <div class="menuTop">
        <div class="allList">共{{chapterSum}}章</div>
        <div v-if="sorts" class="paixu" @click="NovelMenuList(novelId,0,'desc')"><img src="../../assets/img/paixu.png" alt=""></div>
        <div v-else-if="!sorts" class="paixu" @click="NovelMenuList(novelId,0,'')"><img src="../../assets/img/paixu1.png" alt=""></div>
      </div>
      <div class="menWra">
        <div class="comRow" :class="{active:indexs==index}" v-for="(item,index) in menuLists" @click="goRead(novelId,item.chapter,novelTitle,index)">
          <span class="text">{{item.chapterTitle}}</span>
          <div class="btn" v-if="item.pay">
            <img src="../../assets/img/lock.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="menuBottom">
      <div @click="NovelMenuLists(novelId,prepage,desc)">上一页</div>
      <div @click="NovelMenuLists(novelId,nextpage,desc)">下一页</div>
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
        sorts:true,
        desc:'',
        chapterSum:0,
        obj:{},
        isFirstEnter : false,
        indexs:-1,
        scrollTops:0
      }
    },
    activated(){
      this.indexs=this.$store.state.activeIndex;
      if(this.$route.query.id != this.novelId){
        this.$store.state.novelPage=0;
      }
      console.log(this.$store.state.novelPage)
      if(!this.$route.meta.isBack || this.isFirstEnter){
        this.menuLists = [];
        this.novelTitle = this.$route.query.title;
        this.novelId = this.$route.query.id;
        this.page = this.$store.state.novelPage;
        this.NovelMenuList(this.novelId,this.page,'');
      }
      // this.scrollTops = sessionStorage.getItem('novelMenuList');
      // $('.novelMenuList').scrollTop(parseInt(this.scrollTops));
      // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
      this.$route.meta.isBack=false
      // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
      this.isFirstEnter=false;
    },
    created() {
      console.log(2)
        this.isFirstEnter=true;
        this.novelId = this.$route.query.id;
    },
    methods: {
      routeBack() {
        this.$router.go(-1)
      },
      NovelMenuList(id,page,sort){
        this.sorts = !this.sorts;
        this.desc = sort;
        this.$http({
          method:'get',
          url:this.apiUrl.novelApiCatalog,
          params:{id:id,begin:page,sort:sort}
        }).then(res=>{
          if(res.status==200){
            this.$refs.menuWrap.scrollTop = 0;
            this.menuLists = res.data.catalogList;
            this.nextpage = res.data.nextpage;
            this.prepage = res.data.prepage;
          }
        }).catch();
      },
      NovelMenuLists(id,page,sort){
        this.$store.state.activeIndex = this.indexs=-1;
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
            this.chapterSum = res.data.chapterSum;
            this.$store.state.novelPage = this.nextpage-10;
          }
        }).catch();
      },
      goRead(id,page,title,index){
        this.$store.state.activeIndex = index;
        this.indexs = index;
        if(localStorage.getItem('novelInfo')!=null){
            this.obj =  JSON.parse(localStorage.getItem('novelInfo'));
        }
        this.obj[id]=page;
        localStorage.setItem('novelInfo',JSON.stringify(this.obj));
        this.$router.push({path: '/readNovel', query: { id:id,page:page,title:title}});
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
    background: #fff;
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
    width:80%;
    position:absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin:auto;
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
    background: #fff;
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
  .active{
    color: red;
  }

</style>

