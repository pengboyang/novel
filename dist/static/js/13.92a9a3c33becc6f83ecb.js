webpackJsonp([13],{"2N+w":function(t,s){},F2ku:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"moreList",data:function(){return{novelType:"",novelTitle:"",moreLists:[]}},created:function(){this.novelType=this.$route.query.type,this.novelMoreList()},methods:{routeBack:function(){this.$router.go(-1)},novelMoreList:function(){var t=this;this.$http({method:"get",url:this.apiUrl.novelApiList,params:{category:this.novelType,begin:0}}).then(function(s){200==s.status&&(console.log(s),t.moreLists=s.data.novelList.novelItemList,t.novelTitle=s.data.novelList.name)}).catch()},goNovelDetail:function(t,s){this.$router.push({path:"/bookDetail",query:{id:t,type:s}})}}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"moreList"},[i("div",{staticClass:"topBanner"},[i("div",{staticStyle:{width:"46px",height:"100%"},on:{click:t.routeBack}},[i("img",{staticClass:"returnBack",attrs:{src:e("VRsZ"),alt:""}})]),t._v(" "),i("div",{staticClass:"topTitle"},[t._v(t._s(t.novelTitle))])]),t._v(" "),i("div",{staticClass:"comBooks"},[i("div",{staticClass:"lineBg"}),t._v(" "),t._l(t.moreLists,function(s){return i("div",{staticClass:"novelCon clearfloat",on:{click:function(e){t.goNovelDetail(s.id,s.type)}}},[i("div",{staticClass:"novelLeft"},[i("img",{attrs:{src:s.cover,alt:""}})]),t._v(" "),i("div",{staticClass:"novelRight"},[i("p",{staticClass:"bookname"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"bookDescribed"},[t._v(t._s(s.summary))]),t._v(" "),i("div",{staticClass:"bookInfo clearfloat"},[i("div",{staticClass:"author"},[t._m(0,!0),t._v(" "),i("span",{staticClass:"man"},[t._v("作者："+t._s(s.author))])]),t._v(" "),i("div",{staticClass:"described"},[i("span",[t._v(t._s(s.typename))]),t._v(" "),i("span",[t._v(t._s(2==s.state?"完结":"连载"))])])])])])})],2),t._v(" "),i("wv-loadmore",{attrs:{type:"line",text:"大蜜小说"}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"icon"},[s("img",{attrs:{src:e("53nh"),alt:""}})])}]};var o=e("VU/8")(i,a,!1,function(t){e("2N+w")},null,null);s.default=o.exports}});
//# sourceMappingURL=13.92a9a3c33becc6f83ecb.js.map