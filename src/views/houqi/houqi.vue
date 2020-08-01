<template>
  <div class="houqi">
    <el-row class="page">
      <el-col class="pageItem" v-for="(item, index) in dataList" :key="index">
        <router-link :to="{path: '/detail?type=houqi&id='+item.id}">
          <div class="img">
            <img :src="item.cover" alt="">
            <div class="introduction">
              <p>{{item.introduction?item.introduction:'点进去看看？'}}</p>
            </div>
          </div>
        </router-link>
        <div class="title">
          <router-link :to="{path: '/detail?type=houqi&id='+item.id}">
            <p>{{item.title}}</p>
          </router-link>
          <div>
            <p class="time">时间:{{item.time.slice(0,10)}}</p>
            <!-- <p class="like">点赞:{{item.likes}}</p> -->
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="bigBG isShowBG BG">
      <div class="linear topright"></div>
      <div class="linear1 bottomright"></div>
      <div class="linear2 bottomright"></div>
      <div class="linear3 topright"></div>
    </div>
  </div>
</template>

<script src="./houqi.ts" lang="ts"></script>