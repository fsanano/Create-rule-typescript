import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFormNewRuleVisible: true,
    rules: [],
  },
  mutations: {
    setFormNewRuleStatus(state, value) {
      Vue.set(state, 'isFormNewRuleVisible', value);
    },
    addNewRule(state, rule) {
      // tslint:disable-next-line
      state.rules.push(rule);
    },
  },
  actions: {

  },
});
