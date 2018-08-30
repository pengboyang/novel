<template>
  <div class="assortmentList">
    <div class="assortmentCont">
      <div class="lineBg"></div>
      <div class="assortment">
        <div class="gender">
          <span class="active">男生</span>
          <span>女生</span>
        </div>
        <div class="mold">
          <span class="active">都市生活</span>
          <span>玄幻仙侠</span>
          <span>历史军事</span>
          <span>游戏科幻</span>
          <span @click="show=!show"><img src="../../assets/img/bottomJT.png" alt=""></span>
          <transition name="fade">
            <div v-if="show">
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
              <span>玄幻仙侠</span>
            </div>
          </transition>
        </div>
        <div class="completion">
          <span class="active">全部</span>
          <span>完结</span>
          <span>连载</span>
        </div>
      </div>
      <div class="filament"></div>
      <div class="novelBooks">
        <div class="novelCon clearfloat">
          <div class="novelLeft">
            <img src="../../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="novelRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
        <div class="novelCon clearfloat">
          <div class="novelLeft">
            <img src="../../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="novelRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
        <div class="novelCon clearfloat">
          <div class="novelLeft">
            <img src="../../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="novelRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
        <div class="novelCon clearfloat">
          <div class="novelLeft">
            <img src="../../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="novelRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
        <div class="novelCon clearfloat">
          <div class="novelLeft">
            <img src="../../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="novelRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
        <div class="novelCon clearfloat">
          <div class="novelLeft">
            <img src="../../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="novelRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <wv-loadmore type="line" text="这就是我的底线"></wv-loadmore>
  </div>
</template>
<script>
  export default {
    name: 'assortmentList',
    data() {
      return {
        show: false,
        isFirstEnter: false, // 是否第一次进入，默认false
      }
    },
    created() {
      this.isFirstEnter = true;
    },
    activated() {
      if (!this.$route.meta.isBack || this.isFirstEnter) {
        // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
      }
      // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
      this.$route.meta.isBack = false;
      // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
      this.isFirstEnter = false;
    },
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

  .assortmentList {
    color: #999;
    font-size: 14px;
  }

  .assortmentList .assortmentCont {
    padding: 0 15px;
  }

  .assortmentList .lineBg {
    width: 100%;
    height: 5px;
    background: url('../../assets/img/linebg.png');
  }

  .assortmentList .filament {
    margin-top: 16px;
    width: 100%;
    border-bottom: 1px solid #e0e0ee;
  }

  .assortmentList .assortment .gender {
    padding: 15px 0 15px 0;
  }

  .assortmentList .assortment .gender span {
    padding: 2px 6px;
  }

  .assortmentList .assortment .mold {
    padding: 0 0 15px 0;
  }

  .assortmentList .assortment .mold span {
    padding: 2px 6px;
  }

  .assortmentList .assortment .mold img {
    width: 16px;
  }

  .assortmentList .assortment .completion span {
    padding: 2px 6px;
  }

  .active {
    border: 1px solid #ff4646;
    border-radius: 14px;
    color: #ff4646;
  }

  .assortmentList .novelBooks {
    margin-top: 20px;
  }

  .assortmentList .novelBooks .novelCon {
    margin-bottom: 15px;
  }

  .assortmentList .novelBooks .novelCon .novelLeft {
    width: 28%;
    float: left;
  }

  .assortmentList .novelBooks .novelCon .novelLeft img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .assortmentList .novelBooks .novelCon .novelRight {
    width: 65%;
    float: right;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookname {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #000;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookDescribed {
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
    line-height: 22px;
    height: 70px;
    overflow: hidden;
    letter-spacing: 1px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo {
    font-size: 12px;
    color: #999;
    line-height: 12px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .described {
    float: right;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .described span {
    background: #e0e0e0;
    padding: 2px 10px;
    vertical-align: middle;
    border-radius: 10px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author {
    float: left;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author .icon {
    vertical-align: middle;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author .icon img {
    width: 8px;
  }

  .assortmentList .novelBooks .novelCon .novelRight .bookInfo .author .man {
    vertical-align: middle;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>

