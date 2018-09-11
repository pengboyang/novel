<template>
  <div class="bookShelf">
    <div class="shelfTop">
      <div style="width:46px;height:100%;" @click="routeBack"><img class="returnBack" src="../../assets/img/returnback.png" alt=""></div>
      <div class="topTitle">我的书架</div>
    </div>
    <div class="shelfCont">
      <div class="shelfBtn">
        <div class="editBtn" v-if="shelfBtnFlag" @click="editShelf"><img src="../../assets/img/bianjishujia.png" alt=""></div>
        <div class="chooseBtn" v-else>
          <div @click='checkedAll'><img src="../../assets/img/quanxuan.png" alt=""></div>
          <div @click="chooseBack"><img src="../../assets/img/wancheng.png" alt=""></div>
        </div>
      </div>
      <div class="shelfWra">
        <div class="novelWra" @click="choseEditBook(item.id,item.title)" v-for="item in bookShelfLists">
          <div class="novelPic">
            <img :src="item.cover" alt="">
            <div class="choseBox" v-if="!shelfBtnFlag">
              <div class="check"><img v-if="chooseBookList.indexOf(item.id)>=0" src="../../assets/img/check.png" alt=""></div>
            </div>
          </div>
          <div class="novelName">{{item.title}}</div>
        </div>
        <div class="novelWra" @click="goMan" v-if="shelfBtnFlag">
          <div class="novelPic"><img src="../../assets/img/kongbaibook.png" alt=""></div>
          <div class="novelName">去书城逛逛</div>
        </div>
      </div>
    </div>
    <div class="shelfBottom" v-if="!shelfBtnFlag" @click="delateBooks">
      删除{{numbers}}
    </div>
  </div>
</template>
<script>
  export default{
    name:'bookShelf',
    data(){
      return{
        shelfBtnFlag:true,
        chooseBtn:false,
        bookShelfLists:[],
        chooseBookList:[],
        numbers:'(0)',
        // 初始化全选按钮, 默认不选
        isCheckedAll: false,
        allSelect:false,
      }
    },
    created(){
      this.bookShelfList();
    },
    methods:{
      routeBack() {
        this.$router.go(-1)
      },
      goMan(){
        this.$router.push({path:'/novel/manList',query:{id:1}});
      },
      editShelf(){
        this.shelfBtnFlag = false;
      },
      chooseBack(){
        this.shelfBtnFlag = true;
      },
      /*选择*/
      choseEditBook(id,title){
        if(!this.shelfBtnFlag){
              let idIndex = this.chooseBookList.indexOf(id)
              if (idIndex >= 0) {
                // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
                this.chooseBookList.splice(idIndex, 1)
              } else {
                // 选中该checkbox
                this.chooseBookList.push(id)
              }
              this.numbers = '('+this.chooseBookList.length+')'
              if(this.chooseBookList.length==this.bookShelfLists.length){
                this.allSelect = true;
              }
        }else{
          this.$router.push({path: '/readNovel', query: {id: id, page: 1, title: title,joinShelf:true}});
        }
      },
      /*书架列表*/
      bookShelfList(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'get',
          url:this.apiUrl.novelShelfQuery,
          headers: {times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            this.bookShelfLists = res.data.list;
          }
        }).catch();
      },
      /*全选*/
      checkedAll () {
          this.isCheckedAll = !this.isCheckedAll
          if (this.isCheckedAll) {
            this.chooseBookList = []
            this.bookShelfLists.forEach(function (fruit) {
              this.chooseBookList.push(fruit.id)
            }, this)
          } else {
            this.chooseBookList = []
          }
          this.numbers = '('+this.chooseBookList.length+')';
          if(this.chooseBookList.length==this.bookShelfLists.length){
            this.allSelect = true;
          }
      },
      /*删除*/
      delateBooks(){
        let times = Date.parse(new Date());
        let md5 = this.getmd5(localStorage.getItem('uuid') + times).toUpperCase();
        this.$http({
          method:'post',
          url:this.apiUrl.novelShelfDel,
          data:{allSelect:this.allSelect,list:this.chooseBookList},
          headers: {times: times, sign: md5}
        }).then(res=>{
          if(res.status==200){
            this.numbers='(0)',
            this.bookShelfList();
          }
        }).catch();
      }
    }
  }
</script>
<style>
  .bookShelf .shelfTop {
    width: 100%;
    height: 46px;
    line-height: 46px;
    position: fixed;
    left: 0;
    top: 0;
    padding-left:15px;
    background: #fff;
    z-index: 999;
    padding-left: 15px;
  }

  .bookShelf .shelfTop .returnBack {
    width: 12px;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    vertical-align: middle;
  }

  .bookShelf .shelfTop .topTitle {
    font-size: 17px;
    font-weight: 700;
    width: 80%;
    height: 46px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 20px;
  }

  .bookShelf .shelfCont{
    padding: 46px 15px 70px 15px;
  }

  .bookShelf .shelfCont .editBtn{
    display: -webkit-flex;
    display: flex;
    justify-content: flex-end;
  }

  .bookShelf .shelfCont .editBtn img{
    height: 28px;
    vertical-align: middle;
  }

  .bookShelf .shelfCont .chooseBtn{
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
  }

  .bookShelf .shelfCont .chooseBtn div img{
    height: 28px;
    vertical-align: middle;
  }

  .bookShelf .shelfCont .shelfWra {
    width: 100%;
    background-color: white;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .bookShelf .shelfCont .shelfWra .novelWra {
    width: 28%;
    vertical-align: middle;
    color: black;
    text-align: center;
    margin-right: 8%;
  }

  .bookShelf .shelfCont .shelfWra .novelWra .novelName{
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 10px;
  }

  .bookShelf .shelfCont .shelfWra .novelWra:nth-child(3n){
    margin-right: 0;
  }

  .bookShelf .shelfCont .shelfWra .novelWra .novelPic {
    width: 100%;
    position: relative;
  }

  .bookShelf .shelfCont .shelfWra .novelWra .novelPic img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    box-shadow: 0px 0px 5px #999;
  }

  .bookShelf .shelfCont .shelfWra .novelWra .novelPic .choseBox{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.3);
  }

  .bookShelf .shelfCont .shelfWra .novelWra .novelPic .choseBox .check{
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: #fff;
    border-radius: 50%;
  }

  .bookShelf .shelfCont .shelfWra .novelWra .novelPic .choseBox .check img{
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .bookShelf .shelfBottom{
    width: 100%;
    height: 54px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #ff4646;
    line-height: 54px;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }

</style>

