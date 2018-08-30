<template>
  <div class="freeWeek">
    <div class="manTitle">
      <span class="kind">{{$attrs.title}}</span>
      <span class="timer"><span class="hour">04</span>时<span class="minute">04</span>分<span class="second">10</span>秒</span>
      <span class="moreList" @click="freeMoreList">更多></span>
    </div>
    <div class="freeNovel">
        <div class="novelWra">
          <div class="novelPic"><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1535427382&di=15e732d60f6bb96526b39ebb20e78dc3&src=http://img3.duitang.com/uploads/item/201605/14/20160514113942_R2vcm.jpeg" alt=""></div>
          <div class="novelName">我是书名</div>
          <div class="novelPrice">
            <span>￥99.99</span>
            <span>￥0</span>
          </div>
        </div>
        <div class="novelWra">
          <div class="novelPic"><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1535427382&di=15e732d60f6bb96526b39ebb20e78dc3&src=http://img3.duitang.com/uploads/item/201605/14/20160514113942_R2vcm.jpeg" alt=""></div>
          <div class="novelName">我是书名</div>
          <div class="novelPrice">
            <span>￥99.99</span>
            <span>￥0</span>
          </div>
        </div>
        <div class="novelWra">
          <div class="novelPic"><img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1535427382&di=15e732d60f6bb96526b39ebb20e78dc3&src=http://img3.duitang.com/uploads/item/201605/14/20160514113942_R2vcm.jpeg" alt=""></div>
          <div class="novelName">我是书名</div>
          <div class="novelPrice">
            <span>￥99.99</span>
            <span>￥0</span>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'freeWeek',
    data(){
      return {}
    },
    created(){},
    methods:{
      freeMoreList(){
        this.$router.push({path:'/moreList'});
      }
    }
  }
</script>
<style>
.freeWeek{
  padding: 0 15px;
  margin-bottom: 10px;
}
.freeWeek .manTitle{
   padding: 20px 0 20px 0;
}
.freeWeek .manTitle .timer{
  color: #999;
  font-size: 12px;
  margin-left: 10px;
  vertical-align: middle;
}
.freeWeek .manTitle .timer .hour{
  padding: 2px 3px;
  border-radius: 4px;
  background: #ff4646;
  color: #fff;
  margin-right: 3px;
}
.freeWeek .manTitle .timer .minute{
  padding: 2px 3px;
  border-radius: 4px;
  background: #000;
  color: #fff;
  margin-right: 3px;
  margin-left: 3px;
}
.freeWeek .manTitle .timer .second{
  padding: 2px 3px;
  border-radius: 4px;
  background:#000;
  color: #fff;
  margin-right: 3px;
  margin-left: 3px;
}
.freeWeek .manTitle .kind{
  font-size: 16px;
  font-weight: 700;
}
.freeWeek .manTitle .moreList{
  float: right;
  font-size: 14px;
  color: #999;
  vertical-align: middle;
}
.freeWeek .freeNovel{
  width: 100%;
  background-color: white;
  display: -webkit-flex;
	display: flex;
  flex-direction: row;
  justify-content:space-between;
}
.freeWeek .freeNovel .novelWra {
  width: 28%;
	vertical-align: middle;
	color: black;
	text-align: center;
}
.freeWeek .freeNovel .novelWra .novelPic{
  width: 100%;
}
.freeWeek .freeNovel .novelWra .novelPic img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.freeWeek .freeNovel .novelWra .novelName{
  line-height: 26px;
}
</style>

