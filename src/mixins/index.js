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
      md5.update(str);
      return md5.digest('hex');
    },
    /*获取code*/
    getCode(str){
      let url=str||window.location.href;
      let baseurl=url.split('#')[0];
      let hash=baseurl.split('?')[1];
      let hasharr=hash.split('&');
      let query={};
      hasharr.forEach((item,index)=>{
        query[item.split('=')[0]]=item.split('=')[1];
      });
      if(query.state){
        store.dispatch({
          type: 'userCodeChange',
          val: query.code,
        });
      }else{
        store.dispatch({
          type: 'codeChange',
          val: query.code,
        });
      }
      return query;
    },
    /*登录*/
    login(Vue, code) {
      console.log(Vue.apiUrl.login);
      console.log(this.apiUrl.login);
      Vue.$http({
        method: 'get',
        url: this.apiUrl.login,
        params: {
          code: code,
        }
      }).then(res => {
        console.log(res);
        var data = res.data;

      }).catch(error => {
        console.log(error);
      });
    },
    /*用户授权*/
    authorlogin() {
      this.$http({
        method: 'get',
        url: this.apiUrl.authorlogin,
        params: {
          code: this.$store.state.userCode,
        }
      }).then(res => {
        console.log(res);
        var data = res.data;

      }).catch(error => {
        console.log(error);
      });
    },
  }

};
export default mixin;

