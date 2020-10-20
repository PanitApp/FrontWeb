import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    user: {
      id: -1,
      name: null,
      username: null,
      email: null,
      Rol: null,
    }
  },
  mutations: {
    CHANGE_LOG_STATE(state) {
      state.isLogged = !state.isLogged;
    },
    RESET_USER(state) {
      state.user.id = -1;
      state.user.name = null;
      state.user.username = null;
      state.user.email = "";
    },
    STORE_USER(state, user) {
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.username = user.username;
      state.user.email = user.email;
      state.user.Rol= user.Rol;
    },
    RESTART_LOGIN(state) {
      state.isLogged = false;
    },
  },
  actions: {
    changeLogState({ state, commit }) {
      commit("CHANGE_LOG_STATE", state);
    },
    resetUser({ state, commit }) {
      commit("RESET_USER", state);
      commit("RESTART_LOGIN", state);
    },
    storeUser({ commit }, user) {
      commit("STORE_USER", user);
    },
  },
  getters: {
    returnLogState: (state) => {
      return state.isLogged;
    },
    returnHysState: (state) => {
      return state.stateH;
    },
    returnHysProv: (state) => {
      return state.ProvH;
    },
    returnView: (state) => {
      return state.currentView;
    },
    returnUser: (state) => {
      if (!state.isLogged) {
        return "There is no logged user";
      } else {
        return state.user;
      }
    },
    returnSearchedValue: (state) => {
      if (state.searchedValue == "") {
        return "There is no searched value";
      } else {
        return state.searchedValue;
      }
    },
  },
})
