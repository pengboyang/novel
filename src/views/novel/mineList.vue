<template>
  <div class="mineList">
    <div class="mineListCon">
        <div class="lineBg"></div>
        <div class="userInfo">
          <div class="uesrLogo"><img src="../../assets/img/my-pic.png" alt=""></div>
          <div class="userName">
            <div class="name">微信用户名</div>
            <div class="vip"><img src="../../assets/img/vip.png" alt=""></div>
          </div>
        </div>
        <div class="others">
          <div class="comRow">
            <span class="leftImg"><img src="../../assets/img/bookGold.png" alt=""></span>
            <span class="text">余额</span>
            <span class="text"><span class="gold">100</span>书币</span>
            <div class="btn">
              <img src="../../assets/img/recharge.png" alt="">
            </div>
          </div>
          <div class="comRow">
            <span class="leftImg"><img src="../../assets/img/kefu.png" alt=""></span>
            <span class="text">联系客服</span>
            <div class="arrowBtn">
              <img src="../../assets/img/rightJT.png" alt="">
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
  data () {
    return {
    }
  },
}
</script>
<style>
.mineList .mineListCon{
  padding: 0 20px;
}
.mineList .mineListCon .lineBg{
  width: 100%;
  height: 5px;
  background: url('../../assets/img/linebg.png');
}

.mineList .mineListCon .userInfo {
  display: flex;
  width: 100%;
  height: 56px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.mineList .mineListCon .userInfo .uesrLogo{
  width: 56px;
  padding-right: 16px;
}
.mineList .mineListCon .userInfo .uesrLogo img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.mineList .mineListCon .userInfo .userName .name{
  padding-left: 5px;
  line-height: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 700;
}
.mineList .mineListCon .userInfo .userName .vip{
  width: 110px;
}
.mineList .mineListCon .userInfo .userName .vip img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.mineList .mineListCon .others {
  font-size: 16px;
  color: #999;
}
.mineList .mineListCon .others .comRow{
  display: -webkit-flex;
  display: flex;
  line-height: 16px;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #e0e0ee;
}
.mineList .mineListCon .others .comRow:last-child{
  border: none;
}
.mineList .mineListCon .others .comRow .leftImg{
  width: 20px;
  padding-right: 18px;
}
.mineList .mineListCon .others .comRow .leftImg img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.mineList .mineListCon .others .comRow .text{
  padding-right: 25px;
  vertical-align: middle;
}
.mineList .mineListCon .others .comRow .btn{
  flex: 1;
  text-align: right;
}
.mineList .mineListCon .others .comRow .btn img{
  width: 50px;
  height: auto;
  vertical-align: middle;
}
.mineList .mineListCon .others .comRow .arrowBtn{
  flex: 1;
  text-align: right;
}
.mineList .mineListCon .others .comRow .arrowBtn img{
  width: 10px;
  height: auto;
  vertical-align: middle;
}
</style>

