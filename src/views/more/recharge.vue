<template>
  <div class="recharge">
    <div class="rechargeTop">
      <img @click="back" class="returnBtn" src="../../assets/img/returnback.png" alt="">
      <div class="title">书币充值</div>
    </div>
    <div class="lineBg"></div>
    <div class="rechCont">
      <div class="text">请选择充值金额</div>
      <div class="rechargePic clearfloat">
        <div class="wra clearfloat">
          <img src="../../assets/img/rechagePic.png" alt="">
        </div>
        <div class="wra clearfloat">
          <img src="../../assets/img/rechagePic.png" alt="">
        </div>
        <div class="wra clearfloat">
          <img src="../../assets/img/rechagePic.png" alt="">
        </div>
        <div class="wra clearfloat">
          <img src="../../assets/img/rechagePic.png" alt="">
        </div>
      </div>
      <div class="prompt">
        <div>温馨提示</div>
        <div>1、充值成功后将于10分钟内下发至您的帐户</div>
        <div>2、充值的书币不能赠送他人、不提现、不退款</div>
        <div>3、充值中遇到的问题，您可以至我们公众号下联系我发客服解决</div>
        <div>4、充值比例为1元=100书币</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'recharge',
    data(){
      return{}
    },
    created(){},
    methods:{
      back(){
        this.$router.go(-1)
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
.rechargeTop{
  width: 100%;
  height: 46px;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
}
.rechargeTop .returnBtn{
  width: 12px;
  height: auto;
  vertical-align: middle;
  position: absolute;
  left: 15px;
  top: 13px;
}
.rechargeTop .title{
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
 .recharge .lineBg{
  position: fixed;
  left: 0;
  top: 46px;
  width: 100%;
  height: 5px;
  background: url('../../assets/img/linebg.png');
}
.recharge .rechCont{
  padding: 0 15px;
  padding-top: 51px;
}
.recharge .rechCont .text{
  line-height: 50px;
  color: #666;
}
.recharge .rechCont .rechargePic .wra{
  margin-bottom: 25px;
}
.recharge .rechCont .rechargePic .wra:nth-child(odd){
  width: 46%;
  float: left;
}
.recharge .rechCont .rechargePic .wra:nth-child(even){
  width: 46%;
  float: right;
}
.recharge .rechCont .rechargePic .wra img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.prompt{
  margin-top: 40px;
  font-size: 14px;
  color: #999;
  line-height: 28px;
}
</style>

