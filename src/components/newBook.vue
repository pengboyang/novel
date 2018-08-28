<template>
  <div class="newBook">
      <div class="manTitle">
        <span class="kind">{{$attrs.title}}</span>
        <span class="moreList">更多></span>
      </div>
      <div class="books">
        <div class="content clearfloat">
          <div class="bookLeft">
            <img src="../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="bookRight">
            <p class="bookname">我是书的名称</p>
            <div class="booknick">我是书的作者</div>
            <div>我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookbtn">
              <span>分类</span>
              <span>完结</span>
            </div>
          </div>
        </div>
        <div class="content clearfloat">
          <div class="bookLeft">
            <img src="../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="bookRight">
            <p class="bookname">我是书的名称</p>
            <div class="booknick">我是书的作者</div>
            <div>我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookbtn">
              <span>分类</span>
              <span>完结</span>
            </div>
          </div>
        </div>
        <div class="content clearfloat">
          <div class="bookLeft">
            <img src="../assets/img/wanmeishijie .png" alt="">
          </div>
          <div class="bookRight">
            <p class="bookname">我是书的名称</p>
            <div class="booknick">我是书的作者</div>
            <div>我是书的简介我是书的简介我是书的简介我是书的...</div>
            <div class="bookbtn">
              <span>分类</span>
              <span>完结</span>
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
  margin-bottom: 10px;
}
.newBook .books .content:last-child{
  margin-bottom: 15px;
}
.newBook .books .content .bookLeft{
  width: 30%;
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
  font-weight: 700;
}
.newBook .books .content .bookRight .booknick{
  font-size: 16px;
  line-height: 34px;
}
</style>

