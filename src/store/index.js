import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search,
    actions
  }
});

export default store