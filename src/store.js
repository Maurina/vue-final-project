import Vue from 'vue'
import Vuex from 'vuex'

import favorites from './favorite'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    favorites
  },
  state: {
    date: new Date().toISOString().substr(0, 10)
  },
  mutations: {

  },
  actions: {

  }
})
