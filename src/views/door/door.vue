<template>
  <div class="door">
    <div class="bigBG" :class="themeIndex===1?'isShowBG':''" :style="'background:url('+'https://w.wallhaven.cc/full/43/wallhaven-43yzd9.jpg'+') no-repeat center/100% auto'">
    </div>
    <div class="bigBG" :class="themeIndex===2?'isShowBG':''" :style="'background:url('+'https://w.wallhaven.cc/full/0p/wallhaven-0pjqpj.jpg'+') no-repeat center/100% auto'">
    </div>
    <div class="bigBG" :class="themeIndex===3?'isShowBG':''" :style="'background:url('+'https://w.wallhaven.cc/full/r7/wallhaven-r71yoj.jpg'+') no-repeat center/100% auto'">
    </div>
    <div class="bigBG" :class="themeIndex===4?'isShowBG':''" :style="'background:url('+'https://w.wallhaven.cc/full/2e/wallhaven-2e5e6x.jpg'+') no-repeat center/100% auto'">
    </div>
    <div class="horse-light">
      <div class="item" @mouseover="selectTheme(1)">
        <router-link :to="{name: 'paishe'}">
          <span :class="themeIndex===1?'showTitle':''">拍摄</span>
        </router-link>
        <img src="../../assets/images/shoot.png" alt="">
      </div>
      <div class="item" @mouseover="selectTheme(2)">
        <router-link :to="{name: 'changjing'}">
          <span :class="themeIndex===2?'showTitle':''">场景</span>
        </router-link>
        <img src="../../assets/images/scenery.png" alt="">
      </div>
      <div class="item" @mouseover="selectTheme(3)">
        <router-link :to="{name: 'changjing'}">
          <span :class="themeIndex===3?'showTitle':''">后期</span>
        </router-link>
        <img src="../../assets/images/clip.png" alt="">
      </div>
      <div class="item" @mouseover="selectTheme(4)">
        <router-link :to="{name: 'changjing'}">
          <span :class="themeIndex===4?'showTitle':''">设备</span>
        </router-link>
        <img src="../../assets/images/camera.png" alt="">
      </div>
    </div>
  </div>
</template>

<script src="./door.ts" lang="ts"></script>