<template>
  <div class="customService">
    <div class="serviceTop">
      <div style="width:46px;height:100%;" @click="back"><img class="returnBack" src="../../assets/img/returnback.png"
                                                              alt=""></div>
      <div class="title">联系客服</div>
    </div>
    <div class="serviceWra">
      <div class="lineBg"></div>
      <div class="serviceCon">
        <div class="serviceImg">
          <img src="../../assets/img/cusService.jpeg" alt="">
          <div class="title">大蜜小说</div>
        </div>
        <div class="rule">
          <div><span class="ruleLabel">工作时间：</span>周一至周五 10:00-19:00</div>
          <div><span class="ruleLabel">客服QQ：</span>3437733149</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'customService',
    data() {
      return {}
    },
    created() {
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  .customService{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  
  .customService .serviceTop {
    width: 100%;
    height: 46px;
    line-height: 46px;
    padding-left: 15px;
    position: relative;
    left: 0;
    top: 0;
    background: #fff;
  }

  .customService .serviceTop .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    position: absolute;
    left: 15px;
    top: 13px;
  }

  .customService .serviceTop .title {
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

  .customService .serviceWra {
    width: 100%;
    margin-bottom: 20px;
  }

  .customService .lineBg {
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png');
  }

  .customService .serviceCon{
    padding: 0 15px;
  }

  .customService .serviceCon .serviceImg {
    width: 100%;
    height: 250px;
    position: relative;
  }

  .customService .serviceCon .serviceImg img {
    width: 45%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .customService .serviceCon .serviceImg .title {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px;
    margin: auto;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }

  .customService .serviceCon .rule {
    line-height: 40px;
    color: #999;
    font-size: 16px;
  }

  .customService .serviceCon .ruleLabel {
    display: inline-block;
    width: 80px;
  }

  .customService .serviceCon .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    vertical-align: middle;
  }
</style>

