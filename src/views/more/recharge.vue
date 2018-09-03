<template>
  <div class="recharge">
    <div class="rechargeTop">
      <div style="width:46px;height:100%;" @click="back"><img class="returnBack" src="../../assets/img/returnback.png"
                                                              alt=""></div>
      <div class="title">书币充值</div>
    </div>
    <div class="lineBg"></div>
    <div class="rechCont">
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
    <div class="layersBox" v-if="dialogFlag">
      <div class="layer"></div>
      <div class="dialog">
        <div class="close" @click="CancelPayment"><img src="../../assets/img/x.png" alt=""></div>
        <div class="title">充值</div>
        <div class="novelNumber">{{bookMoney}}书币</div>
        <div class="bookMoney">￥{{money}}</div>
        <div class="btn" @click="ConfirmPayment"><span>确认支付</span></div>
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
            bookNums:'5000+3000'
          },
          {
            src:require('../../assets/img/priceThree.png'),
            nums:100.00,
            bookNums:'10000+8000'
          },
          {
            src:require('../../assets/img/priceFour.png'),
            nums:200.00,
            bookNums:'20000+20000'
          },
        ],
        dialogFlag:false,
        money:'',
        bookMoney:''
      }
    },
    created() {
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
    position: fixed;
    left: 0;
    top: 46px;
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png');
  }

  .recharge .rechCont {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    padding-top: 51px;
    position: absolute;
    left: 0;
    top: 0;
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
    padding-top: 15px;
    font-size: 12px;
    line-height: 12px;
    color: #000;
    margin-top: 10px;
    padding: 0 8px;
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
    width: 80%;
    height: 220px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin:auto;
    background: #fff;
    border-radius: 5px;
    padding: 0 35px;
  }

  .recharge .layersBox .close{
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .recharge .layersBox .close img{
    width: 20px;
    height: auto;
    vertical-align: middle;
    padding-top: 5px;
    padding-left: 5px;
  }

  .recharge .layersBox .dialog .title{
    width: 100%;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #e0e0e0;
  }

  .recharge .layersBox .dialog .novelNumber{
    text-align: center;
    line-height: 40px;
    color: #999;
  }

  .recharge .layersBox .dialog .bookMoney{
    font-size: 45px;
    font-weight: 700;
    text-align: center;
  }
  .recharge .layersBox .dialog .btn{
    margin-top: 25px;
    width: 100%;
    text-align: center;
    color: #ff4646;
  }

  .btn span{
    padding: 5px 10px;
    border: 1px solid red;
    border-radius: 12px;
  }
</style>

