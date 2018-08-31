import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

// import dingStatus from './dingStatus.js';

export default new vuex.Store({
  /*全局状态*/
  state: {
    openId: '',
    code: '',
    userCode: '',
    userInfo: {},
  },
  /*局部状态*/
  modules: {
    // ding:dingStatus
  },
  getters: {},
  mutations: {
    codeChange(state, info) {
      state.code = info.val;
    },
    userCodeChange(state, info) {
      state.userCode = info.val;
    },
  },
  actions: {
    codeChange({commit}, info) {
      commit('codeChange', info);
    },
    userCodeChange({commit}, info) {
      commit('userCodeChange', info);
    },
  }
});
