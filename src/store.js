import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      date: new Date().toISOString().substr(0, 10)
    },
    favoriteInfo: []
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
    },
    favoriteInfosTitle (state) {
      return state.favoriteInfo.title
    },
    favoriteInfoImage (state) {
      return state.favoriteInfo.image
    },
    favoriteInfo (state) {
      return state.favoriteInfo.dateCreated
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    },
    newData (state, favoriteInfo) {
      return (state.favoriteInfo = favoriteInfo)
    }
  },
  actions: {
    userLogIn ({ commit }, user) {
      commit('storeUser', user)
      router.replace('/favorites')
    },
    nasaFavorite ({ commit }, favoriteInfo) {
      commit('nasaFavorite', favoriteInfo)
    }
  }

})
