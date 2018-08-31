<template>
  <div class="readNovel">
    <div class="topWra" :style="{background:color}">
      <div class="topBaner">
        <div style="width:30px;height:100%;display:inline-block;" @click.stop="back"><img class="returnBack"
                                                                                     src="../../assets/img/returnback.png"
                                                                                     alt=""></div>
        <span class="title">{{bookName}}</span>
      </div>
      <div class="setting">
        <img @click="bigSize" src="../../assets/img/big.png" alt="">
        <img @click="smallSize"  src="../../assets/img/small.png" alt="">
        <img @click=""  src="../../assets/img/white.png" alt="">
      </div>
      <div class="novelTitle">{{bookTitle}}</div>
    </div>
    <div class="novelCont" @click="showBottom" :style="{fontSize:num+'px'}" ref="scroTop">
      <div class="novelText" v-html="novelStr"></div>
      <div class="chapter" v-if="btnFlag">
        <div v-bind:class="['novelbtn',PrenoPage ? 'novelActive' : 'novelActive1']" @click.stop="bookInfo(bookId,novelPrePage)">上一章</div>
        <div v-bind:class="['novelbtn',NextnoPage ? 'novelActive' : 'novelActive1']"  @click.stop="bookInfo(bookId,novelNextPage)">下一章</div>
      </div>
      <div class="payNovel" v-if="vipRecharge">
        <div class="price">价格:<span class="gold">{{price}}</span>书币</div>
        <div class="balance">余额:<span class="gold">{{balance}}</span>书币</div>
        <!-- <div class="payrule">
          <input id="radio" type="checkbox" v-model="checked" name="radio" value=""/>
          <span>自动购买下一章，以后不再提示</span>
        </div> -->
        <div class="ruletext">"您购买的是数字阅读产品，不支持7天无理由退货"</div>
        <div class="payBtn" @click.stop="rechargeGold"><img src="../../assets/img/payBtn.png" alt=""></div>
        <div class="payVip">
          <div>开通超级VIP,全站书籍免费看></div>
        </div>
      </div>
    </div>
    <div class="novelToast" v-if="botmFlag">
      <div class="btn">
        <img @click="showToast" class="left" src="../../assets/img/menu.png" alt="">
        <img class="right" src="../../assets/img/novelInfo.png" alt="">
      </div>
    </div>
    <wv-popup :visible.sync="popupVisible1">
      <div class="page page-infinite-wrapper">
        <wv-group title="目录" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
                  infinite-scroll-distance="50" infinite-scroll-immediate-check="true">
          <div class="menuTitle" v-for="item in meuLists" @click="bookInfo(bookId,item.chapter)">{{item.chapterTitle}}</div>
        </wv-group>
        <p v-show="loading" class="loading-tips">
          <wv-spinner type="snake" color="#444" :size="24"/>
        </p>
      </div>
    </wv-popup>
  </div>
</template>
<script>
  export default {
    name: 'readNovel',
    data() {
      return {
        num:16,
        color:'#f0ece9',
        botmFlag:false,
        btnFlag: false,
        vipRecharge:false,
        checked: true,
        popupVisible1: false,
        list: [],
        loading: false,
        allLoaded: false,
        bookId: '',
        bookPage: '',
        novelStr: '',
        bookTitle: '',
        bookName: '',
        PrenoPage:false,
        NextnoPage:false,
        novelPrePage:'',
        novelNextPage:'',
        meuLists:[],
        lastPage:0,
        chapterSum:0,
        balance:0,
        price:0,
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
    created() {
    },
    created() {
      this.bookId = this.$route.query.id;
      this.bookPage = this.$route.query.page;
      this.bookName = this.$route.query.title;
      this.chapterSum = this.$route.query.allMenu;
      this.bookInfo(this.bookId,this.bookPage);
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      showToast() {
        this.popupVisible1 = true;
      },
      novMenuList(){
        if(this.lastPage==this.chapterSum){
          return false;
        }
        this.loading = true;
        this.$http({
          method:'get',
          url:this.apiUrl.novelApiCatalog,
          params:{id:this.bookId,begin:this.lastPage}
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            this.meuLists = res.data.catalogList.concat(this.meuLists);
            this.lastPage = res.data.catalogList[res.data.catalogList.length-1].chapter;
            this.loading = false;
             console.log(this.lastPage)
          }
        }).catch();
      },
      loadMore() {
        this.novMenuList()
      },
      bookInfo(id,page) {
        if(page==0){
          return false;
        }
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiContent,
          params: {id: id, page: page}
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
        console.log(1);
      },
      bigSize(){
        if(this.num>18){
          return false;
        }
        this.num++;
      },
      smallSize(){
        if(this.num<12){
          return false;
        }
        this.num--;
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
    height: 110px;
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
    left: 15px;
    top: 0;
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
    color: #000;
  }

  .readNovel .topWra .setting {
    height: 25px;
    position: fixed;
    right: 15px;
    top: 46px;
  }

  .readNovel .topWra .setting img {
    width: 32px;
    height: auto;
    vertical-align: middle;
  }

  .readNovel .topWra .novelTitle {
    width: 100%;
    line-height: 24px;
    position: fixed;
    left: 15px;
    top: 71px;
    font-size: 16px;
    font-weight: 700;
  }

  .readNovel .novelCont {
    height:100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 110px 15px 60px;
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

  .readNovel .loading-tips {
    color: #222;
    text-align: center;
  }

  .readNovel .page {
    width: 100%;
    height: 300px;
    overflow-y: auto;
  }

  .readNovel .page .menuTitle {
    line-height: 45px;
    border-bottom: 1px solid #e0e0e0;
    padding: 0 15px;
  }
  .novelActive{
    background: #999;
  }
  .novelActive1{
    background: #666;
  }
</style>

