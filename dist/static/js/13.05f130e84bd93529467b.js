webpackJsonp([13],{"GF/3":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("Au9i");var i={name:"assortmentList",data:function(){return{loadBegin:!1,loading:!1,allLoaded:!1,show:!1,cateGoryBookList:[],defaultId:1,defaultType:"",defaultState:"",defaultPayState:"",genderLists:[],statusLists:[],typeLists:[],channelLists:[],genderIndex:0,channelIndex:0,typeIndex:0,serachLists:[],wrapperHeight:0,nextBegin:1,hasmore:!0}},created:function(){this.cateGoryList()},mounted:function(){this.wrapperHeight=document.documentElement.clientHeight-50},methods:{routeBack:function(){this.$router.go(-1)},cateGoryList:function(){var t=this;this.$http({method:"get",url:this.apiUrl.novelApiCategory,params:{gender:this.defaultId}}).then(function(s){200==s.status&&(t.genderLists=s.data.genderList,t.statusLists=s.data.statusList,t.typeLists=s.data.typeList,t.channelLists=s.data.channelList,t.defaultId=s.data.genderList[0],t.defaultType=s.data.channelList[0].key,t.defaultState=s.data.statusList[0],t.defaultPayState=s.data.typeList[0])}).catch()},changeSex:function(t,s){this.channelIndex=0,this.typeIndex=0,this.serachLists=[],this.nextBegin=1,this.hasmore=!0,this.defaultId=t,this.genderIndex=s,this.cateGoryList()},changeAssortment:function(t,s){this.hasmore=!0,this.serachLists=[],this.nextBegin=1,this.defaultType=t.key,this.channelIndex=s},changeType:function(t,s){this.hasmore=!0,this.serachLists=[],this.nextBegin=1,this.defaultState=t,this.typeIndex=s},othersNovelList:function(t,s,e,i){var a=this;if(!this.hasmore)return this.loading=!1,!1;this.$http({method:"get",url:this.apiUrl.novelApiList,params:{category:t,status:s,type:e,begin:i}}).then(function(t){200==t.status&&(console.log(t),a.serachLists=a.serachLists.concat(t.data.novelList.novelItemList),a.nextBegin=t.data.novelList.nextBegin,a.hasmore=t.data.novelList.hasMore,a.loading=!1)}).catch()},goDetail:function(t,s){this.$router.push({path:"/bookDetail",query:{id:t,type:s}})},onSwipeLeft:function(){this.$router.push({path:"/novel/mineList",query:{id:4}})},onSwipeRight:function(){this.$router.push({path:"/novel/womenList",query:{id:2}})},loadMore:function(){this.loading=!0,this.othersNovelList(this.defaultType,this.defaultState,this.defaultPayState,this.nextBegin)}}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"assortmentList"},[i("div",{staticClass:"assortmentTop"},[i("div",{staticStyle:{width:"46px",height:"100%"},on:{click:t.topBack}},[i("img",{staticClass:"returnBack",attrs:{src:e("VRsZ"),alt:""}})]),t._v(" "),i("div",{staticClass:"topTitle"},[t._v("分类")])]),t._v(" "),i("div",{staticClass:"assortmentCont"},[i("div",{ref:"wrapper",staticClass:"page-infinite-wrapper",style:{height:t.wrapperHeight+"px"}},[i("div",{staticClass:"assortment"},[i("div",{staticClass:"gender"},t._l(t.genderLists,function(s,e){return i("span",{class:{Active:t.genderIndex==e},on:{click:function(i){t.changeSex(s,e)}}},[t._v(t._s(1==s?"男生":"女生"))])})),t._v(" "),i("div",{staticClass:"mold"},t._l(t.channelLists,function(s,e){return i("span",{class:{Active:t.channelIndex==e},on:{click:function(i){t.changeAssortment(s,e)}}},[t._v(t._s(s.value))])})),t._v(" "),i("div",{staticClass:"completion"},t._l(t.statusLists,function(s,e){return i("span",{class:{Active:t.typeIndex==e},on:{click:function(i){t.changeType(s,e)}}},[t._v(t._s(0==s?"全部":1==s?"连载":"完结"))])}))]),t._v(" "),i("div",{staticClass:"filament"}),t._v(" "),i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-infinite-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"50"}},t._l(t.serachLists,function(s){return i("li",{staticClass:"page-infinite-listitem"},[i("div",{staticClass:"novelBooks"},[i("div",{staticClass:"novelCon clearfloat",on:{click:function(e){t.goDetail(s.id,s.type)}}},[i("div",{staticClass:"novelLeft"},[i("img",{attrs:{src:s.cover,alt:""}})]),t._v(" "),i("div",{staticClass:"novelRight"},[i("p",{staticClass:"bookname"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"bookDescribed"},[t._v(t._s(s.summary))]),t._v(" "),i("div",{staticClass:"bookInfo clearfloat"},[i("div",{staticClass:"author"},[t._m(0,!0),t._v(" "),i("span",{staticClass:"man"},[t._v("作者："+t._s(s.author))])]),t._v(" "),i("div",{staticClass:"described"},[i("span",[t._v(t._s(0==s.state?"全部":1==s.state?"连载":"完结"))])])])])])])])})),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-infinite-loading"},[i("mt-spinner",{attrs:{type:"fading-circle"}}),t._v("\n          加载中...\n        ")],1),t._v(" "),t.hasmore?t._e():i("wv-loadmore",{attrs:{type:"line",text:"大蜜小说"}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("img",{attrs:{src:e("53nh"),alt:""}})])}]};var n=e("VU/8")(i,a,!1,function(t){e("jGOt")},null,null);s.default=n.exports},jGOt:function(t,s){}});
//# sourceMappingURL=13.05f130e84bd93529467b.js.map