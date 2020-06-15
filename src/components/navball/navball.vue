<template>
  <div class="navBall" @mouseover="activeNav"
  @mouseout="quitNav" @click="quitNavNow" v-if="this.$store.state.showNav">
    <div class="mainBall">
      <img :src="showTool?require('../../assets/images/menu_active.png'):require('../../assets/images/menu.png')" alt="">
    </div>
    <div class="navItem" v-for="(item) in navList" :key="item.id"
    :style="{left: showTool?item.x + 'px':'', top: showTool?item.y + 'px':'', opacity: showTool?1:'', transition: '0.5s'}"
    @click="setStopPropagation">
      <div v-if="item.type === 'nav'" class="nav">
        <router-link :to="{name: item.to}">
          <img :src="item.src" alt="item.name">
        </router-link>
      </div>

      <div class="search" v-else-if="item.type === 'search'" :class="showSearch?'search-active':''"
      @mouseover="activeSearch" @mouseout="hideSearch">
        <input type="search" :class="showSearch?'input-active':''"/>
        <button><img src="../../assets/images/search.png" alt=""></button>
      </div>

      <div v-else-if="item.type === 'backtop'" class="backtop">
        <img src="../../assets/images/backtop.png" alt="回到顶部" @click="backtopHandle">
      </div>
    </div>
  </div>
</template>

<script src="./navball.ts" lang="ts"></script>

<style lang="less" scoped>
.navBall{
  position: fixed;
  right: 150px;
  bottom: 140px;
  z-index: 1000;
  .mainBall{
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    z-index: 1005;
    img{
      height: 45x;
      width: 45px;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .navItem{
    position: absolute;
    z-index: 900;
    opacity: 0;
    left: 0;
    top: 0;
    .nav{
      height: 45px;
      width: 45px;
      border-radius: 50%;
      text-align: center;
      line-height: 45px;
      overflow: hidden;
      img{
        height: 45x;
        width: 45px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .search{
      position: relative;
      border-radius: 22.5px;
      width: 45px;
      height: 45px;
      transition: 0.5s;
      right: 0px;
      text-align: right;
      background-color: rgb(100, 224, 166);
      input{
        border-radius: 2px;
        position: absolute;
        border: none;
        left: 9px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;
        outline: none;
        width: 0px;
        padding: 0;
      }
      .input-active{
        width: 160px;
        transition: 0.5s;
        border: 1.5px solid black;
        transition-property: width;
      }
      button{
        height: 45px;
        width: 45px;
        border-radius: 22.5px;
        outline: none;
        border: none;
        position: relative;
        img{
          height: 45x;
          width: 45px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
        }
      }
    }
    .search-active{
      width: 220px;
      right: 175px;
      transition: 0.5s;
    }
    .backtop{
      width: 45px;
      height: 45px;
      img{
        height: 45x;
        width: 45px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
}
</style>