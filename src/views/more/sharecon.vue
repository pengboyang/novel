<template>
  <div id="content">
    <div class="returnBack" @click="back"><img src="../../assets/img/returnback.png" alt=""></div>
    <div class="top"><img src="../../assets/img/laqitop.jpg" alt=""><div class="clickBtn" @click="showShareBox"></div></div>
    <div class="reward">
      <div class="huojiangNums">已有<span>1000</span>位好友被成功邀请,已瓜分<span>30000</span>书币</div>
      <div class="rewardWra">
          <img src="../../assets/img/laxin03.jpg" alt="">
          <div class="loopWra">
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="info">
                        <div class="pic"><img src="../../assets/img/touxiang1.png" alt=""></div>
                        <div class="name">小糊涂仙</div>
                        <div class="fen">+130</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="info">
                        <div class="pic"><img src="../../assets/img/touxiang2.png" alt=""></div>
                        <div class="name">小糊涂仙er</div>
                        <div class="fen">+150</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="info">
                        <div class="pic"><img src="../../assets/img/touxiang3.png" alt=""></div>
                        <div class="name">小涂仙</div>
                        <div class="fen">+140</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="info">
                        <div class="pic"><img src="../../assets/img/touxiang4.png" alt=""></div>
                        <div class="name">小糊</div>
                        <div class="fen">+100</div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="info">
                        <div class="pic"><img src="../../assets/img/touxiang5.png" alt=""></div>
                        <div class="name">糊涂仙</div>
                        <div class="fen">+140</div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <!-- <div class="inviteCode">
      <div class="inviteCodeWra">
        <img src="../../assets/img/laxin02.jpg" alt="">
        <div class="inpWra">
          <div class="tit"><img src="../../assets/img/huodong.png" alt=""></div>
          <div class="inpconmen">
            <div class="inpLable">输入邀请码</div>
            <div class="inpText"><input type="text"></div>
            <div class="inpBtn"><img src="../../assets/img/inpduihuan.png" alt=""></div>
          </div>
          <div class="inpconmen">
            <div class="inpLable">我的邀请码</div>
            <div class="inpTextDiv">ABNUGUGU</div>
          </div>
        </div>
      </div>
    </div> -->
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
  export default{
    name:'sharecon',
    data(){
      return{
        shareLc : false,
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
    methods:{
      back() {
        this.$router.go(-1)
      },
      showShareBox(){
        this.shareLc = true;
      },
      hideShareBox(){
        this.shareLc = false;
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
    #content .reward .huojiangNums{
      background: transparent;
      text-align: center;
      background: #ffebb9;
      padding: 10px 0;
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
      height: 22px;
      text-align: center;
    }
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpLable{
      font-size: 15px;
      font-weight: 700;
    } 
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpTextDiv{
      width: 50%;
      height: 22px;
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
    }
    #content .inviteCode .inviteCodeWra .inpWra .inpconmen .inpBtn img{
      width: 50px;
      height: auto;
      vertical-align: top;
    }
    #content .inviteCode .inviteCodeWra img{
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    #content .instruction{
      width: 100%;
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

