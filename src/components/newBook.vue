<template>
  <div class="newBook">
      <div class="manTitle">
        <span class="kind">{{$attrs.title}}</span>
        <span class="moreList" @click="newMoreList">更多></span>
      </div>
      <div class="books">
        <div class="content clearfloat">
          <div class="bookLeft">
            <img src="../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="bookRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
        <div class="content clearfloat">
          <div class="bookLeft">
            <img src="../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="bookRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../assets/img/man.png" alt=""></span>
                <span class="man">作者：辰东</span>
              </div>
              <div class="described">
                <span>分类</span>
                <span>完结</span>
              </div>
            </div>
          </div>
        </div>
        <div class="content clearfloat">
          <div class="bookLeft">
            <img src="../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="bookRight">
            <p class="bookname">完美世界</p>
            <div class="bookDescribed">我是书的简介我是书的简介我是书的简介我是书的我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookInfo clearfloat">
              <div class="author">
                <span class="icon"><img src="../assets/img/man.png" alt=""></span>
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
      <div class="lineBg"></div>
  </div>
</template>
<script>
  export default{
    name:'newBook',
    data(){
      return {}
    },
    created(){
    },
    methods:{
      newMoreList(){
          this.$router.push({path:'/moreList'});
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
.newBook{
  padding: 0 15px;
}
.newBook .lineBg{
  width: 100%;
  height: 5px;
  background: url('../assets/img/linebg.png')
}
.newBook .manTitle{
  padding: 20px 0 20px 0;
}
.newBook .manTitle .kind{
  font-size: 16px;
  font-weight: 700;
}
.newBook .manTitle .moreList{
  float: right;
  font-size: 14px;
  color: #999;
}
.newBook .books{
  width: 100%;
}
.newBook .books .content{
  width: 100%;
  margin-bottom: 16px;
}
.newBook .books .content:last-child{
  margin-bottom: 15px;
}
.newBook .books .content .bookLeft{
  width: 28%;
  float: left;
}
.newBook .books .content .bookLeft img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.newBook .books .content .bookRight{
  width: 65%;
  float: right;
}
.newBook .books .content .bookRight .bookname{
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}
.newBook .books .content .bookRight .bookDescribed{
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
  line-height: 22px;
  height: 70px;
  overflow: hidden;
  letter-spacing: 1px;
}
.newBook .books .content .bookRight .bookInfo{
  font-size: 12px;
  color: #999;
  line-height: 12px;
}
.newBook .books .content .bookRight .bookInfo .described{
  float: right;
}
.newBook .books .content .bookRight .bookInfo .described span{
 background: #e0e0e0;
 padding: 2px 10px;
 vertical-align: middle;
 border-radius: 10px;
}
.newBook .books .content .bookRight .bookInfo .author{
  float: left;
}
.newBook .books .content .bookRight .bookInfo .author .icon{
  vertical-align: middle;
}
.newBook .books .content .bookRight .bookInfo .author .icon img{
  width: 8px;
}
.newBook .books .content .bookRight .bookInfo .author .man{
  vertical-align: middle;
}
</style>

