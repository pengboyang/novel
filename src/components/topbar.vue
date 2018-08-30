<template>
    <div class="comTop">
        <div class="topLogo">
            <img class="logo" src="../assets/img/novelLogo.png" alt="">
        </div>
        <div class="topBar">
            <div class="navBox">
                <router-link :to="{path:'/novel/manList', query:{id:1}}">
                    <span class="icon icon-man">男生</span>
                </router-link>
            </div>
            <div class="navBox">
                <router-link :to="{path:'/novel/womenList', query:{id:2}}">
                    <span class="icon icon-women">女生</span>
                </router-link>
            </div>
            <div class="navBox">
                <router-link to="/novel/assortmentList">
                    <span class="icon icon-assortment">分类</span>
                </router-link>
            </div>
            <div class="navBox">
                <router-link to="/novel/mineList">
                    <span class="icon icon-mine">我的</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'topBar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .comTop{
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        position: fixed;
        left: 0;
        top: 0;
        background: #fff;
        z-index: 999;
        font-family: 'noto';
    }
    .topLogo{
        width: 100%;
        height: 46px;
    }
    .topLogo .logo{
        height: 42px;
        padding-top: 12px;
        padding-left: 8px;
    }
    a:-webkit-any-link {
        text-decoration: none;
        color: #000;
        display: block;
    }
    .topBar {
        box-sizing: border-box;
        display: -webkit-flex;
        display: flex;
        justify-content: space-around;
        width: 100%;
        background: #fff;
        padding: 0 75px 0 75px;
        font-size: 14px;
        margin-top: 10px;
    }
    .topBar .navBox{
        width: 52.5px;
        height: 24px;
        line-height: 24px;
    }
    .icon {
        display: block;
        width: 100%;
        text-align: center;
    }
    .icon-man {
        color: #999;
    }
    .router-link-active .icon-man{
      color: #fff;
      background: #ff4646;
      border-radius: 15px;
      font-size: 16px;
    }
    .icon-women {
       color: #999;
    }
    .router-link-active .icon-women{
      color: #fff;
      background: #ff4646;
      border-radius: 15px;
      font-size: 16px;
    }
    .icon-assortment {
       color: #999;
    }
    .router-link-active .icon-assortment{
      color: #fff;
      background: #ff4646;
      border-radius: 15px;
      font-size: 16px;
    }
    .icon-mine {
       color: #999;
    }
    .router-link-active .icon-mine{
      color: #fff;
      background: #ff4646;
      border-radius: 15px;
      font-size: 16px;
    }
</style>
