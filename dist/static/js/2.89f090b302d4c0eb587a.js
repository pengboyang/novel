webpackJsonp([2],{"/gXl":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"freeWeek"},[s("div",{staticClass:"manTitle"},[s("span",{staticClass:"kind"},[t._v(t._s(t.title))]),t._v(" "),s("span",{staticClass:"moreList",on:{click:t.freeMoreList}},[t._v("更多>")])]),t._v(" "),s("div",{staticClass:"freeNovel"},t._l(t.freeBookList,function(e){return s("div",{staticClass:"novelWra",on:{click:function(s){t.goDetail(e.id,e.type)}}},[s("div",{staticClass:"novelPic"},[s("img",{attrs:{src:e.cover,alt:""}})]),t._v(" "),s("div",{staticClass:"novelName"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"novelPrice"})])}))])},staticRenderFns:[]};var n=s("VU/8")({name:"freeWeek",data:function(){return{freeBookList:[],title:"",betterMoreList:[]}},created:function(){this.noType=this.$attrs.noType,this.freeBookList=this.$attrs.data.novelItemList,this.title=this.$attrs.data.name},methods:{freeMoreList:function(){this.$router.push({path:"/moreList",query:{type:this.noType}})},goDetail:function(t,e){this.$router.push({path:"/bookDetail",query:{id:t,type:e}})}}},i,!1,function(t){s("0opl")},null,null);e.a=n.exports},"0opl":function(t,e){},"56Qv":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("9WMf"),n=s("rgBf"),a=s("wgE2"),o=s("/gXl"),r={name:"manList",data:function(){return{gender:0,womenBookList:[],sweiperList:[]}},components:{mySwiper:i.a,fineQuality:n.a,newBook:a.a,freeWeek:o.a},created:function(){this.gender=this.$route.query.id,this.womenPageList()},methods:{womenPageList:function(){var t=this;this.$http({method:"get",url:this.apiUrl.novelApiLibrary,params:{gender:this.gender}}).then(function(e){200==e.status&&(t.womenBookList=e.data.novelLists,t.sweiperList=e.data.novelItemList)}).catch()},onSwipeLeft:function(){this.$router.push({path:"/novel/assortmentList",query:{id:3}})},onSwipeRight:function(){this.$router.push({path:"/novel/manList",query:{id:1}})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"manList"},[s("my-swiper",{attrs:{lists:t.sweiperList}}),t._v(" "),t._l(t.womenBookList,function(e){return s("div",[3==e.style?s("new-book",{attrs:{data:e,noType:e.type}}):6==e.style?s("fine-quality",{attrs:{data:e,noType:e.type}}):4==e.style?s("free-week",{attrs:{data:e,noType:e.type}}):t._e()],1)}),t._v(" "),s("wv-loadmore",{attrs:{type:"line",text:"这就是我的底线"}})],2)},staticRenderFns:[]};var c=s("VU/8")(r,l,!1,function(t){s("bdDi")},null,null);e.default=c.exports},"9WMf":function(t,e,s){"use strict";var i={name:"mySwiper",data:function(){return{srcLists:[]}},props:{lists:{type:Array,default:function(){return[]}}},watch:{lists:function(t,e){this.srcLists=t}},created:function(){},methods:{goBookDetail:function(t,e){this.$router.push({path:"/bookDetail",query:{id:t,type:e}})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comSwiepr"},[s("wv-swipe",{attrs:{autoplay:1e4,height:120}},t._l(t.srcLists,function(e,i){return s("wv-swipe-item",{key:i},[s("img",{staticStyle:{width:"100%",height:"auto","vertical-align":"middle"},attrs:{src:e.cover,alt:""},on:{click:function(s){t.goBookDetail(e.id,e.type)}}})])}))],1)},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("V/eg")},null,null);e.a=a.exports},OluH:function(t,e){},"V/eg":function(t,e){},bdDi:function(t,e){},wgE2:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newBook"},[s("div",{staticClass:"manTitle"},[s("span",{staticClass:"kind"},[t._v(t._s(t.title))]),t._v(" "),s("span",{staticClass:"moreList",on:{click:t.newMoreList}},[t._v("更多>")])]),t._v(" "),s("div",{staticClass:"books"},t._l(t.newBookList,function(e){return s("div",{staticClass:"content clearfloat",on:{click:function(s){t.goNovelDetail(e.id,e.type)}}},[s("div",{staticClass:"bookLeft"},[s("img",{attrs:{src:e.cover,alt:""}})]),t._v(" "),s("div",{staticClass:"bookRight"},[s("p",{staticClass:"bookname"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"bookDescribed"},[t._v(t._s(e.summary))]),t._v(" "),s("div",{staticClass:"bookInfo clearfloat"},[s("div",{staticClass:"author"},[t._m(0,!0),t._v(" "),s("span",{staticClass:"man"},[t._v("作者："+t._s(e.author))])]),t._v(" "),s("div",{staticClass:"described"},[s("span",[t._v(t._s(e.typename))]),t._v(" "),s("span",[t._v("完结")])])])])])})),t._v(" "),s("div",{staticClass:"lineBg"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{attrs:{src:s("53nh"),alt:""}})])}]};var n=s("VU/8")({name:"newBook",data:function(){return{newBookList:[],title:"",betterMoreList:[]}},created:function(){this.noType=this.$attrs.noType,this.newBookList=this.$attrs.data.novelItemList,this.title=this.$attrs.data.name},methods:{newMoreList:function(){this.$router.push({path:"/moreList",query:{type:this.noType}})},goNovelDetail:function(t,e){this.$router.push({path:"/bookDetail",query:{id:t,type:e}})}}},i,!1,function(t){s("OluH")},null,null);e.a=n.exports}});
//# sourceMappingURL=2.89f090b302d4c0eb587a.js.map