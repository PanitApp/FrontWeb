import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { apolloClient } from '@/vue-apollo'
import { LOGGED_IN_USER } from '@/graphql/queries'
import { LOGIN_USER, REGISTER_USER } from '@/graphql/mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state: {
    isLogged: false,
    user: {},
    token: null
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    LOGIN_USER (state, user) {
      state.isLogged = true
      state.user = { ...user }
    },
    LOGOUT_USER (state) {
      state.isLogged =false
      state.token = '' && localStorage.removeItem('apollo-token')
      state.user={}
    }
  },
  actions: {
    async register ({ commit, dispatch }, authDetails) {
      try {
        const { data } = await apolloClient.mutate({ mutation: REGISTER_USER, variables: { ...authDetails } })
        const token = JSON.stringify(data.createUser.token)
        commit('SET_TOKEN', token)
        localStorage.setItem('apollo-token', token)
        dispatch('setUser')
      } catch (e) {
        console.log(e)
      }
    },
    async login ({ commit, dispatch }, authDetails) {
      try {
        const { data } = await apolloClient.mutate({ mutation: LOGIN_USER, variables: { ...authDetails } })
        const token = data.login.access
        commit('SET_TOKEN',token)
        localStorage.setItem('apollo-token', token)
        dispatch('setUser',authDetails.username)
      } catch (e) {
        console.log(e)
      }
    },
    async setUser ({ commit },username) {
    console.log(username)
    const { data } = await apolloClient.query({ query: LOGGED_IN_USER, variables:{username} })
    console.log(data)
    commit('LOGIN_USER', data.getUsuarioByUsername[0])
    },
    async logOut ({ commit}) {
      commit('LOGOUT_USER')
    }
  },
  getters: {
    //returnLogState: (state) => {
      //return state.isLogged;
    //},
    isAuthenticated: state => !!state.token,
    authStatus: state => state.isLogged,
    user: state => state.user
  },
  modules: {},
})
