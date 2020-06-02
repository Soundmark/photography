<template>
  <div class="paishe" @mousemove="moveNav">
    <nav-ball @controlMoveNav = 'controlMoveNav(e,canMove)'></nav-ball>
    <el-row class="page">
      <el-col class="pageItem" v-for="(item, index) in dataList" :key="index">
        <div class="img"></div>
        <div class="title">
          <p>漫展美少女</p>
          <div>
            <p class="time">时间</p>
            <p class="like">点赞</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="BG" :style="'background:url('+'https://w.wallhaven.cc/full/0p/wallhaven-0pjqpj.jpg'+') no-repeat center/100% auto'"></div>
  </div>
</template>

<script src="./paishe.ts" lang="ts"></script>