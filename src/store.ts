import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFormNewRuleVisible: false,
    rules: [],
  },
  mutations: {
    setFormNewRuleStatus(state, value) {
      Vue.set(state, 'isFormNewRuleVisible', value);
    },
    addNewRule(state: any, value) {
      state.rules.push(value);
    },
  },
  actions: {

  },
});
