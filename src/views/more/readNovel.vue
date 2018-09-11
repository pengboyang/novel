<template>
  <div class="readNovel">
    <div class="topWra" :style="{background:color,color:colors}">
      <div class="topBaner">
        <div style="width:30px;height:100%;display:inline-block;" @click.stop="back"><img class="returnBack"
                                                                                     src="../../assets/img/returnback.png"
                                                                                     alt=""></div>
        <span class="title">{{bookName}}</span>
        <div class="setting">
          <img @click="bigSize" src="../../assets/img/big.png" alt="">
          <img @click="smallSize"  src="../../assets/img/small.png" alt="">
          <img class="days" v-if="dayFlag" @click="exchangeDay"  src="../../assets/img/white.png" alt="">
          <img class="days" v-else-if="!dayFlag" @click="exchangeDays"  src="../../assets/img/black.png" alt="">
        </div>
      </div>
    </div>
    <div class="novelCont" @click="showBottom" :style="{fontSize:num+'px',background:color,color:colors}" ref="scroTop">
      <div class="novelTitle">{{bookTitle}}</div>
      <div class="novelText" v-html="novelStr"></div>
      <div class="chapter" v-if="btnFlag">
        <div v-bind:class="['novelbtn',PrenoPage ? 'novelActive' : 'novelActive1']" @click.stop="bookInfo(bookId,novelPrePage)">上一章</div>
        <div v-bind:class="['novelbtn',NextnoPage ? 'novelActive' : 'novelActive1']"  @click.stop="bookInfo(bookId,novelNextPage)">下一章</div>
      </div>
      <div class="payNovel" v-if="vipRecharge">
        <div class="price">价格:<span class="gold">{{price}}</span>书币</div>
        <div class="balance">余额:<span class="gold">{{balance}}</span>书币</div>
        <div class="payrule" @click.stop="">
          <input id="radio" type="checkbox" v-model="checked" name="radio" value=""/>
          <span>自动购买下一章，以后不再提示</span>
        </div>
        <div class="ruletext">"您购买的是数字阅读产品，不支持7天无理由退货"</div>
        <div v-if="!bought" class="payBtn" @click.stop="rechargeGold"><img src="../../assets/img/payBtn.png" alt=""></div>
        <div v-else class="payBtn" @click.stop="buyBooks"><img src="../../assets/img/payBtn1.png" alt=""></div>
        <div class="payVip">
          <div>开通超级VIP,全站书籍免费看></div>
        </div>
      </div>
    </div>
    <div class="novelToast" v-if="botmFlag">
      <div class="btn">
        <img @click="showToast" class="left" src="../../assets/img/menu.png" alt="">
        <img @click.stop="backDetail" class="right" src="../../assets/img/novelInfo.png" alt="">
      </div>
    </div>
    <mt-popup
      v-model="popupVisible1"
      position="left"
      :modal="false">
        <div class="menuListTop">
          <div style="width:30px;height:100%;display:inline-block;" @click.stop="hidePopUp"><img class="returnBack"
                                                                                      src="../../assets/img/returnback.png"
                                                                                      alt=""></div>
          <span class="menuListTitle">{{bookName}}</span>
        </div>
        <div class="menuContent">
          <div class="menuTop">
            <div class="allList">共{{chapterSum}}章</div>
            <div v-if="sorts" class="paixu" @click="novMenuLists(bookId,0,'desc')"><img src="../../assets/img/paixu.png" alt=""></div>
            <div v-else-if="!sorts" class="paixu" @click="novMenuLists(bookId,0,'')"><img src="../../assets/img/paixu1.png" alt=""></div>
          </div>
          <div class="page-infinite-wrapper">
            <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
              <li v-for="item in meuLists" class="page-infinite-listitem">
                  <div class="comRow" @click="bookInfo(bookId,item.chapter)">
                    <span class="text">{{item.chapterTitle}}</span>
                    <div class="btn" v-if="item.pay">
                      <img src="../../assets/img/lock.png" alt="">
                    </div>
                  </div>
              </li>
            </ul>
            <p v-show="loading" class="page-infinite-loading">
              <mt-spinner type="fading-circle"></mt-spinner>
              加载中...
            </p>
          </div>
        </div>
        <div class="menuModal" @click.stop="hidePopUp"></div>
    </mt-popup>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="shujiaBox">
        <div class="like">喜欢就加入书架吧</div>
        <div class="jiaru">
          <div @click="returnback">不加入</div>
          <div @click="bookStore">加入</div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  import { Popup } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default {
    name: 'readNovel',
    data() {
      return {
        dayFlag:true,
        num:18,
        color:'#f0ece9',
        colors:'#000',
        botmFlag:false,
        btnFlag: false,
        vipRecharge:false,
        checked: true,
        popupVisible1: false,
        popupVisible:false,
        list: [],
        loading: false,
        allLoaded: false,
        bookId: '',
        novelStr: '',
        bookTitle: '',
        bookName: '',
        PrenoPage:false,
        NextnoPage:false,
        novelPrePage:'',
        novelNextPage:'',
        meuLists:[],
        nextpage:0,
        chapterSum:0,
        balance:0,
        price:0,
        hasmore:true,
        bought:false,
        currentpage:1,
        sorts:true,
        desc:'',
        joinShelf:false,
        obj:{}
      }
    },
    watch:{
        novelPrePage(one,two){
            if(one==0){
                this.PrenoPage= true;
            }else{
                this.PrenoPage= false;
            }
        },
        novelNextPage(one,two){
            if(one==0){
                this.NextnoPage= true;
            }else{
                this.NextnoPage= false;
            }
        }
    },
    beforeRouteLeave (to, from, next) {
        if(localStorage.getItem('novelInfo')!=null){
            this.obj =  JSON.parse(localStorage.getItem('novelInfo'));
        }
        this.obj[this.bookId]=this.currentpage;
        localStorage.setItem('novelInfo',JSON.stringify(this.obj));
        next();
    },
    created() {
      this.bookId = this.$route.query.id;
      this.bookName = this.$route.query.title;
      this.joinShelf = this.$route.query.joinShelf;
      this.novelType = this.$route.query.novelType;
      if(localStorage.getItem('novelInfo')!=null){
        if(JSON.parse(localStorage.getItem('novelInfo'))[this.$route.query.id]!=undefined){
          this.bookInfo(this.$route.query.id,JSON.parse(localStorage.getItem('novelInfo'))[this.$route.query.id]);
        }else{
          this.bookInfo(this.$route.query.id,this.$route.query.page);
        }
      }else{
        this.bookInfo(this.$route.query.id,this.$route.query.page);
      }
      this.userSign();
    },
    methods: {
      back() {
        if(!this.joinShelf){
          this.popupVisible = true;
        }else{
          this.$router.go(-1);
        }
      },
      backDetail() {
          this.$router.go(-1);
      },
      returnback(){
          this.$router.go(-1);
      },
      bookStore(){
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
              duration: 1000
            });
            this.popupVisible = false;
            this.$router.go(-1);
            // this.$router.push({path: '/bookDetail', query: {id: this.bookId,type:this.novelType}});
          }
        }).catch();
      },
      showToast() {
        this.nextpage = 0;
        this.meuLists=[];
        this.popupVisible1 = true;
        this.botmFlag = false;
        this.hasmore = true;
      },
      novMenuList(id,page,sort){
        this.$http({
          method:'get',
          url:this.apiUrl.novelApiCatalog,
          params:{id:id,begin:page,sort:sort}
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            this.meuLists = this.meuLists.concat(res.data.catalogList);
            this.nextpage = res.data.nextpage;
            this.hasmore = res.data.hasmore;
            this.chapterSum = res.data.chapterSum;
            this.loading = false;
          }
        }).catch();
      },
      novMenuLists(id,page,sort){
        if(!this.hasmore){
          return false;
        }
        this.sorts = !this.sorts;
        this.desc = sort;
        this.loading = true;
        this.$http({
          method:'get',
          url:this.apiUrl.novelApiCatalog,
          params:{id:id,begin:page,sort:sort}
        }).then(res=>{
          if(res.status==200){
            this.meuLists = res.data.catalogList;
            this.nextpage = res.data.nextpage;
            this.hasmore = res.data.hasmore;
            this.loading = false;
          }
        }).catch();
      },
      loadMore() {
        if(!this.hasmore){
          return false;
        }
        this.loading = true;
        this.novMenuList(this.bookId,this.nextpage,this.desc)
      },
      bookInfo(id,page) {
        if(page==0){
          return false;
        }
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiContent,
          params: {id: id, page: page},
        }).then(res => {
          if (res.status == 200) {
            console.log(res);
            this.$refs.scroTop.scrollTop=0;
            this.novelStr = res.data.content;
            this.bookTitle = res.data.title;
            this.novelPrePage = res.data.prepage;
            this.novelNextPage = res.data.nextpage;
            this.balance = res.data.balance;
            this.price = res.data.price;
            this.bought = res.data.bought;
            this.currentpage = res.data.currentpage;
            this.checked = res.data.autoBuy;
            if(!res.data.pay){
                this.btnFlag = true;
                this.vipRecharge = false;
            }else{
                this.btnFlag = false;
                this.vipRecharge = true;
            }
            this.popupVisible1 = false;
          }
        }).catch()
      },
      showBottom(){
        this.botmFlag = true;
        setTimeout(()=>{
          this.botmFlag = false;
        },3000)
      },
      rechargeGold(){
        this.$router.push({path: '/recharge'})
      },
      buyBooks(){
        console.log(this.checked)
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'post',
          url:this.apiUrl.novelCoinBuy,
          data:{pk:this.bookId,startChapter:this.currentpage,endChapter:this.currentpage,coin:this.price,autoBuy:this.checked},
          headers:{times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            if(res.data.code==1){
              this.bookInfo(this.bookId,this.currentpage);
              this.checked =this.$store.state.userInfo.autoBuy = this.checked
              Toast({
                duration: 1000,
                message: res.data.msg
              })
            }else{
              Toast({
                duration: 1000,
                message: res.data.msg
              })
            }
          }
        }).catch();
      },
      bigSize(){
        if(this.num>=22){
          return false;
        }
        this.num++;
      },
      smallSize(){
        if(this.num<=12){
          return false;
        }
        this.num--;
      },
      exchangeDay(){
        this.dayFlag = false;
        this.colors = '#6f6f6f';
        this.color = '#1c1c1c';
      },
      exchangeDays(){
        this.dayFlag = true;
        this.color = '#f0ece9';
        this.colors = '#000';
      },
      hidePopUp(){
        this.popupVisible1 = false;
      },
      userSign(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'get',
          url:this.apiUrl.novelUserSign,
          headers:{times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            if(res.data.code==1&&res.data.state==false){
              MessageBox({
                title: '签到成功',
                message: res.data.content,
                confirmButtonText:'去看书'
              });
            }
          }
        }).catch()
      }
    }
  }
</script>
<style>
  .readNovel {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f0ece9;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .readNovel .topWra {
    width: 100%;
    height: 46px;
    position: fixed;
    top:0;
    left:0;
    background: #f0ece9;
    z-index: 1;
  }

  .readNovel .topWra .topBaner {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 0;
    top: 0;
    padding-left: 15px;
  }

  .readNovel .topWra .topBaner .reBtn {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }

  .readNovel .topWra .topBaner .title {
    font-size: 18px;
    font-weight: 700;
    vertical-align: middle;
    width: 50%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .readNovel .topWra .topBaner .setting {
    position: absolute;
    right: 15px;
    top: 0;
  }

  .readNovel .topWra .setting img {
    width: 26px;
    height: auto;
    vertical-align: middle;
    padding: 0 2px;
  }

  .readNovel .topWra .setting .days {
    width: 42px;
    height: auto;
    vertical-align: middle;
  }

  .readNovel .novelCont {
    height:100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 46px 15px 60px;
    font-size: 18px;
    line-height: 32px;
  }

  .readNovel .novelCont .novelTitle {
    width: 100%;
    line-height: 40px;
    font-size: 16px;
    font-weight: 700;
  }

  .readNovel .novelCont .chapter {
    display: flex;
    justify-content: center;
    text-align: center;
    height: 28px;
    margin: 16px 0;
  }

  .readNovel .novelCont .chapter .novelbtn {
    flex: 1;
    border-radius: 8px;
    margin: 0 36px;
    color: #fff;
    line-height: 28px;
    font-size: 14px;
  }

  .readNovel .novelCont .payNovel {
    border-top: 1px solid #666;
    margin-bottom: 40px;
    margin-top: 10px;
  }

  .readNovel .novelCont .payNovel .price {
    padding: 25px 0 20px 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
  }

  .readNovel .novelCont .payNovel .balance {
    line-height: 16px;
    font-size: 16px;
    font-weight: 700;
  }

  .readNovel .novelCont .payNovel .gold {
    font-weight: 500;
    color: #ff4646;
    padding-left: 15px;
  }

  .readNovel .novelCont .payNovel .payrule {
    padding-top: 20px;
  }

  .readNovel .novelCont .payNovel .payrule #radio {
    vertical-align: middle;
    width: 16px;
    height: 16px;
  }

  .readNovel .novelCont .payNovel .payrule span {
    padding-left: 5px;
    font-size: 12px;
    /* color: #999; */
    letter-spacing: 2px;
  }

  .readNovel .novelCont .payNovel .ruletext {
    font-size: 12px;
    color: #999;
    padding-top: 25px;
  }

  .readNovel .novelCont .payNovel .payBtn {
    width: 100%;
    height: 100px;
    position: relative;
  }

  .readNovel .novelCont .payNovel .payVip {
    width: 100%;
  }

  .readNovel .novelCont .payNovel .payVip div {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }

  .readNovel .novelCont .payNovel .payBtn img {
    width: 72%;
    height: auto;
    vertical-align: middle;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .readNovel .novelToast {
    width: 100%;
    background: rgba(0, 0, 0, .8);
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 15px 15px;
  }

  .readNovel .novelToast .btn {
    width: 100%;
    height: 30px;
  }

  .readNovel .novelToast .btn .left {
    width: 82px;
    height: auto;
    vertical-align: middle;
    float: left;
  }

  .readNovel .novelToast .btn .right {
    width: 82px;
    height: auto;
    vertical-align: middle;
    float: right;
  }

  .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }

  .readNovel .page {
    width: 100%;
    height: 400px;
    overflow-y: auto;
  }

  .novelActive{
    background: #999;
  }
  .novelActive1{
    background: #666;
  }

  .readNovel .mint-popup-left{
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .readNovel .mint-popup-bottom{
    width: 100%;
    background: #fff;
  }

  .readNovel .shujiaBox{
    width: 100%;
    height: 150px;
    text-align: center;
  }

  .readNovel .shujiaBox .like{
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 18px;
  }

  .readNovel .shujiaBox .jiaru{
    width: 100%;
    height: 50px;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    text-align: center;
    box-shadow: 0 -2px 0 #e0e0e0;  
  }

  .readNovel .shujiaBox .jiaru div{
    flex: 1;
    font-size: 16px;
  }

  .readNovel .shujiaBox .jiaru div:last-child{
    color: #fff;
    background: #ff4646;
  }

  .readNovel .menuListTop{
    background: #fff;
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 0;
    top: 0;
    padding-left: 15px;
    z-index: 3;
  }

  .readNovel .menuListTop .menuListTitle{
    font-size: 18px;
    font-weight: 700;
    vertical-align: middle;
    width: 80%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .readNovel .menuContent{
    background: #fff;
    width: 85%;
    height: 100%;
    padding-top: 46px;
    position: absolute;
    z-index: 2;
    overflow-y: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .readNovel .menuModal{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .readNovel .menuContent .menuTop {
    display: -webkit-flex;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
  }

 .readNovel .menuContent .menuTop div {
    flex: 1;
  }

 .readNovel .menuContent .menuTop .allList {
    color: #999;
  }

 .readNovel .menuContent .menuTop .paixu {
    text-align: right;
  }

 .readNovel .menuContent .menuTop .paixu img {
    width: 25px;
    height: auto;
    vertical-align: middle;
  }
 .readNovel .menuContent .comRow {
    display: -webkit-flex;
    display: flex;
    line-height: 16px;
    align-items: center;
    padding-bottom: 19px;
    padding-top: 20px;
    border-bottom: 1px solid #e0e0ee;
  }

 .readNovel .menuContent .comRow .text {
    vertical-align: middle;
    width: 80%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

 .readNovel .menuContent .comRow .btn {
    flex: 1;
    text-align: right;
  }

 .readNovel .menuContent .comRow .btn img {
    width: 16px;
    height: auto;
    vertical-align: middle;
  }

  .readNovel .menuContent .page-infinite-loading {
      text-align: center;
      height: 50px;
      line-height: 50px;
  }

  .readNovel .menuContent .page-infinite-loading div {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
  }

  .mint-msgbox-message{
    color: #9d9d9d !important;
    line-height: 26px !important;
    font-size: 15px !important;
  }

  .mint-msgbox-title{
    font-size: 17px !important;
    font-weight: 700 !important;
  }

  .mint-msgbox-confirm{
    color: #000 !important;
    font-size: 16px !important;
  }

  .mint-msgbox{
    width: 68% !important;
  }

</style>

