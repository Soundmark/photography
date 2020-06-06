<template>
  <div class="navBall" @mouseover="activeNav"
  @mouseout="quitNav" @click="quitNavNow">
    <div class="navItem" v-for="(item) in navList" :key="item.id"
    :style="{left: showTool?item.x + 'px':'', top: showTool?item.y + 'px':'', opacity: showTool?1:'', transition: '0.5s'}"
    @click="setStopPropagation">
      <div v-if="item.type === 'nav'" class="nav">{{item.name}}</div>
      <div class="search" v-else-if="item.type === 'search'" :class="showSearch?'search-active':''"
      @mouseover="activeSearch" @mouseout="hideSearch">
        <input type="search" :class="showSearch?'input-active':''"/>
        <button>搜索</button>
      </div>
      <div v-else-if="item.type === 'backtop'" class="backtop">
        <el-backtop :visibility-height="0"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script src="./navball.ts" lang="ts"></script>

<style lang="less" scoped>
.navBall{
  position: fixed;
  right: 100px;
  bottom: 100px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  z-index: 1000;
  border: 1px solid black;
  background-color: blueviolet;
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
      border: 1px solid black;
      background-color: blueviolet;
      text-align: center;
      line-height: 45px;
    }
    .search{
      position: relative;
      border-radius: 22.5px;
      border: 1px solid black;
      width: 45px;
      transition: 0.5s;
      right: 0px;
      text-align: right;
      background-color: rgb(239, 239, 239);
      input{
        border-radius: 2px;
        position: absolute;
        border: none;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;
        outline: none;
        width: 0px;
        padding: 0;
      }
      .input-active{
        width: 170px;
        transition: 0.5s;
        border: 1px solid #e6e6e6;
        transition-property: width;
      }
      button{
        height: 45px;
        width: 45px;
        border-radius: 22.5px;
        outline: none;
        border: none;
      }
    }
    .search-active{
      width: 220px;
      right: 175px;
      transition: 0.5s;
    }
    .el-backtop{
      right: auto !important;
      bottom: auto !important;
      width: 45px;
      height: 45px;
    }
  }
}
</style>