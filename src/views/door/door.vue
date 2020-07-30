<template>
  <div class="door">
    <div class="bigBG" :class="themeIndex===1?'isShowBG':''" :style="'background:url('+'https://api.doglefts.cn/BG/paishe.jpg'+') no-repeat center/100% auto'">
    </div>
    <div ref="changjing" class="bigBG" :class="themeIndex===2?'isShowBG':''">
    </div>
    <div ref="houqi" class="bigBG" :class="themeIndex===3?'isShowBG':''">
    </div>
    <div ref="shebei" class="bigBG" :class="themeIndex===4?'isShowBG':''">
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
        <router-link :to="{name: 'houqi'}">
          <span :class="themeIndex===3?'showTitle':''">后期</span>
        </router-link>
        <img src="../../assets/images/clip.png" alt="">
      </div>
      <div class="item" @mouseover="selectTheme(4)">
        <router-link :to="{name: 'shebei'}">
          <span :class="themeIndex===4?'showTitle':''">设备</span>
        </router-link>
        <img src="../../assets/images/camera.png" alt="">
      </div>
    </div>
  </div>
</template>

<script src="./door.ts" lang="ts"></script>