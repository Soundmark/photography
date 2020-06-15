<template>
  <div id="app">
    <nav-ball></nav-ball>
    <login></login>
    <router-view></router-view>
    <div class="web-info" v-if="this.$store.state.showNav">
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
  components: {
    navBall
  }
}
</script>

<style lang="less">
@import url('assets/css/index.css');
.web-info{
  position: fixed;
  width: 45px;
  height: 45px;
  left: 40px;
  bottom: 40px;
  border-radius: 22.5px;
  background-color: white;
  transition: .5s;
  text-align: center;
  line-height: 45px;
  font-size: 20px;
  span{
    display: inline-block;
    color: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(91, 168, 231);
  }
  p{
    margin: 0;
    display: none;
    font-size: 15px;
    margin-left: 45px;
    transition: .5s;
  }
}
.web-info:hover{
  width: 230px;
  transition: .5s;
  p{
    display: inline-block;
    transition: .5s;
  }
}
</style>
