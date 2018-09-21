import Vue from 'vue'
import store from '../store';

export default function wxConfig({title = '', desc = '', link = '', imgUrl = ''} = {}) {
  title = title || `您的好友${store.state.userInfo.nickName||'DA蜜'}邀请您一起关注大蜜小说~`; // 分享标题
  desc = desc || '关注DA蜜蜜~更多精品小说等你来撩~';// 分享描述
  link = link || location.href.split('#')[0];// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  imgUrl = imgUrl || 'http://iao55.top/novel/test/logo.jpg'; // 分享图标
  Vue.$http({
    method: 'get',
    url: '/novel/wechat/configSign',
    params: {
      url: location.href.split('#')[0]
    }
  }).then(res => {
    console.log(res);
    var data = res.data;
    if (data.status == 1) {
      console.log('config start');
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.noncestr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名
        jsApiList: [
          'checkJsApi',
          'chooseWXPay',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'onMenuShareQQ'
        ]// 必填，需要使用的JS接口列表
      });
      wx.ready(function () {
        console.log('wxconfig success');
        /*检测是否支持js接口*/
        wx.checkJsApi({
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function (res) {
            // 以键值对的形式返回，可用的api值true，不可用为false
            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            let isAppMsg = res.checkResult.updateAppMessageShareData;
            let isTimeLine = res.checkResult.updateTimelineShareData;
            let ua=navigator.userAgent;
            let isAdr=ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
            if (isAppMsg&&!isAdr) {
              console.log('new share');
              wx.updateAppMessageShareData({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                success:function(){
                  // console.log('分享成功');
                },
                complete: function (res) {
                  // console.log('分享开始');
                }
              });
              wx.updateTimelineShareData({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                success:function(){
                  // console.log('分享成功');
                },
                complete: function (res) {
                  // console.log('分享开始');
                }
              });
            } else {
              console.log('old share');
              wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                success:function(){
                  // console.log('share success');
                },
                complete: function (res) {
                  // console.log('share started');
                }
              });
              wx.onMenuShareTimeline({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                success:function(){
                  // console.log('share success');
                },
                complete: function (res) {
                  // console.log('share started');
                }
              });
            }
          }
        });
      });
      wx.error(function (res) {
        // console.log('wxconfig fail');
        // console.log(res);
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      });
    }
  }).catch(error => {
    console.log(error);
  });
}
Vue.prototype.$wxConfig = wxConfig;
