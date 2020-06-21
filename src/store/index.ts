import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav: true,
    isLogin: false
  },
  mutations: {
    showNavHandle(state){
      state.showNav = true
      console.log(state.showNav)
    },
    hideNavHandle(state){
      state.showNav = false
    },
    loginHandle(state){
      state.isLogin = true
    },
    logoutHandle(state){
      state.isLogin = false
    }
  },
  actions: {
  },
  modules: {
  }
})
