import Vue from "vue";
import store from "../store";
import crypto from 'crypto';
import CryptoJS from 'crypto-js';

var mixin = {
  data: () => {
    return {
      apiUrl: {
        login: '/novel/user/login',
        getUser: '/novel/user/getUser',
        authorlogin: '/novel/user/authorlogin',
        novelApiLibrary: '/novel/api/library',
        novelApiCategory: '/novel/api/category',
        novelApiDetail: '/novel/api/detail',
        novelApiList: '/novel/api/list',
        novelApiContent: '/novel/api/content',
        novelApiCatalog: '/novel/api/catalog',
        novelCoinSurplus:'/novel/coin/surplus',
        novelCoinBuy:'/novel/coin/buy',
        novelCoinOrders:'/novel/coin/orders',
        novelUserFollow:'/novel/user/follow',
        novelUserSign:'/novel/user/sign',
        novelShelfAdd:'/novel/shelf/add',
        novelShelfQuery:'/novel/shelf/query',
        novelShelfDel:'/novel/shelf/del'
      }
    };
  },
  methods: {
    /*格式化时间*/
    formatDateTime(date, format) {
      if (!date) {
        return '';
      }
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      if (format == 'y-m-d h-m-s') {
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      } else if (format == 'h-m') {
        return ' ' + h + ':' + minute;
      } else if (format == 'y-m-d') {
        return y + '-' + m + '-' + d;
      } else if (format == 'y/m/d') {
        return y + '/' + m + '/' + d;
      } else if (format == 'ymd') {
        return y + '' + m + '' + d;
      }
    },
    /*MD5*/
    getmd5(str) {
      var md5 = crypto.createHash('md5');
      md5.update(str.toString());
      return md5.digest('hex');
    },
    /*获取code*/
    getCode() {
      try{
        let url = window.location.href;
        let baseurl = url.split('#')[0];
        let hash = baseurl.split('?')[1];
        let hasharr = hash.split('&');
        let query = {};
        hasharr.forEach((item, index) => {
          query[item.split('=')[0]] = item.split('=')[1];
        });
        if (query&&query.state&&query.state=='user') {
          store.dispatch({
            type: 'userCodeChange',
            val: query.code,
          });
        } else {
          store.dispatch({
            type: 'codeChange',
            val: query.code,
          });
        }
        return query;
      }catch (e) {

      }
    },
    /*登录*/
    login(callback) {
      try {
        let uuid=localStorage.getItem('uuid');
        if(uuid){
          callback('success');
          return false;
        }
        let query = this.getCode();
        this.$http({
          method: 'get',
          url: '/novel/user/login',
          params: {
            code: query.code,
          }
        }).then(res => {
          var data = res.data;
          if (data.code == 1) {
            localStorage.setItem('uuid', data.uuid);
            callback('success');
          }
        }).catch(error => {
          console.log(error);
        });
      } catch (e) {

      }
    },
    /*后退*/
    topBack(){
      console.log(window.history.length);
      if (window.history.length <= 2) {
        this.$router.push({path:'/'});
        return false
      } else {
        this.$router.go(-1)
      }
      // 上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
      // 如果上面都执行了 页面都跳走了，这个也就不用管了
      setTimeout(() => {
        this.$router.push({path:'/'})
      },500)
    }
  }

};
export default mixin;

