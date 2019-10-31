import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: new Date().toISOString().substr(0, 10)
  },
  mutations: {

  },
  actions: {

  }
})
