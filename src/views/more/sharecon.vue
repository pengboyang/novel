<template>
  <div id="content">
    <div class="returnBack" @click="back"><img src="../../assets/img/shareback.png" alt=""></div>
    <div class="top"><img src="../../assets/img/laqitop.jpg" alt=""><div class="clickBtn" @click="showShareBox"></div></div>
    <div class="reward">
      <div class="modelBox"></div>
      <div class="huojiangNums">已有<span>1000</span>位好友被成功邀请,已瓜分<span>30000</span>书币</div>
      <div class="rewardWra">
          <img src="../../assets/img/laxin03.jpg" alt="">
          <div class="loopWra">
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in winnersList">
                      <div class="info">
                        <div class="pic"><img :src="item.src" alt=""></div>
                        <div class="name">{{item.name}}</div>
                        <div class="fen">+{{item.bounds}}</div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="inviteCode">
      <div class="inviteCodeWra">
        <img src="../../assets/img/laxin02.jpg" alt="">
        <div class="inpWra">
          <div class="tit"><img src="../../assets/img/huodong.png" alt=""></div>
          <div class="inpconmen">
            <div class="inpLable">输入邀请码</div>
            <div class="inpText"><input id="inputId" @click="gotoView" type="text" v-model="inputCode"></div>
            <div @click="exchangeCode" class="inpBtn"><img src="../../assets/img/inpduihuan.png" alt=""></div>
          </div>
          <div class="inpconmen">
            <div class="inpLable">我的邀请码</div>
            <div class="inpTextDiv">{{myInviteCode}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="instruction">
      <img src="../../assets/img/laxin04.jpg" alt="">
    </div>
    <div class="hideBox" v-if="shareLc" @click="hideShareBox">
      <img src="../../assets/img/shareyindao.png" alt="">
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import { Toast } from 'mint-ui';
  export default{
    name:'sharecon',
    data(){
      return{
        shareLc : false,
        myInviteCode: '',
        inputCode:'',
        erweimaLink:'',
        winnersList:[
          {
            src:require('../../assets/img/touxiang1.png'),
            bounds:180,
            name:'听风逝夜'
          },
          {
            src:require('../../assets/img/touxiang2.png'),
            bounds:210,
            name:'残影君醉相思浓'
          },
          {
            src:require('../../assets/img/touxiang3.png'),
            bounds:120,
            name:'〆醉枫染墨ゾ'
          },
          {
            src:require('../../assets/img/touxiang4.png'),
            bounds:150,
            name:'〆灼灼其华'
          },
          {
            src:require('../../assets/img/touxiang5.png'),
            bounds:120,
            name:'遗失ぜ的ァ美好'
          },
          {
            src:require('../../assets/img/fucklooptx1.png'),
            bounds:90,
            name:'失去后才懂得珍惜i'
          },
          {
            src:require('../../assets/img/fucklooptx2.png'),
            bounds:180,
            name:'无懈的~坚定~'
          },
          {
            src:require('../../assets/img/fucklooptx3.png'),
            bounds:150,
            name:'趁我还在趁我还爱'
          },
          {
            src:require('../../assets/img/fucklooptx4.png'),
            bounds:280,
            name:'.丄错车。'
          },
          {
            src:require('../../assets/img/fucklooptx5.png'),
            bounds:210,
            name:'我一路向北、无怨无悔'
          },
          {
            src:require('../../assets/img/fucklooptx6.png'),
            bounds:120,
            name:'爱wo别走……'
          },
          {
            src:require('../../assets/img/fucklooptx7.png'),
            bounds:90,
            name:'风过、妆花'
          },
          {
            src:require('../../assets/img/fucklooptx8.png'),
            bounds:60,
            name:'蹲街ˉ哼情歌'
          },
          {
            src:require('../../assets/img/fucklooptx9.png'),
            bounds:150,
            name:'换个方式゛拥抱你'
          },
          {
            src:require('../../assets/img/fucklooptx10.png'),
            bounds:120,
            name:'夕阳美不过你的脸'
          },
          {
            src:require('../../assets/img/fucklooptx11.png'),
            bounds:180,
            name:'笑着唱情歌'
          },
          {
            src:require('../../assets/img/fucklooptx12.png'),
            bounds:210,
            name:'独家等待'
          },
          {
            src:require('../../assets/img/fucklooptx13.png'),
            bounds:120,
            name:'情与老歌'
          },
          {
            src:require('../../assets/img/fucklooptx14.png'),
            bounds:90,
            name:'小糊几世轮回§涂仙'
          },
          {
            src:require('../../assets/img/fucklooptx15.png'),
            bounds:150,
            name:'事在人为'
          },
          {
            src:require('../../assets/img/fucklooptx16.png'),
            bounds:120,
            name:'闭上眼睛爱。'
          },
          {
            src:require('../../assets/img/fucklooptx17.png'),
            bounds:180,
            name:'两袖清风口袋空空°'
          },
          {
            src:require('../../assets/img/fucklooptx18.png'),
            bounds:90,
            name:'じòぴé一份思念'
          },
          {
            src:require('../../assets/img/fucklooptx19.png'),
            bounds:60,
            name:'学霸配学渣天生一对@'
          },
          {
            src:require('../../assets/img/fucklooptx20.png'),
            bounds:120,
            name:'命丶诠释着幸福'
          },
          {
            src:require('../../assets/img/fucklooptx21.png'),
            bounds:180,
            name:'匿名用户~'
          },
          {
            src:require('../../assets/img/fucklooptx22.png'),
            bounds:210,
            name:'↘梦o.く呓↙'
          },
          {
            src:require('../../assets/img/fucklooptx23.png'),
            bounds:90,
            name:'ミ﹏单身的理由'
          },
          {
            src:require('../../assets/img/fucklooptx24.png'),
            bounds:150,
            name:'收集你的回忆'
          },
          {
            src:require('../../assets/img/fucklooptx25.png'),
            bounds:180,
            name:'寂寞、点着烟'
          },
        ]
      }
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        direction : 'vertical',
        slidesPerView : 3,
        loop: true,
        observer:true,
        observeParents:true,
      })
    },
    created(){
      this.getcode();
    },
    methods:{
      back() {
        this.$router.go(-1)
      },
      showShareBox(){
        this.shareLc = true;
      },
      hideShareBox(){
        this.shareLc = false;
      },
      getcode(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'get',
          url:this.apiUrl.novelUserGetQrcode,
          params:{},
          headers: {times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            this.myInviteCode = res.data.inviteCode;
            this.erweimaLink = res.data.qrcode;
            let _this=this;
            this.$wxConfig({
              title:`您的好友${_this.$store.state.userInfo.nickName||'DA蜜'}邀请您来大蜜小说一起抢百万现金红包~`,
              // desc:this.novelStr,
              link:'http://s.55duanzi.com/novel/static/shareindex.html'+'?toUrl='+ _this.erweimaLink,
              imgUrl:'http://s.55duanzi.com/novel/static/img/sharelogo.jpg'
            });
          }
        }).catch()
      },
      exchangeCode(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'get',
          url:this.apiUrl.novelUserCodeExchange,
          params:{inviteCode:this.inputCode},
          headers: {times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            this.inputCode = ''
            if(res.data.code==1){
              Toast({
                message: res.data.msg,
                position: 'center',
                duration: 2000
              });
            }else if(res.data.code==2){
              Toast({
                message: res.data.msg,
                position: 'center',
                duration: 2000
              });
            }
          }
        }).catch();
      },
      gotoView(){  
        document.querySelector('#inputId').scrollIntoView();
      }
    }
  }
</script>
<style>
    #content{
      overflow-x: auto;
      overflow-y: auto;
    }
    #content .returnBack{
      width: 50px;
      height: 50px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 999;
      text-align: center;
      line-height: 50px;
    }
    #content .returnBack img{
      width: 15px;
      height: auto;
      vertical-align: middle;
    }
    /* #content .contentTop {
      width: 100%;
      height: 46px;
      line-height: 46px;
      padding-left: 15px;
      position: fixed;
      left: 0;
      top: 0;
      background: #fff;
      z-index: 999;
      background: #ffebb9;
    }
    #content .contentTop .returnBack {
      width: 12px;
      height: auto;
      vertical-align: middle;
      position: absolute;
      left: 15px;
      top: 13px;
    }
    #content .contentTop .title {
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
    } */
    #content .top{
      width: 100%;
      position: relative;
    }
    #content .top img{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    #content .top .clickBtn{
      width: 100%;
      height: 20%;
      background: transparent;
      position: absolute;
      left: 0;
      bottom: 12%;
    }
    #content .reward{
      position: relative;
    }
    #content .reward .huojiangNums{
      background: transparent;
      text-align: center;
      background: #ffebb9;
      padding: 10px 0;
    }
    #content .reward .modelBox{
      position: absolute;
      left: 0;
      top: 0;
      background: transparent;
      width: 100%;
      height: 100%;
      z-index: 999;
    }
    #content .reward .huojiangNums span{
      color: #ca1117;
    }
    #content .reward .rewardWra{
      width: 100%;
      position: relative;
    }
    #content .reward .rewardWra img{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    #content .reward .rewardWra .loopWra{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
    }
    #content .reward .rewardWra .loopWra .swiper-container{
      width: 100%;
      height: 100%;
    }
    #content .reward .rewardWra .loopWra .swiper-container .info{
      display: flex;
      display: -webkit-flex;
      align-items: center;
      padding: 10px 20px;
    }
    #content .reward .rewardWra .loopWra .swiper-container .info .pic img{
      width: 50px;
    }
    #content .reward .rewardWra .loopWra .swiper-container .info .name{
      margin-left: 15px;
    }
    #content .reward .rewardWra .loopWra .swiper-container .info .fen{
      color: #ca1117;
      flex: 1;
      text-align: right;
    }
    #content .inviteCode{
      position: relative;
    }
    #content .inviteCode .inviteCodeWra{
      width: 100%;
      position: relative;
    }
    #content .inviteCode .inviteCodeWra .inpWra{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: auto;
    }
    #content .inviteCode .inviteCodeWra .inpWra .tit{
      text-align: center;
      padding-top: 20px;
    }
    #content .inviteCode .inviteCodeWra .inpWra .tit img{
      width: 90px;
      height: auto;
      vertical-align: middle;
    }
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen{
      display: -webkit-flex;
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin-top: 14px;
    }
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpText{
      width: 50%;
      height: 26px;
      text-align: center;
      font-size: 14px;
    }
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpLable{
      font-size: 16px;
      font-weight: 700;
    } 
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpTextDiv{
      width: 50%;
      text-align: center;
      color: #ca1117;
    }
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpText input{
      width: 78%;
      height: 100%;
      border: none;
      outline: none;
      background: #ca1117;
      border-radius: 8px;
      vertical-align: top;
      text-align: center;
      color: #fff;
      user-select: auto;
    }
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpBtn img{
      width: 60px;
      height: auto;
      vertical-align: middle;
    }
    #content .inviteCode .inviteCodeWra img{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    #content .instruction{
      width: 100%;
      position: relative;
    }
    #content .instruction img{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    #content .hideBox{
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      bottom:0;
      z-index: 999;
      background: rgba(0,0,0,.8);
      text-align: center;
    }
    #content .hideBox img{
      width: 80%;
    }
</style>

