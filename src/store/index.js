import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

// import dingStatus from './dingStatus.js';

export default new vuex.Store({
    /*全局状态*/
    state: {
      openId:'',
      userInfo:{},
    },
    /*局部状态*/
    modules:{
        // ding:dingStatus
    },
    getters:{

    },
    mutations:{
    },
    actions:{
    }
});
