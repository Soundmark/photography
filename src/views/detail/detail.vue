<template>
  <div>
    <div class="detail">
      <div class="head">
        <h1>{{state.title}}</h1>
        <div class="publisher">作者：小剩</div>
      </div>
      <VueShowdown :markdown="state.content" class="markdown"/>
    </div>
    <div class="BG" :style="'background:url('+'https://w.wallhaven.cc/full/4y/wallhaven-4ymdyx.jpg'+') no-repeat center/100% auto'"></div>
  </div>
</template>

<script src="./detail.ts" lang="ts"></script>

<style lang="less">
.detail{
  width: 800px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 5px 20px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 5px 0px black;
  margin: 5px 0 10px;
}
.web-message{
  position: relative;
  text-align: center;
  background-color: rgba(72, 137, 235, 0.5);
  border-radius: 5px;
  width: 842px;
  margin: 0 auto;
}
</style>