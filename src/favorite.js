import { dataMixin } from './views/dataMixin'

const state = {
  favorites: []
}

const mutations = {
  'SET_FAVORITES' (state, favorites) {
    state.favorites = favorites
  }
}

const actions = {
  addFavorites: ({ commit }, order) => {
    commit()
  },
  initFavorites: ({ commit }) => {
    commit('SET_FAVORITES', dataMixin)
  }
}

const getters = {
  favorites: state => {
    return state.favorites
  }
}

export default {
  state,
  actions,
  getters
}
