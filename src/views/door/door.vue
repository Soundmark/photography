<template>
  <div class="door">
    <div class="bigBG isShowBG">
      <div class="linear topright"></div>
      <div class="linear1 bottomright"></div>
      <div class="linear2 bottomright"></div>
      <div class="linear3 topright"></div>
      <el-carousel ref="carousel" type="card" :interval="4000" @change="changePic" :autoplay="false">
        <el-carousel-item>
          <router-link class="link" :to="{name: 'paishe'}" v-show="themeIndex===0"></router-link>
          <img src="https://api.doglefts.cn/BG/paishe.jpg">
          <div class="des">
            <h3>日常摄影</h3>
            <p>随便拍拍</p>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <router-link class="link" :to="{name: 'changjing'}" v-show="themeIndex===1"></router-link>
          <img src="https://api.doglefts.cn/BG/changjing.jpg">
          <div class="des">
            <h3>拍摄场景</h3>
            <p>记录特殊的拍摄场景</p>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <router-link class="link" :to="{name: 'houqi'}" v-show="themeIndex===2"></router-link>
          <img src="https://api.doglefts.cn/BG/houqi.jpg">
          <div class="des">
            <h3>修图调色</h3>
            <p>亚洲邪术</p>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <router-link class="link" :to="{name: 'shebei'}" v-show="themeIndex===3"></router-link>
          <img src="https://api.doglefts.cn/BG/shebei.jpg">
          <div class="des">
            <h3>设备测评</h3>
            <p>有哪样搞哪样</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="horse-light">
      <div class="item" @click="selectTheme(0)">
        <span :class="themeIndex===0?'showTitle':''">拍摄</span>
      </div>
      <div class="item" @click="selectTheme(1)">
        <span :class="themeIndex===1?'showTitle':''">场景</span>
      </div>
      <div class="item" @click="selectTheme(2)">
        <span :class="themeIndex===2?'showTitle':''">后期</span>
      </div>
      <div class="item" @click="selectTheme(3)">
        <span :class="themeIndex===3?'showTitle':''">设备</span>
      </div>
    </div>
    <div class="webInfo">
      <a href="http://beian.miit.gov.cn" target="_blank">粤ICP备20039570号-1</a>
    </div>
  </div>
</template>

<script src="./door.ts" lang="ts"></script>