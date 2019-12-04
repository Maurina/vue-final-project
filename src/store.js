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
    favorite: []
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
      return state.favorite
    },
    favoriteDate (state) {
      return state.favoriteDate.date
    }
  },
  mutations: {
    storeUser (state, user) {
      return (state.user = user)
    },
    storeFavoriteList (state, favorite) {
      return (state.favorite.push(favorite))
    }

  },
  actions: {
    userLogIn ({ commit }, user) {
      commit('storeUser', user)
      router.replace('/favorites')
    },
    favoriteAdded ({ commit }, favorite) {
      commit('storeFavoriteList', favorite)
    }

  }

})
