<template>
  <div class="manContent">
      <div class="manTitle">
        <span class="kind">{{title}}</span>
        <span class="moreList" @click="moreList">更多></span>
      </div>
      <div class="manNovel">
          <div class="novelWra" @click="goDetail(item.id,item.type)" v-for="item in listData">
            <div class="novelPic"><img :src="item.cover" alt=""></div>
            <div class="novelName">{{item.title}}</div>
          </div>
      </div>
      <div class="lineBg"></div>
  </div>
</template>
<script>
  export default{
    name:'fineQuality',
    data(){
      return {
        listData:[],
        title:'',
        betterMoreList:[]
      }
    },
    created(){
      this.listData = this.$attrs.data.novelItemList;
      this.title = this.$attrs.data.name;
    },
    methods:{
      moreList(){
        this.$router.push({path:'/moreList'});
      },
      goDetail(id,type){
        this.$http({
          method:'get',
          url:this.apiUrl.novelApiList,
          params:{category:type}
        }).then(res=>{
          if(res.status==200){
            console.log(res);
            this.betterMoreList=res.data.novelList;
            this.$router.push({path:'/bookDetail',query: {id: id,type:type,betterMoreList:this.betterMoreList}});
          }
        }).catch()
      }
    }
  }
</script>
<style>
.manContent{
  padding: 0 15px;
}
.manContent .lineBg{
  width: 100%;
  height: 5px;
  background: url('../assets/img/linebg.png')
}
.manContent .manTitle{
  padding: 22px 0 20px 0;
}
.manContent .manTitle .kind{
  font-size: 16px;
  font-weight: 700;
}
.manContent .manTitle .moreList{
  float: right;
  font-size: 14px;
  color: #999;
}
.manContent .manNovel{
  width: 100%;
  background-color: white;
  display: -webkit-flex;
	display: flex;
  flex-direction: row;
	flex-wrap: wrap;
  justify-content:space-between;
}
.manContent .manNovel .novelWra {
  width: 26%;
	vertical-align: middle;
	color: black;
	text-align: center;
}
.manContent .manNovel .novelWra .novelPic{
  width: 100%;
}
.manContent .manNovel .novelWra .novelPic img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.manContent .manNovel .novelWra .novelName{
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 10px;
}
</style>

