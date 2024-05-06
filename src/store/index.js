import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    purchaseRequests: [],
    requestLines: []
  },
  mutations: {
    SET_PURCHASE_REQUESTS(state, requests) {
      state.purchaseRequests = requests;
    },
    SET_REQUEST_LINES(state, lines) {
      state.requestLines = lines;
    }
  },
  actions: {
    fetchPurchaseRequests({ commit }) {
      axios.get('/api/purchase_requests/')
        .then(response => commit('SET_PURCHASE_REQUESTS', response.data))
        .catch(error => console.error('Error fetching purchase requests:', error));
    },
    fetchRequestLines({ commit }) {
      axios.get('/api/request_lines/')
        .then(response => commit('SET_REQUEST_LINES', response.data))
        .catch(error => console.error('Error fetching request lines:', error));
    }
  }
});
