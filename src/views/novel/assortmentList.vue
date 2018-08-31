<template>
  <div class="assortmentList">
    <div class="assortmentCont">
      <div class="assortment">
        <div class="gender">
          <span @click="changeSex(item,index)" v-for="(item,index) in genderLists"
                :class="{'Active': genderIndex == index}">{{item==1?'男生':'女生'}}</span>
        </div>
        <div class="mold">
          <span @click="changeAssortment(items,index)" v-for="(items,index) in channelLists"
                :class="{'Active': channelIndex == index}">{{items.value}}</span>
          <!-- <span @click="show=!show"><img src="../../assets/img/bottomJT.png" alt=""></span>
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
          </transition> -->
        </div>
        <div class="completion">
          <span @click="changeType(item,index)" v-for="(item,index) in statusLists"
                :class="{'Active': typeIndex == index}">{{item==0?'全部':(item==1?'连载':'完结')}}</span>
        </div>
      </div>
      <div class="filament"></div>
      <div class="novelBooks">
        <div class="novelCon clearfloat" v-for="item in serachLists"  @click="goDetail(item.id,item.type)">
          <div class="novelLeft">
            <img :src="item.cover" alt="">
          </div>
          <div class="novelRight">
            <p class="bookname">{{item.title}}</p>
            <div class="bookDescribed">{{item.summary}}</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../../assets/img/man.png" alt=""></span>
                <span class="man">作者：{{item.author}}</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>{{item.state==0?'全部':(item.state==1?'连载':'完结')}}</span>
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
        cateGoryBookList: [],
        defaultId: 1,//小说id
        defaultType: '',//小说类型
        defaultState: '',//小说状态
        defaultPayState: '',//小说付费
        genderLists: [],//导航性别列表
        statusLists: [],//导航状态列表
        typeLists: [],//导航付费列表
        channelLists: [],//导航类型列表
        genderIndex: 0,//性别默认索引
        channelIndex: 0,//类型默认索引
        typeIndex: 0,//状态默认索引
        serachLists: [],
      }
    },
    created() {
      this.cateGoryList();
    },
    methods: {
      cateGoryList() {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiCategory,
          params: {gender: this.defaultId}
        }).then(res => {
          if (res.status == 200) {
            this.genderLists = res.data.genderList;
            this.statusLists = res.data.statusList;//小说状态
            this.typeLists = res.data.typeList;//付费状态
            this.channelLists = res.data.channelList;
            this.defaultId = res.data.genderList[0];//小说id
            this.defaultType = res.data.channelList[0].key;//小说类型
            this.defaultState = res.data.statusList[0];//小说状态
            this.defaultPayState = res.data.typeList[0];//小说付费
            this.othersNovelList(this.defaultType, this.defaultState, this.defaultPayState)
          }
        }).catch();
      },
      /*改变性别*/
      changeSex(item, index) {
        this.channelIndex = 0,//类型默认索引
          this.typeIndex = 0,//状态默认索引
          this.defaultId = item;
        this.genderIndex = index;
        this.cateGoryList();
      },
      /*改变小说类型*/
      changeAssortment(item, index) {
        this.defaultType = item.key;
        this.channelIndex = index;
        this.othersNovelList(this.defaultType, this.defaultState, this.defaultPayState)
      },
      /*切换小说状态*/
      changeType(item, index) {
        this.defaultState = item;
        this.typeIndex = index;
        this.othersNovelList(this.defaultType, this.defaultState, this.defaultPayState)
      },
      /*小说列表*/
      othersNovelList(category, status, type) {
        this.$http({
          method: 'get',
          url: this.apiUrl.novelApiList,
          params: {category: category, status: status, type: type},
        }).then(res => {
          if (res.status == 200) {
            this.serachLists = res.data.novelList.novelItemList;
          }
        }).catch()
      },
      goDetail(id, type) {
        this.$router.push({path: '/bookDetail', query: {id: id, type: type}});
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

  .assortmentList {
    color: #999;
    font-size: 14px;
  }

  .assortmentList .assortmentCont {
    padding: 0 15px;
  }

  .assortmentList .filament {
    margin-top: 16px;
    width: 100%;
    border-bottom: 1px solid #e0e0ee;
  }

  .assortmentList .assortment .gender {
    display: -webkit-flex;
    display: flex;
    line-height: 14px;
    padding: 16px 0 15px 0;
    margin-right: 4px;
  }

  .assortmentList .assortment .gender span {
    border: 1px solid transparent;
    border-radius: 14px;
    padding: 2px 6px;
  }

  .assortmentList .assortment .mold {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    line-height: 14px;
  }

  .assortmentList .assortment .mold span {
    border: 1px solid transparent;
    border-radius: 14px;
    padding: 2px 6px;
    margin-bottom: 15px;
    margin-right: 4px;
  }

  .assortmentList .assortment .mold img {
    width: 16px;
  }

  .assortmentList .assortment .completion {
    display: -webkit-flex;
    display: flex;
    line-height: 14px;
  }

  .assortmentList .assortment .completion span {
    padding: 2px 6px;
    border: 1px solid transparent;
    border-radius: 14px;
    margin-right: 4px;
  }

  .Active {
    border: 1px solid #ff4646 !important;
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

