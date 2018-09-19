<template>
  <div class="vip">
      <div class="vipTop">
          <div style="width:46px;height:100%;" @click="back"><img class="returnBack" src="../../assets/img/returnback.png"
                                                            alt=""></div>
          <div class="title">超级VIP</div>
          <div class="bgLine"></div>
      </div>
      <div class="vipwra">
        <div class="userInfo">
          <div class="uesrLogo"><img :src="imgPath" alt=""></div>
          <div class="userName">
            <div class="name">{{nickName}}</div>
            <div class="date">2018-03-10 VIP到期</div>
          </div>
        </div>
        <div class="package">
          <div class="titles">超级VIP套餐</div>
          <div class="selCom" v-for="(item,index) in priceList">
            <div class="selLeft">
              <div class="float" v-if="index==3"><img src="../../assets/img/selTujian.png" alt=""></div>
              <div class="top">{{item.date}}</div>
              <div class="bottom">{{item.average}}</div>
            </div>
            <div class="selRight" @click="exchange(item.price,item.date)"><img :src="item.url" alt=""></div>
          </div>
        </div>
        <div class="instruction">
          <p>蜜蜜有话要说</p>
          <div>1.大蜜小说超级VIP即买即生效</div>
          <div>2.为了保证权益，蜜蜜为您加送1天VIP，即从付费日期次日开始计算VIP剩余天数</div>
        </div>
        <div class="vipinfo">
          <p>超级VIP尊享特权</p>
          <div><img src="../../assets/img/vipBigbg.png" alt=""></div>
        </div>
      </div>
      <div class="layersBox" v-if="dialogFlag">
        <div class="layer"></div>
        <div class="dialog">
          <div class="close" @click="CancelPayment"><img src="../../assets/img/x.png" alt=""></div>
          <div class="title">充值</div>
          <div class="novelNumber">{{bookDay}}超级VIP会员</div>
          <div class="bookMoney">￥{{money}}</div>
          <div class="btn" @click="ConfirmPayment"><img src="../../assets/img/payBtnsss.png" alt=""></div>
        </div>
      </div>
  </div>
</template>
<script>
  export default{
    name:'supervip',
    data(){
      return{
        imgPath: require('../../assets/img/my-pic.png'),
        nickName: '',
        priceList:[
          {
            date:'30天',
            price:45,
            url:require('../../assets/img/selMoney1.png'),
            average:'1.5元/天'
          },
          {
            date:'90天',
            price:99,
            url:require('../../assets/img/selMoney2.png'),
            average:'1.1元/天'
          },
          {
            date:'180天',
            price:145,
            url:require('../../assets/img/selMoney3.png'),
            average:'0.8元/天'
          },
          {
            date:'365天',
            price:228,
            url:require('../../assets/img/selMoney4.png'),
            average:'每天6毛钱，全站免费一年'
          },
        ],
        dialogFlag:false,
        money:0,
        bookDay:0
      }
    },
    created(){
      this.imgPath = this.$store.state.userInfo.imgPath;
      this.nickName = this.$store.state.userInfo.nickName;
    },
    methods:{
      back() {
        this.$router.go(-1)
      },
      ConfirmPayment(){
        let _this=this;
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method: 'get',
          url: this.apiUrl.novelCoinOrders,
          headers:{times: times, sign: md5},
          params: {total_fee: this.money*100,type:1}
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
      },
      CancelPayment(){
        this.dialogFlag = false;
      },
      exchange(money,bookDay){
        this.dialogFlag = true;
        this.money=money;
        this.bookDay=bookDay
      },
    }
  }
</script>
<style>
.vip .vipTop {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 999;
  }

  .vip .vipTop .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    position: absolute;
    left: 15px;
    top: 13px;
  }

  .vip .vipTop .title {
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

  .vip .bgLine{
    width: 100%;
    height: 4px;
    background: #e0e0e0;
  }
  .vip .vipwra{
    padding: 50px 20px 50px 20px;
  }
  .vip .vipwra .userInfo {
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .vip .vipwra .userInfo .uesrLogo {
    width: 65px;
    border-radius: 50%;
    overflow: hidden;
  }

  .vip .vipwra .userInfo .uesrLogo img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .vip .vipwra .userInfo .userName{
    margin-left: 20px;
  }

  .vip .vipwra .userInfo .userName .name {
    line-height: 16px;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    font-size: 18px;
  }
  .vip .vipwra .userInfo .userName .date{
    font-size: 14px;
    color: #666;
  }
  .vip .vipwra .package .titles{
    text-align: center;
    color: #A06D1F;
    font-size: 16px;
  }
  .vip .vipwra .package .selCom{
    display: -webkit-flex;
    display: flex;
    text-align: center;
    align-items: center;
    margin-top: 15px;
  }
  .vip .vipwra .package .selCom .selLeft{
    position: relative;
  }
  .vip .vipwra .package .selCom .selLeft .top{
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }
  .vip .vipwra .package .selCom .selLeft .bottom{
    font-size: 12px;
    color: #999;
    text-align: left;
  }
  .vip .vipwra .package .selCom .selLeft .float{
    width: 24px;
    position: absolute;
    left: 50px;
    top:-5px;
  }
  .vip .vipwra .package .selCom .selLeft .float img{
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
  .vip .vipwra .package .selCom .selRight{
    flex: 1;
    text-align: right;
  }
  .vip .vipwra .package .selCom .selRight img{
    width: 54px;
    height: auto;
    vertical-align: middle;
  }
  .vip .vipwra .instruction{
    padding: 15px 0;
    border-top: 1px solid #e0e0e9;
    border-bottom: 1px solid #e0e0e9;
    margin-top: 25px;
    color: #999;
  }
  .vip .vipwra .instruction p{
    font-size: 14px;
  }
  .vip .vipwra .instruction div{
    font-size: 12px;
    padding-bottom: 5px;
  }
  .vip .vipwra .vipinfo p{
    text-align: center;
    line-height: 50px;
    color: #A06D1F;
  }
  .vip .vipwra .vipinfo div{
    width: 100%;
  }
  .vip .vipwra .vipinfo div img{
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
  
  .vip .layersBox{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2000;
  }

  .vip .layersBox .layer{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
  }

  .vip .layersBox .dialog{
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

  .vip .layersBox .close{
    width: 50px;
    height: 50px;
    position: absolute;
    left: 6px;
    top: 2px;
  }

  .vip .layersBox .close img{
    width: 25px;
    height: auto;
    vertical-align: middle;
    padding-top: 6px;
    padding-left: 10px;
  }

  .vip .layersBox .dialog .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid #e8e8e8;
  }

  .vip .layersBox .dialog .novelNumber{
    text-align: center;
    line-height: 42px;
    color: #999;
    font-size: 16px;
  }

  .vip .layersBox .dialog .bookMoney{
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    padding-top: 5px;
  }
  .vip .layersBox .dialog .btn{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

   .vip .layersBox .dialog .btn img{
     width: 100%;
     height: auto;
     vertical-align: middle;
   }

</style>

