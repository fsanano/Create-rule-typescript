import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFormNewRuleVisible: true,
  },
  mutations: {
    setFormNewRuleStatus(state, value) {
      Vue.set(state, 'isFormNewRuleVisible', value);
    },
  },
  actions: {

  },
});
