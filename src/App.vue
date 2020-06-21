<template>
  <div id="app">
    <div class="mask" v-if="showMask"></div>
    <nav-ball></nav-ball>
    <login v-if="showLogin" @closeLogin="close"></login>
    <router-view></router-view>
    <div class="login" v-if="showNav"
    :style="isLogin?'background-color:rgb(0, 128, 128)':''">
      <i class="el-icon-user" @click="userHandle"></i>
    </div>
    <div class="web-info" v-if="showNav">
      <span>info</span>
      <p>粤ICP备20039570号-1</p>
    </div>
  </div>
</template>

<script>
import navBall from './components/navball/navball.vue';
import login from './components/login/login.vue';
import './assets/css/markdown.less'
export default {
  name: 'app',
  data() {
    return {
      showMask: false,
      showLogin: false
    }
  },
  computed: {
    isLogin(){
      return this.$store.state.isLogin
    },
    showNav(){
      return this.$store.state.showNav
    }
  },
  created(){
    if(sessionStorage.getItem('store')){
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
      sessionStorage.removeItem('store')
    }
    window.addEventListener('beforeunload', ()=>{
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
  methods: {
    userHandle(){
      if(this.isLogin){
          this.$confirm('退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(()=>{
          localStorage.removeItem('token')
          this.$store.commit('logoutHandle')
        })
      }else{
        this.showLogin = true
        this.showMask = true
      }
    },
    close(){
      this.showMask = false
      this.showLogin = false
    }
  },
  components: {
    navBall,
    login
  }
}
</script>

<style lang="less">
@import url('assets/css/index.css');
.login{
  position: absolute;
  bottom: 10px;
  left: 5px;
  height: 20px;
  width: 20px;
  background-color: rgb(159, 160, 160);
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: white;
}
.web-info{
  position: absolute;
  height: 20px;
  left: 30px;
  bottom: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 18px;
  span{
    display: inline-block;
    color: white;
    width: 40px;
    height: 20px;
    border-radius: 3px;
    position: absolute;
    cursor: default;
    left: 0;
    top: 0;
    background-color: rgb(159, 160, 160);
  }
  p{
    margin: 0;
    width: 160px;
    height: 20px;
    display: inline-block;
    visibility: hidden;
    opacity: 0;
    font-size: 14px;
    line-height: 20px;
    margin-left: 45px;
    transition: .5s;
    background-color: white;
    position: absolute;
    top: 0;
    border-radius: 3px;
  }
}
.web-info:hover{
  p{
    opacity: 1;
    visibility: visible;
    transition: .5s;
  }
}
</style>
