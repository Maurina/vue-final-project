import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Guest',
      date: new Date().toISOString().substr(0, 10)
    },
    favoritesList: {
      title: '',
      image: '',
      description: '',
      dateCreated: ''
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
    },
    favoritesList (state) {
      return state.favoritesList
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    },
    storeFavoriteList (state, favoritesList) {
      return (state.favoritesList = favoritesList)
    }

  },
  actions: {
    userLogIn ({ commit }, user) {
      commit('storeUser', user)
      router.replace('/favorites')
    }

  }

})
