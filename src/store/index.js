import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {
    setUsername(state, data) {
      state.username = data;
    },
    setFullname(state, data) {
      state.fullname = data;
    }
  },
  actions: {},
  modules: {}
});
