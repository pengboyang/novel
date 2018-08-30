<template>
  <div class="readNovel">
    <div class="topWra">
      <div class="topBaner">
        <img @click="back" class="reBtn" src="../../assets/img/returnback.png" alt="">
        <span class="title">完美世界</span>
      </div>
      <div class="setting">
        <img src="../../assets/img/big.png" alt="">
        <img src="../../assets/img/small.png" alt="">
        <img src="../../assets/img/white.png" alt="">
      </div>
      <div class="novelTitle">朝气蓬勃</div>
    </div>
    <div class="novelCont">
      <div class="novelText">我是内容</div>
      <div class="chapter" v-if="btnFlag">
        <div class="novelbtn" @click="">上一章</div>
        <div class="novelbtn" @click="">下一章</div>
      </div>
      <div class="payNovel">
        <div class="price">价格:<span class="gold">100</span>书币</div>
        <div class="balance">余额:<span class="gold">20</span>书币</div>
        <div class="payrule">
            <input id="radio" type="checkbox" v-model="checked" name="radio" value=""/>
            <span>自动购买下一章，以后不再提示</span>
        </div>
        <div class="ruletext">"您购买的是数字阅读产品，不支持7天无理由退货"</div>
        <div class="payBtn"><img src="../../assets/img/payBtn.png" alt=""></div>
        <div class="payVip"><div>开通超级VIP,全站书籍免费看></div></div>
      </div>
    </div>
    <div class="novelToast">
      <div class="btn">
        <img class="left" src="../../assets/img/menu.png" alt="">
        <img class="right" src="../../assets/img/novelInfo.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'readNovel',
    data(){
      return {
        btnFlag:true,
        checked: true,
      }
    },
    created(){},
    methods:{
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style>
.readNovel{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f0ece9;
  box-sizing: border-box;
  overflow-y: auto;
}
.readNovel .topWra{
  width: 100%;
  height: 110px;
  position: fixed;
  background: #f0ece9;
}
.readNovel .topWra .topBaner{
  width: 100%;
  height: 46px;
  line-height: 46px;
  position: fixed;
  left: 15px;
  top: 0;
}
.readNovel .topWra .topBaner .reBtn{
  width: 12px;
  height: auto;
  vertical-align: middle;
  display: inline-block; 
}
.readNovel .topWra .topBaner .title{
  font-size: 18px;
  font-weight: 700;
  vertical-align: middle;
  padding-left: 15px;
}
.readNovel .topWra .setting{
  height: 25px;
  position: fixed;
  right: 15px;
  top: 46px;
}
.readNovel .topWra .setting img{
  width: 32px;
  height: auto;
  vertical-align: middle;
}
.readNovel .topWra .novelTitle{
  width: 100%;
  line-height: 24px;
  position: fixed;
  left: 15px;
  top: 71px;
  font-size: 16px;
  font-weight: 700;
}
.readNovel  .novelCont{
  margin-top: 110px;
  padding: 0 15px;
}
 .readNovel  .novelCont .chapter{
  display: flex;
  justify-content: center;
  text-align: center;
  height: 28px;
  margin: 16px 0;
}
.readNovel  .novelCont .chapter .novelbtn{
  flex: 1;
  border-radius: 8px;
  margin: 0 36px;
  color: #fff;
  background: #999;
  line-height: 28px;
  font-size: 14px;
}
.readNovel .novelCont .payNovel{
  border-top: 1px solid #666;
  display: none;
}
.readNovel .novelCont .payNovel .price{
  padding: 25px 0 20px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
}
.readNovel .novelCont .payNovel .balance{
  line-height: 16px;
  font-size: 16px;
  font-weight: 700;
}
.readNovel .novelCont .payNovel .gold{
  font-weight: 500;
  color: #ff4646;
  padding-left: 15px;
}
.readNovel .novelCont .payNovel .payrule{
  padding-top: 20px;
}
.readNovel .novelCont .payNovel .payrule #radio{
  vertical-align: middle;
  width: 16px;
  height: 16px;
}
.readNovel .novelCont .payNovel .payrule span{
  padding-left: 5px;
  font-size: 12px;
  color: #999;
  letter-spacing: 2px;
}
.readNovel .novelCont .payNovel .ruletext{
  font-size: 12px; 
  color: #999;
  padding-top: 25px;
}
.readNovel .novelCont .payNovel .payBtn{
  width: 100%;
  height: 100px;
  position: relative;
}
.readNovel .novelCont .payNovel .payVip{
  width: 100%;
}
.readNovel .novelCont .payNovel .payVip div{
  text-align: center;
  font-size: 14px;
  font-weight: 700;
}
.readNovel .novelCont .payNovel .payBtn img{
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
.readNovel .novelToast{
  width: 100%;
  background: rgba(0,0,0,.8);
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 15px 15px;
}
.readNovel .novelToast .btn{
  width: 100%;
  height: 30px;
}
.readNovel .novelToast .btn .left{
  width: 82px;
  height: auto;
  vertical-align: middle;
  float: left;
}
.readNovel .novelToast .btn .right{
  width: 82px;
  height: auto;
  vertical-align: middle;
  float: right;
}
</style>

