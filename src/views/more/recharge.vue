<template>
  <div class="recharge">
    <div class="rechargeTop">
      <div style="width:46px;height:100%;" @click="back"><img class="returnBack" src="../../assets/img/returnback.png"
                                                              alt=""></div>
      <div class="title">书币充值</div>
    </div>
    <div class="rechCont">
      <div class="lineBg"></div>
      <div class="wra">
        <div class="text">请选择充值金额</div>
        <div class="rechargePic clearfloat">
          <div class="wra clearfloat" v-for="(item,index) in priceItems" @click="exchange(index,item.nums,item.bookNums)" :class="{picActive: activeIndex == index}">
            <div v-if="index==0">
              <div class="price">￥{{item.nums}}.00</div>
              <div class="firstPrice"><div class="nums">{{item.bookNums}}书币</div><div class="present"><img :src="item.src" alt=""></div></div>
            </div>
            <div v-else>
              <div class="price">￥{{item.nums}}.00</div>
              <div class="bookNums">{{item.bookNums}}书币</div>
              <div class="othersPrice"><img :src="item.src"  alt=""></div>
            </div>
          </div>
        </div> 
        <div class="prompt">
          <div>温馨提示</div>
          <div>1、充值成功后将于10分钟内下发至您的帐户</div>
          <div>2、充值的书币不能赠送他人、不提现、不退款</div>
          <div>3、充值中遇到的问题，您可以至我们公众号下联系我方客服解决</div>
          <div>4、充值比例为1元=100书币</div>
        </div>
      </div>
    </div>
    <div class="layersBox" v-if="dialogFlag">
      <div class="layer"></div>
      <div class="dialog">
        <div class="close" @click="CancelPayment"><img src="../../assets/img/x.png" alt=""></div>
        <div class="title">充值</div>
        <div class="novelNumber">￥{{money}}</div>
        <div class="bookMoney">{{bookMoney}}书币</div>
        <div class="btn" @click="ConfirmPayment"><img src="../../assets/img/payBtnsss.png" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'recharge',
    data() {
      return {
        activeIndex:-1,
        priceItems:[
          {
            src:require('../../assets/img/priceOne.png'),
            nums:10.00,
            bookNums:'1000'
          },
          {
            src:require('../../assets/img/priceTwo.png'),
            nums:50.00,
            bookNums:'8000'
          },
          {
            src:require('../../assets/img/priceThree.png'),
            nums:100.00,
            bookNums:'18000'
          },
          {
            src:require('../../assets/img/priceFour.png'),
            nums:200.00,
            bookNums:'40000'
          },
        ],
        dialogFlag:false,
        money:'',
        bookMoney:''
      }
    },
    created() {
      console.log(this);
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      exchange(index,nums,boknums){
        this.money=nums;
        this.bookMoney=boknums;
        this.dialogFlag = true;
        this.activeIndex = index;
      },
      CancelPayment(){
        this.activeIndex = -1;
        this.dialogFlag = false;
      },
      ConfirmPayment(){
        let _this=this;
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method: 'get',
          url: this.apiUrl.novelCoinOrders,
          headers:{times: times, sign: md5},
          params: {total_fee: this.money*100}
        }).then(res => {
          if (res.status == 200) {
            console.log(res);
            var data=res.data;
            if(data.code=='SUCCESS'){
              console.log(data.timeStamp);
              wx.chooseWXPay({
                timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: data.paySign, // 支付签名
                success: function (res) {
                  // _this.$router.push({path: '/novel/mineList'});
                  _this.$router.go(-1)
                }
              });
            }
          }
        }).catch();
        this.activeIndex = -1;
        this.dialogFlag = false;
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

  .recharge{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: auto;
    overflow-y: auto;
    background: #fff;
  }

  .rechargeTop {
    width: 100%;
    height: 46px;
    line-height: 46px;
    padding-left: 15px;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 999;
  }

  .rechargeTop .returnBack{
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    vertical-align: middle;
  }

  .rechargeTop .title {
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

  .recharge .lineBg {
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png');
  }

  .recharge .rechCont {
    width: 100%;
    height: 100%;
    padding-top: 51px;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
  }

   .recharge .rechCont .wra{
    padding: 0 15px;
   }

  .recharge .rechCont .text {
    line-height: 50px;
    color: #666;
  }

  .recharge .rechCont .rechargePic .wra {
    margin-bottom: 25px;
    border: 1px solid #999;
    border-radius: 12px;
    text-align: center;
  }

  .recharge .rechCont .rechargePic .wra{
    width: 45%;
    height: 90px;;
  }

  .recharge .rechCont .rechargePic .wra .bookNums{
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 5px;
  }

  .recharge .rechCont .rechargePic .wra .othersPrice{
    width: 100%;
    line-height: 0;
  }

  .recharge .rechCont .rechargePic .wra .othersPrice img{
    width: 80px;
    height: auto;
    vertical-align: middle;
  }

  .recharge .rechCont .rechargePic .wra:nth-child(odd) {
    float: left;
  }

  .recharge .rechCont .rechargePic .wra:nth-child(even) {
    float: right;
  }

  .recharge .rechCont .rechargePic .wra .price{
    font-size: 24px;
    margin-top: 10px;
  }

  .recharge .rechCont .rechargePic .wra .firstPrice{
    font-size: 12px;
    line-height: 12px;
    color: #000;
    margin-top: 10px;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around
  }
 
  .recharge .rechCont .rechargePic .wra .firstPrice .present{
    display: inline-block;
    width: 62px;
    margin-top: -1px;
  }

  .recharge .rechCont .rechargePic .wra .firstPrice .present img{
    width: 100%;
    vertical-align: middle;
  }

  .recharge .prompt {
    margin-top: 40px;
    font-size: 14px;
    color: #999;
    line-height: 28px;
  }

  .picActive{
    border: 1px solid #ff4646 !important;
    background: rgb(255,192,203,.3);
  }

  .recharge .layersBox{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2000;
  }

  .recharge .layersBox .layer{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
  }

  .recharge .layersBox .dialog{
    width: 65%;
    height: 210px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin:auto;
    background: #fff;
    border-radius: 12px;
  }

  .recharge .layersBox .close{
    width: 50px;
    height: 50px;
    position: absolute;
    left: 6px;
    top: 2px;
  }

  .recharge .layersBox .close img{
    width: 25px;
    height: auto;
    vertical-align: middle;
    padding-top: 6px;
    padding-left: 10px;
  }

  .recharge .layersBox .dialog .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #e8e8e8;
  }

  .recharge .layersBox .dialog .novelNumber{
    text-align: center;
    line-height: 42px;
    color: #999;
    font-size: 16px;
  }

  .recharge .layersBox .dialog .bookMoney{
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    padding-top: 5px;
  }
  .recharge .layersBox .dialog .btn{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

   .recharge .layersBox .dialog .btn img{
     width: 100%;
     height: auto;
     vertical-align: middle;
   }

</style>

