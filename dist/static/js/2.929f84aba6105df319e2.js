webpackJsonp([2],{"/gXl":function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"freeWeek"},[i("div",{staticClass:"manTitle"},[i("span",{staticClass:"kind"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"freeNovel"},t._l(t.freeBookList,function(e){return i("div",{staticClass:"novelWra",on:{click:function(i){t.goDetail(e.id,e.type)}}},[i("div",{staticClass:"novelPic"},[i("img",{attrs:{src:e.cover,alt:""}})]),t._v(" "),i("div",{staticClass:"novelName"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"novelPrice"})])}))])},staticRenderFns:[]};var s=i("VU/8")({name:"freeWeek",data:function(){return{freeBookList:[],title:"",betterMoreList:[]}},created:function(){this.genders(this.$attrs.gender),this.freeBookList=this.$attrs.data.novelItemList,this.title=this.$attrs.data.name},methods:{freeMoreList:function(){this.$router.push({path:"/moreList",query:{type:this.noType}})},goDetail:function(t,e){this.$router.push({path:"/bookDetail",query:{id:t,type:e}})}}},n,!1,function(t){i("jp7P")},null,null);e.a=s.exports},"9WMf":function(t,e,i){"use strict";var n={name:"mySwiper",data:function(){return{srcLists:[]}},props:{lists:{type:Array,default:function(){return[]}}},watch:{lists:function(t,e){1==this.$attrs.gender?this.srcLists=t:2==this.$attrs.gender&&(this.srcLists=t)}},created:function(){},methods:{goBookDetail:function(t,e,i){this.$router.push({path:"/bookDetail",query:{id:t,type:e}})},goFenlei:function(){this.$router.push({path:"/assortmentList"})},goBookcase:function(){this.$router.push({path:"/bookShelf"})},goWode:function(){this.$router.push({path:"/mineList"})},goRecharge:function(){this.$router.push({path:"/recharge"})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comSwiepr"},[n("wv-swipe",{attrs:{autoplay:3e3,height:130,prevent:!0}},t._l(t.srcLists,function(e,i){return n("wv-swipe-item",{key:i},[n("img",{staticStyle:{width:"100%",height:"auto","vertical-align":"middle"},attrs:{src:e.cover,alt:""},on:{click:function(n){t.goBookDetail(e.id,e.type,i)}}})])})),t._v(" "),n("div",{staticClass:"secondTab"},[n("div",{staticClass:"tabCon",on:{click:t.goBookcase}},[n("img",{attrs:{src:i("m5+s"),alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("书架")])]),t._v(" "),n("div",{staticClass:"tabCon",on:{click:t.goFenlei}},[n("img",{attrs:{src:i("W1sn"),alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("分类")])]),t._v(" "),n("div",{staticClass:"tabCon",on:{click:t.goWode}},[n("img",{attrs:{src:i("SJyL"),alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("我的")])]),t._v(" "),n("div",{staticClass:"tabCon",on:{click:t.goRecharge}},[n("img",{attrs:{src:i("YkDm"),alt:""}}),t._v(" "),n("div",{staticClass:"text"},[t._v("充值")])])])],1)},staticRenderFns:[]};var c=i("VU/8")(n,s,!1,function(t){i("wrf3")},null,null);e.a=c.exports},SJyL:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvCAYAAADixZ5gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwNTYzNzk2REMxNDExRTg4QUEwQUEwODBDNDFBRjYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwNTYzNzk3REMxNDExRTg4QUEwQUEwODBDNDFBRjYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA1NjM3OTREQzE0MTFFODhBQTBBQTA4MEM0MUFGNjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA1NjM3OTVEQzE0MTFFODhBQTBBQTA4MEM0MUFGNjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5bUOCQAAAQrElEQVR42uxd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"},TUKC:function(t,e,i){t.exports=i.p+"static/img/qrcode.2c52618.jpg"},W1sn:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvCAYAAADixZ5gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIyQjVBQjY2REMxNDExRTg5MzRCOEU4MkE1QUVGQ0IyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIyQjVBQjY3REMxNDExRTg5MzRCOEU4MkE1QUVGQ0IyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjJCNUFCNjREQzE0MTFFODkzNEI4RTgyQTVBRUZDQjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjJCNUFCNjVEQzE0MTFFODkzNEI4RTgyQTVBRUZDQjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4sdwhNAAATUklEQVR42uxdCXQU15W9Vb1pRYsRlsUmAbaBYQnCBoLt4NiBwQGDOY4nJp5xZsZg53jwMjPJMZ4542DHOXgZZ07mEDvHkHFOEuM4C8QQYox3AyaAQQS8gLBARLIQEhIS2tXdVfPfr1+lbnVL6uquKrVEP/tRre7qrvffrf/+e/+/90v6/pslGII0kvFMxlczLhZcxLiAcR5jN+NscQwwbmHsZ9wguIbxCcbHGZeL1y1DTQnuISCjzLiU8QLG1zGeK4Ay08Y88XpUP+dVMz7IeC/jDxgfYqykwDNPGYyXMF7OeJHoUXbTGMErxN/1jHcx3sb4j4zbU+D138NuYnwP41sZZw6yPHTD3CW4TQC4ifE7ydIj5SSQYQTj74qx503GdyYBcL2J5PmmkO+kkHfEpQwejT/PMq4Sx4lDxE+Y0EvuUZcSeLmMn2JckSx3cIIWo0K0J3c4g0fj6/3C7DzCOAvDg7JEe06K9rmHG3izGO9n/BMRow1HGinat1+ENkMePC/j9YwPONWgJKBSAeB60f4hCd4UxvsYrx0ikwFWDxFrRfunDDXwVorZilJc2lQq9LByKIDnYvw/jDcnYaw2mDHiZqEXV7KCl8b4t4wfTuEVlR4W+klLNvAoxtmJnnnBFEWnFUJPuckC3hWM34c265+igWmB0FfhYINHs/B7GM9IYWKKSF+7hf4GBTyadaeJ2gkpLOKiSUJ/BU6DR+ttbzGenMIgIZosAMxwCjxyd19JmUrLaKbQp8sJ8P6b8bKUzi2lZUKvpsjstNWd8cZxqkqsGq+hJthcif+vHSWJceIaFOJpcqpCRDX69fhLyVIASa8HRC+0HDyyzz+LFzRVAZSgCoWOihqmLNO4ST1H2SVBZvaDWJLjA5HLqGiyGUeSWY28rkzXkFVxtO7GEURpFmXQstosA49mx182O7DqSgky0AJ+dgywI2MCUQMVcXRBTVm6Il1ujd38qIEZqzJD5VOC4MegkI9usB4ZQ4GDdk2Xdl1+47gsA5H0S1Np8xh3WwXeEzA5yWwohimju5uBxkSZWXQb5k9aieKCWfC6E5slUpQA6lv+isOV2/H+yU3oCjbDq8q8QQMBqFsDHbCAX2HyqcxjyMS0KxZiatFXMSb/bzAqpxgel49/p7WzEbXNFfi8dj8+rnkTVRcOw+1lN41Hu3FktwA3cQBnCX2vHfA2jiHpVl+fcptTrgCui5mYQAb+6bqNmFx0vS2jfUtnAza+vwpftByCN03mCu1LkTpw3Ar4ST4FPjkPCyc/gOuvvgs+T2zGpeZCOd44tgFHqrfC45Pg8cpweXQTnjCClChM+amHEwGP3NeD4m4w1evI9JBiujuB+2542TbgdOrobsGzO5egJVgJr08WJk3q00z6WU/r7lQwo2g5vjn3h8j05cR13ZO1B/DLfQ+hNVDNr+v2yNyMWgAgjX1zBJBxhQr3mgVO99YUMX7MZMqxGziidG82Vsz6Pjd/ZA6jDaW8xwngutoV3DrtMfzzVzbEDRzRlYVzsPbrOzEm61p0sZuBTLDm8FhiPlfHG+flCtsb55gE7pzQGOcUTR97MzI9ozQHRI004wQqN5UdCu6Y/TRunta3bmqbKvDRqT9i74nfYP/JrThTf4wBEj3XNoOBv2bhZozNvpZbm6C/x+FJkJ5APysQ/Y1jNGDGlSzEzaai9T5yTpyk0TnTUNH8LjePqqqNe5q5BO8VZCqvn7iajW/fihxogn689+nP8UH5z9HYXmk4Plp7WO9252JOyR1YPGMNstMvC3fHmQP2nZtewlN/Woz27i+Y2ZQheXpiwjhppMBhrZmeR4mka+KPdntATNSrNO1r+/LRu4PoZpx6XUHGZKy45j8ivvdF4wk8+drXsO3Y42hTq5Ce5UZ6psvgjCwXFM9F7Dm1EY//4QYcqXwjag/8hy//GP4uPSSyxHyuQR+JvX2BR8mkCaUxhMZIjpIaeQOpwoT7uxXcPvtxuORwg1NZ9xc8t3M5mv2nOFC+dBk+5rWS50pOiFe8TiPOYCC6W7BpzyrsPr456hg4c8xyfqNopjNhJWQKPGICj2zsfdZq0mH8aHYkStgyPm8Ori6aHx5mdDTi+Xe+DdXdxkEjl59CDT0QJ9NJR4rl3F4NTF86AzhNwqsHH8XJswcirr94+oPccaJrqtY4L9+JNvZFA28Vhm4Ketj9ok1xCUeFKXLehDsjTt9y8El0qec1N9/bE2JEG6r06TgCl873+BS8/OF3mXMUDDuvKO8qjM0r1RwnxZIbOFvg0i949Pf9GEakKrrzJGHGuIVhnzW21uDgmd8zEERvi2FqLXRajnppQ+cpHD71esR504oWhvQ8SwC8vzdevcGj+riSYQWe8HxHZU5EVlpe2GcfndrOQAga5jFWx1DrgdocJ4H+UeUfIs6ZdPkc48axaPQgXG7uD7x7MMxIX9EoyI7M1qg8f1hblXCZn5OkEECblJZQ2XAo4vPC3Ek9k9vWNeeevsCjSb1bhxdyGpMCM3yRsW5T+1ljfDMbj+nfoVmwi511EZ9npeX3OCrWobc0NAoIBW8JhnGWs1v2DYdmED5fjwbebcMSNUnjTn/kTh056YXGmGTWqTCWldhxhC8yhvYHu3pMsbUr7rf1Bo+Oi4YlcMLENbZVRXoABaVhC69mx1JFZAeMvyxyCrCuudJYNLYWOyzWcdPBuwbDtOiRUiNoXKtp/iwiHistWcrceSlsdT92DxbGmuDs4uUR51Q3fiLGU8vRyxd4GeDdMFzHOlnS8lsCahsqzoV7hSOzx+BLY5bx2RA+nRUDgMaaoF+bbstPK8Y1E5dGnPdpzXtGfo1kcaYSo6+EgnfdcDOVujsPY1ZExoGK30WcfsfcdfAijy/lEBjBfsyoHjPyZSV2bqBLwsp5z7AbJDzlsjvQgU/O7uJxoCRLdrRyfih482zXpJP4UTJQWDymzYgcqtrCc1HCnJaMAtz31ZeYh5HOF1P9XYqRLKUlJokEqoCW60Kf03nd7Qq+MftJTB49P+L6u4//CkG0acG/bHmKINGXdfAoV/4K6xVoi9Cm7xdJmE0CD64ubDv8TMRXJl4+G//6t1uQJY9FR1sQXR2KSOEIOTLuZO/T50pXOu6e/zwWTL074rfauprx1vENPDmJZ5XZ0/OowqiAwJtup5dHWV5OUiDYod00UrjTQr2A5iL3n9mM4zV7Ir43buQ0PLbiXdwydS18aiHaWwMcKJ3bW4NQuzIwb/w/Yt2K3bh2YvSk8Vf3/yc6lUZupl0uyc4beDotbE22Azt9ApfS8y7Pca6QqL71tEi+lcJ7H+sFtKzj8an4xb4H8G+LtjGHZWzYdynN75YvreFMi7PVjZ8xM9vA82NGjZiAklEz4ZI9fV77nU824WjNa3xpiQMn22p6phB4JXb0PFkkpZad2YHFMx5wBLjzLVWovfgp0jJlkc0cPg7SGqxHldmY1YANb9+JNTf/OgJAnUbnX805VtpzYjNeO/oEB46nHrpsHzaKyWwW2+Ew6E7Ce+UvRjgJdtG2svVweaNPNOuWgHofrcW1BKrwo13LoppQMxRkw8LvD/wAvzv8CAOOTLPWbsn+AZ+DV2g9eJqTQIryS808IZbyKu2knUc34OjZ7fAY63JSdLn0xdQ0Gd1SA154/1t45cNH2Q12wfQ1y8/+GU/vuAV7Tr8IX4asASeu7YCzVkhJt5/ZMe7pibd6VnKutxgrZq3DtLE3WW4qqccRcJR3Qk7JQEmvRnabqJ0g+STFh9njbsecCbdz77N37BbqTR796y7sq3gFZy4cMNIm9GRbh4AjOk7g1cGmnWQNAAM99QBZ3ssxOmc6cwJyI5KFYg4DJM2rJOeExjgylR6TCuxdr8DjOiGnW8pEUc5U5GeOQbpnBAJKN9q7m1DXUoG61s/ZNVRR2CLqFFxaAYosOxob1ZPDYtv+WIaZ4maU3aHsal3Benze9LaRnmd2Nj+0No68OXJO9CQhMyVXUkhdH48D2fcVj8pNn6J04mzHIdS0HzJuLO16QHqmxNui924byrxiJS+Bl2HnFYzSKIqRKXVAlfjcoN7jzBd49bzgSpPDgYhrMkHvOSQMu9MUMX8ZZhVCriHJthVYmqEMAs9j/3SV1ljqZDSSqLJJc9nnJEBiCowsnmQysv+49aN/1IFn+kLr9xwmD4HntxtAo6SZxsBed3ViPQ+me55RqSuScdWQJBOTy7FGmbM+iyNLsLTMegDyE3i05XyOncDpdQu6c8Bn7S0a88gUa2Me+h1/QsureyacIWoaEpRFOCtaFhp6xkN7AWwn8LptBa6Xt0lVPGNyZ9jobarQS5+jeZZ8ZYBWDZgshSOmoiCrBG5XekKydDBPtLrpKAsj6kS1rOacyfbObXYTeA12hApR47z51sd59RfP8Djv49od/JpanKeGBek6cLReR6sD0wqXYtmstSgYMd5SWT6uegdbytahubMS8MVWYp0ANbhuvDuPcsDHWQ6eUY+uYEz2NXhw4W8xOt/6DZMyfbkoLV7KrudGee1eo6xYN5+9y7sWTfke/m7uD/j3rKZROSWYU/INnKjZj6aOGi6HvkuFHUE6+X219oxzWn2AR83BqgUb+cy8nXTLjAdZj1qimcSgGrLni6iGZe/T53SenUTtXL1gE283z41RbKuWqiXwKq0HTzUqc2686l5kp13miO+8bNajfCwL3SpEN9/0Pn3uBFF7F1y1WtsWxJoyr2hUaQt40BXGhJ81foljgQ+NYYUjpggvUjff4H/T+1aPcf1R6filxp4uNlW6cfA+swE7I0QoyB4HJ6kga4Jw/0OY5MhydmdJarcNtQoRY94xO3qePvbJsrO78pPbH7a3mTCdPBxwkKjdNtQqhNJRAq/eLqdlUMua+3vtlCj26YDwqtdnGffZr0knlaaGxdyqOjhy2Nh+jpcO3l4MF1KT6j6yiz4MBW83UjSU6INQ8D6CNk2WouSnRoGXAR5FRW+k9DIkaKfAK6y4cltKL0OCDJxCwfsTkvBx0ikKo3aBUwR4lFi5PaWfpKbtAqcI8Ih+ltJPUtP/hf7RG7y3GZ9O6SgpiXB5qz/wyIt5PqWnpKTndS+zL/CIaG//1iHbRMnk+0ODWgUuGAi8JsYv2KtJm/ELLWsGnKjYsbv9PxW4DAge0XOM2xJT4CCXNUshPEj3kUU6IByiPmeoL/DOMd6QqAJJ8O5Ap7OBUFcjz6MME0fW3neSqN0W7YD0E4FHzOARPYU45zv1+gS+I159maNKq7koNq/RM8jEJjpfNH/sqBzUbm0floRS/0j/6/v6sD/wyMb+V7xX1YsrP/z8FccURnmTrd3ntMxloTBZ0iqA2vx1OFb1tmOyULvd4llDCdBj0ca6WMAj2sj4SDwOg16T/pea1xIuHY6FqPJ2a9k6YwsNvZYB+mYC7P2tZY/bXqFLdLxmN2+3S6/di6/rkd5f7LeDDPADtA/HPejnkSh9DtTU8ygF3Qu8tHe1rQDSs4R++u630dRdKVLepZCaBsnYAamZff7Cu3fz8+0E7qW99/J2U/ul+DbRoU3SVg2kd8qYHuiHzjLOguktrkThItUVqH4cPL0FtRdOI8Obi+z0gojt8c0S7e9Sd7ESe8p/hV/uewBN/tPiWT7hGwqEVhDRkTKZ95b/GoFAENlpBUyebPZ+YraNnJOKcwex/ciz2PHJekgeP7z6xgLxjXnkXf5iQA3H8BQvItpplPagN/WcWOefn9f3lsNqSC5pINBTxhz+nLwEZHH1yGBsNh4fcEehPQCqa6ATY7396YeopoFWcDPMmE/qei6haMWtwmPLkyulAZ9cqZ+rH6mEOXSXv0Rl0WWQXQmVOtOSz8pYgDMDHhEl59KTk142H6hKUMU4yCtjVWlQnhkbrYQ5rg4XTZaQat0EQgPS76exnmx24NksuvRD8c02JMcEYzLJEkI/FvqNPRyL4yL/jlTKhNW0TegVdoNHbuzfw440+UuTjgl9Bp0Aj4dW0J6ucSKl+4TohNBjXDMHiQQ4VOPwNcanUhjERaeE/urj/QE5QQGqGS9AjA9lT1HPRIzQW3UiPyJbIAgJcCO0pwunaGAqE/qqTvSHZIsEovUm2i7+9RQ2/dLrQk/nrPgx2ULBKM/iVhGvpCiS/lfox7L8INliAcndfZjxXUhlX+vULvTxUDzhgJPg6UQzBfTIlMOXOHBHhB422/Hjso2C01woPTGCHmQQuMRAC4h2z4MNGzY4AR4RzY4/wnjuJeSNlon2PoIYVweSFTydyHzShPa/MD4/TEE7L9o3x6nhQnawcWRKKGX7SsZPI8G80CSiNtGeK0X7HBsi5EFoLGVDrWU8kfGPEOe8XhJQi5B/omhPk9MCyIPYeApUaRmEtkj6HoZOddJpMZ6NE/KfGyxB5CRQBt2xlHAzCdqjT19NwhixXci1SMj5zGD0tN7kTiIFUfnSm4LpqcS04xw9z5OekZo/CPJQfvwuxlsZ70jGMdqN5CRS1G8EU9rLtdBSD4npwX+FNlyzBlqGHCWY0qZCB62eEblUwAslUuCfBT8n3qNtlWdCe4xOseArxPt5AnDaypYSVVRh4sgLbBBMQNFCKC3NlIvXF4eax/T/AgwAHTTdbqg0JioAAAAASUVORK5CYII="},Wlaz:function(t,e,i){"use strict";(function(t){var n=i("v2ns"),s=(i.n(n),i("9WMf")),c=i("rgBf"),a=i("wgE2"),o=i("/gXl"),A=i("Au9i");i.n(A);e.a={name:"manList",data:function(){return{gender:0,dataList:[],manNewBookList:[],manHotBookList:[],manBetterBookList:[],manFreeBookList:[],sweiperList:[]}},components:{mySwiper:s.a,fineQuality:c.a,newBook:a.a,freeWeek:o.a},activated:function(){var e=sessionStorage.getItem("manList");t(".wrapper").scrollTop(parseInt(e))},created:function(){var t=this;this.gender=this.$route.query.id,this.manPageList();var e=this.getCode();e&&e.state&&"follow"==e.state&&this.login(function(e){"success"==e&&t.follow()})},methods:{manPageList:function(){var t=this;this.$http({method:"get",url:this.apiUrl.novelApiLibrary,params:{gender:this.gender}}).then(function(e){if(200==e.status){e.data.novelLists;t.sweiperList=e.data.novelItemList,t.dataList=e.data.novelLists}}).catch()},follow:function(){var t=Date.parse(new Date),e=this.getmd5(localStorage.getItem("uuid")+t).toUpperCase();this.$http({method:"get",url:this.apiUrl.novelUserFollow,headers:{times:t,sign:e}}).then(function(t){if(200==t.status){var e=t.data;1==e.code&&Object(A.MessageBox)({title:"关注成功",message:e.content,confirmButtonText:"去看书"})}}).catch()}},mounted:function(){}}}).call(e,i("7t+N"))},YkDm:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvCAYAAADixZ5gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3MEJGRDg3RTIzRTExRThCQTUwQjY3MDhBNDgwNkEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3MEJGRDg4RTIzRTExRThCQTUwQjY3MDhBNDgwNkEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjcwQkZEODVFMjNFMTFFOEJBNTBCNjcwOEE0ODA2QTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjcwQkZEODZFMjNFMTFFOEJBNTBCNjcwOEE0ODA2QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vjNqTAAAS9ElEQVR42uxd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"},dqaw:function(t,e){},jp7P:function(t,e){},"m5+s":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvCAYAAADixZ5gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI1QjBDMkY2REMxNDExRTg5NkY5RjZEQTM0OTM3MDYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1QjBDMkY3REMxNDExRTg5NkY5RjZEQTM0OTM3MDYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjVCMEMyRjREQzE0MTFFODk2RjlGNkRBMzQ5MzcwNjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjVCMEMyRjVEQzE0MTFFODk2RjlGNkRBMzQ5MzcwNjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7+5O3PAAAQ6klEQVR42uxd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"},oM40:function(t,e){},wgE2:function(t,e,i){"use strict";var n={name:"newBook",data:function(){return{newBookList:[],title:"",betterMoreList:[]}},created:function(){this.noType=this.$attrs.noType,this.genders(this.$attrs.gender,this.$attrs.noType),this.newBookList=this.$attrs.data.novelItemList,this.title=this.$attrs.data.name,console.log(this.noType)},methods:{newMoreList:function(){this.$router.push({path:"/moreList",query:{type:this.noType}})},goNovelDetail:function(t,e){this.$router.push({path:"/bookDetail",query:{id:t,type:e}})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"newBook"},[i("div",{staticClass:"manTitle"},[i("span",{staticClass:"kind"},[t._v(t._s(t.title))]),t._v(" "),i("span",{staticClass:"moreList",on:{click:t.newMoreList}},[t._v("更多>")])]),t._v(" "),i("div",{staticClass:"books"},t._l(t.newBookList,function(e){return i("div",{staticClass:"content clearfloat",on:{click:function(i){t.goNovelDetail(e.id,e.type)}}},[i("div",{staticClass:"bookLeft"},[i("img",{attrs:{src:e.cover,alt:""}})]),t._v(" "),i("div",{staticClass:"bookRight"},[i("p",{staticClass:"bookname"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"bookDescribed"},[t._v(t._s(e.summary))]),t._v(" "),i("div",{staticClass:"bookInfo clearfloat"},[i("div",{staticClass:"author"},[t._m(0,!0),t._v(" "),i("span",{staticClass:"man"},[t._v("作者："+t._s(e.author))])]),t._v(" "),i("div",{staticClass:"described"},[i("span",[t._v(t._s(e.typename))]),t._v(" "),i("span",[t._v("完结")])])])])])})),t._v(" "),i("div",{staticClass:"lineBg"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{attrs:{src:i("53nh"),alt:""}})])}]};var c=i("VU/8")(n,s,!1,function(t){i("dqaw")},null,null);e.a=c.exports},wrf3:function(t,e){},zUUJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Wlaz"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"boy"},[i("div",{staticClass:"manList"},[i("my-swiper",{attrs:{lists:t.sweiperList,gender:t.gender}}),t._v(" "),t._l(t.dataList,function(e){return i("div",[3==e.style?i("new-book",{attrs:{data:e,noType:e.type,gender:t.gender}}):6==e.style?i("fine-quality",{attrs:{data:e,noType:e.type,gender:t.gender}}):4==e.style?i("free-week",{attrs:{data:e,noType:e.type,gender:t.gender}}):t._e()],1)})],2),t._v(" "),i("wv-loadmore",{attrs:{type:"line",text:"大蜜小说"}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qrcode"},[e("p",[this._v('扫描关注"大蜜小说"公众号，精彩小说看不停')]),this._v(" "),e("img",{attrs:{src:i("TUKC")}})])}]};var c=function(t){i("oM40")},a=i("VU/8")(n.a,s,!1,c,null,null);e.default=a.exports}});
//# sourceMappingURL=2.929f84aba6105df319e2.js.map