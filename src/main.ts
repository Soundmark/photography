import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import global from './utils/global'

Vue.config.productionTip = false
Vue.prototype.$global = global

router.beforeEach((to, from, next)=>{
  if(localStorage.getItem('token')){
    store.state.isLogin = true
    next()
  }else{
    store.state.isLogin = false
    console.log(to)
    if(to.meta.needLogin){
      next('/')
    }else{
      next()
    }
   }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求头中加入token
axios.interceptors.request.use((config: any)=>{
  if(localStorage.getItem('token')){
    config.headers.Authorizatior = 'Bearer ' + localStorage.getItem('token')
  }
  return config
}), (error: any)=>{
  return Promise.reject(error)
}

// 判断token是否过期
axios.interceptors.response.use((response: any)=>{
  return response
}), (error: any)=>{
  if(error.response){
    if(error.response.status===401){
      localStorage.removeItem('token')

    }
  }
}

