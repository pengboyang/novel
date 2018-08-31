<template>
  <div class="mineList">
    <div class="mineListCon">
      <div class="lineBg"></div>
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
          <span class="text"><span class="gold">0</span>书币</span>
          <div class="btn" @click="goRecharge">
            <img src="../../assets/img/recharge.png" alt="">
          </div>
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
</template>
<script>
  export default {
    data() {
      return {
        isFirstEnter: false, // 是否第一次进入，默认false
        imgPath: require('../../assets/img/my-pic.png'),
        nickName: ''
      }
    },
    created() {
      if(!this.$store.state.userInfo.imgPath){
        this.getCode();
        if (this.$store.state.userCode) {
          this.authorlogin();
        } else {
          this.getUser();
        }
      }else{
        this.imgPath=this.$store.state.userInfo.imgPath;
        this.nickName=this.$store.state.userInfo.nickName;
      }
    },
    methods: {
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
          } else if (data.code == 3) {
            location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx30e74a0a5ca3c0bd&redirect_uri=http%3a%2f%2fs.55duanzi.com%2fnovel%2fdist%2findex.html%23%2fnovel%2fmineList&response_type=code&scope=snsapi_userinfo&state=user#wechat_redirect';
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
          console.log(res);
          var data = res.data;
          if (data.code == 1) {
            this.imgPath =this.$store.state.userInfo.imgPath= data.imagePath;
            this.nickName =this.$store.state.userInfo.nickName= data.nickName;
          }
        }).catch(error => {
          console.log(error);
        });
      },
    }
  }
</script>
<style>
  .mineList .mineListCon {
    padding: 0 20px;
  }

  .mineList .mineListCon .lineBg {
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png');
  }

  .mineList .mineListCon .userInfo {
    display: flex;
    width: 100%;
    /*align-items: center;*/
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
</style>

