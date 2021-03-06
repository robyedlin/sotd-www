function item () {
  return {
    contracts: [],
    socials: [],
    tags: []
  }
}

const actions = {
  setItem ({ commit }, item) {
    commit('SET_ITEM', item)
  },
  resetItem ({ commit }) {
    commit('RESET_ITEM')
  },
  resetViewMethod ({ commit }) {
    commit('RESET_VIEW_METHOD')
  },
  setViewMethod ({ commit }, method) {
    commit('SET_VIEW_METHOD', method)
  }
}

const getters = {
  item: state => {
    return state.item
  },
  relatedItems: state => {
    return state.item.relatedDapps
  },
  viewMethod: state => {
    return state.viewMethod
  }
}

const mutations = {
  SET_ITEM (state, item) {
    state.item = item
  },
  RESET_ITEM (state) {
    state.item = item()
  },
  RESET_VIEW_METHOD (state) {
    state.viewMethod = ''
  },
  SET_VIEW_METHOD (state, method) {
    state.viewMethod = method
  }
}

const state = () => ({
  item: item(),
  viewMethod: 'direct'
})

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state
}
