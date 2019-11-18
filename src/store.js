import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      date: new Date().toISOString().substr(0, 10)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userName (state) {
      return state.user.name
    },
    userDate (state) {
      return state.user.date
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    }
  },
  actions: {
    userLogIn ({ commit }, user) {
      commit('storeUser', user)
      router.replace('/favorites')
    }

  }

})
