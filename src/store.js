import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: ''
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userName (state) {
      return state.user.name
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
      router.replace('/')
    }
  }

})
