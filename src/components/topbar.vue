<template>
  <div class="comTop">
    <div class="topLogo">
      <img class="logo" src="../assets/img/novelLogo.png" alt="">
    </div>
    <div class="topBar">
      <div class="navBox" v-for="(item,index) in tabList">
        <router-link :to="{path:item.path,query:{id:item.id}}">
          <span class="icon icon-man">{{item.name}}</span>
        </router-link>
      </div>
    </div>
    <div class="search">
      <div class="searchBox">
        <input type="text">
        <div class="searchBtn">
          <img src="../assets/img/searchBtn1.png" alt=""><span>|</span><span>搜索</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topBar',
    data() {
      return {
        tabList:[
          {
            name:'男生',
            path:'/novel/manList',
            id:1
          },
          {
            name:'女生',
            path:'/novel/womenList',
            id:2
          },
          {
            name:'分类',
            path:'/novel/assortmentList',
            id:''
          },
          {
            name:'我的',
            path:'/novel/mineList',
            id:''
          },
        ],
      }
    },
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comTop {
    box-sizing: border-box;
    width: 100%;
    height: 115px;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 999;
    font-family: 'noto';
  }

  .comTop .topLogo {
    height: 46px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }

  .comTop .topLogo .logo {
    height: 40px;
    padding-top: 12px;
    padding-left: 12px;
  }

  a:-webkit-any-link {
    text-decoration: none;
    color: #000;
    display: block;
  }

  .comTop .topBar {
    box-sizing: border-box;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    background: #fff;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 116px;
    margin-right: 15px;
  }

  .comTop .topBar .navBox {
    flex: 1;
  }

  .comTop .search{
    width: 100%;
    height: 30px;
    padding: 0 15px;
    margin-top: 20px;
    position: relative;
  }

  .comTop .searchBox{
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    border-radius: 12px;
  }

  .comTop .searchBtn{
    width: 100px;
    height: 28px;;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
  }

  .comTop .searchBtn img{
    width: 15px;
    vertical-align: middle;
  }

  .comTop .searchBtn span{
     color: #999;
     font-size: 12px;
     padding: 0 3px;
   }

  .comTop .searchBox input{
    border-radius: 12px;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    background: #e0e0e0;
    border-style:none;
    outline: none;
  }

  .icon {
    display: block;
    width: 100%;
    text-align: center;
  }

  .icon-man {
    color: #999;
  }

  .router-link-active .icon-man {
    color: #fff;
    background: #ff4646;
    border-radius: 15px;
    font-size: 16px;
  }

  .icon-women {
    color: #999;
  }

  .router-link-active .icon-women {
    color: #fff;
    background: #ff4646;
    border-radius: 15px;
    font-size: 16px;
  }

  .icon-assortment {
    color: #999;
  }

  .router-link-active .icon-assortment {
    color: #fff;
    background: #ff4646;
    border-radius: 15px;
    font-size: 16px;
  }

  .icon-mine {
    color: #999;
  }

  .router-link-active .icon-mine {
    color: #fff;
    background: #ff4646;
    border-radius: 15px;
    font-size: 16px;
  }
</style>
