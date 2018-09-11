<template>
  <!--<v-touch v-on:swiperight="onSwipeRight">-->
    <div class="mineList">
      <div class="mineTop">
          <div style="width:46px;height:100%;" @click="back"><img class="returnBack" src="../../assets/img/returnback.png"
                                                            alt=""></div>
          <div class="title">我的</div>
      </div>
      <div class="mineListCon">
        <div class="userInfo">
          <div class="uesrLogo"><img :src="imgPath" alt=""></div>
          <div class="userName">
            <div class="name">{{nickName}}</div>
            <!-- <div class="vip"><img src="../../assets/img/vip.png" alt=""></div> -->
          </div>
        </div>
        <div class="others">
          <div class="comRow">
            <span class="leftImg"><img src="../../assets/img/bookGold.png" alt=""></span>
            <span class="text">余额</span>
            <span class="text"><span class="gold">{{coin}}</span>书币</span>
            <div class="btn" @click="goRecharge">
              <img src="../../assets/img/recharge.png" alt="">
            </div>
          </div>
          <div class="comRow">
            <span class="leftImg"><img src="../../assets/img/autobuy.png" alt=""></span>
            <span class="autobuy">自动购买</span>
            <div  @click="autoBuy"><wv-switch v-model="switchValue"></wv-switch></div>
          </div>
          <div class="comRow" @click="goService">
            <span class="leftImg"><img src="../../assets/img/kefu.png" alt=""></span>
            <span class="text">联系客服</span>
            <div class="arrowBtn">
              <img src="../../assets/img/rightJT.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  <!--</v-touch>-->
</template>
<script>
  import { Switch } from 'we-vue'
  import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        isFirstEnter: false, // 是否第一次进入，默认false
        imgPath: require('../../assets/img/my-pic.png'),
        nickName: '',
        coin:0,
        switchValue:false
      }
    },
    created() {
      this.goldBalance();
      if(!this.$store.state.userInfo.imgPath){
        this.getCode();
        if (this.$store.state.userCode) {
          this.authorlogin();
        } else {
          this.getUser();
        }
      }else{
        console.log(1);
        this.imgPath=this.$store.state.userInfo.imgPath;
        this.nickName=this.$store.state.userInfo.nickName;
        this.switchValue=this.$store.state.userInfo.autoBuy;
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      goRecharge() {
        this.$router.push({path: '/recharge'});
      },
      goService() {
        this.$router.push({path: '/customService'});
      },
      getUser() {
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method: 'get',
          url: this.apiUrl.getUser,
          headers: {times: times, sign: md5}
        }).then(res => {
          console.log(res);
          var data = res.data;
          if (data.code == 1) {
            localStorage.setItem('uuid', data.uuid);
            this.imgPath =this.$store.state.userInfo.imgPath= data.imagePath;
            this.nickName =this.$store.state.userInfo.nickName= data.nickName;
            this.switchValue = this.$store.state.userInfo.autoBuy= data.autoBuy;
          } else if (data.code == 3) {
            location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx30e74a0a5ca3c0bd&redirect_uri=http%3a%2f%2fdev.r8uk83.cn%2fnovel%2fdist%2findex.html%23%2fnovel%2fmineList%3fid%3d4&response_type=code&scope=snsapi_userinfo&state=user#wechat_redirect';
          } else if (data.code == 4) {
            this.login(data=> {
              if(data=='success'){
                this.getUser();
              }
            })
          } else {
          }
        }).catch(error => {
          console.log(error);
        });
      },
      /*用户授权*/
      authorlogin() {
        this.$http({
          method: 'get',
          url: this.apiUrl.authorlogin,
          params: {
            code: this.$store.state.userCode,
          }
        }).then(res => {
          var data = res.data;
          if (data.code == 1) {
            this.imgPath =this.$store.state.userInfo.imgPath= data.imagePath;
            this.nickName =this.$store.state.userInfo.nickName= data.nickName;
          }
        }).catch(error => {
          console.log(error);
        });
      },
      /*金币余额*/
      goldBalance(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'post',
          url:this.apiUrl.novelCoinSurplus,
          headers: {times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            this.coin = res.data.coin;
          }
        }).catch();
      },
      onSwipeRight(){
        this.$router.push({path:'/novel/assortmentList',query:{id:3}});
      },
      autoBuy(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        let buys = !this.switchValue;
        console.log(buys)
        this.$http({
          method:'post',
          url:this.apiUrl.novelUserAutobuy,
          params:{autoBuy:buys},
          headers: {times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            this.switchValue = this.$store.state.userInfo.autoBuy= buys;
            if(!buys){
              Toast({
                message: '取消自动购买成功，付费章节将不自动扣除书币',
                position: 'bottom',
                duration: 2000
              });
            }
          }
        }).catch();
      }
    }
  }
</script>
<style>
  .mineList .mineListCon {
    padding: 0 20px;
  }

  .mineList .mineTop {
    width: 100%;
    height: 46px;
    line-height: 46px;
    padding-left: 15px;
    position: relative;
    left: 0;
    top: 0;
    background: #fff;
  }

  .mineList .mineTop .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    position: absolute;
    left: 15px;
    top: 13px;
  }

  .mineList .mineTop .title {
    font-size: 17px;
    font-weight: 700;
    width: 100px;
    height: 46px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    line-height: 46px;
    text-align: center;
  }

  .mineList .mineListCon .lineBg {
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png');
  }

  .mineList .mineListCon .userInfo {
    display: flex;
    width: 100%;
    /* align-items: center; */
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .mineList .mineListCon .userInfo .uesrLogo {
    width: 100px;
    padding-right: 16px;
    border-radius: 50%;
    overflow: hidden;
  }

  .mineList .mineListCon .userInfo .uesrLogo img {
    width: 100px;
    height: auto;
    vertical-align: middle;
  }

  .mineList .mineListCon .userInfo .userName .name {
    padding-left: 5px;
    line-height: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    font-size: 18px;
  }

  .mineList .mineListCon .userInfo .userName .vip {
    width: 105px;
  }

  .mineList .mineListCon .userInfo .userName .vip img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .mineList .mineListCon .others {
    font-size: 16px;
    color: #999;
  }

  .mineList .mineListCon .others .comRow {
    display: -webkit-flex;
    display: flex;
    line-height: 16px;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px solid #e0e0ee;
  }

  .mineList .mineListCon .others .comRow:last-child {
    border: none;
  }

  .mineList .mineListCon .others .comRow .leftImg {
    width: 20px;
    margin-right: 18px;
  }

  .mineList .mineListCon .others .comRow .leftImg img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .mineList .mineListCon .others .comRow .text {
    padding-right: 25px;
    vertical-align: middle;
  }

  .mineList .mineListCon .others .comRow .autobuy{
    flex: 1;
  }

  .mineList .mineListCon .others .comRow .btn {
    flex: 1;
    text-align: right;
  }

  .mineList .mineListCon .others .comRow .btn img {
    width: 54px;
    height: auto;
    vertical-align: middle;
  }

  .mineList .mineListCon .others .comRow .arrowBtn {
    flex: 1;
    text-align: right;
  }

  .mineList .mineListCon .others .comRow .arrowBtn img {
    width: 10px;
    height: auto;
    vertical-align: middle;
  }

  .userName {
    margin-left: 14px;
  }
  .weui-cell{
    padding: 0 !important;
  }
  .wv-switch{
    height: 25px !important;
  }
  .wv-switch .background, .wv-switch .thumb{
     height: 23px !important;
  }
  .weui-cell:before{
    border: none !important;
  }
  .quxiaoPic{
    width: 100%;
    padding: 0 15px;
    margin-top: 80px;
  }
  .quxiaoPic img{
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
</style>

