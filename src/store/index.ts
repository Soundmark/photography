import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav: true
  },
  mutations: {
    showNavHandle(state){
      state.showNav = true
      console.log(state.showNav)
    },
    hideNavHandle(state){
      state.showNav = false
    }
  },
  actions: {
  },
  modules: {
  }
})
