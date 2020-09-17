<template>
  <div class="user">
    <el-tabs type="border-card">
      <el-tab-pane label="评论管理">
        <admin-comment></admin-comment>
      </el-tab-pane>
      <el-tab-pane label="统计分析"></el-tab-pane>
    </el-tabs>

    <div class="bigBG isShowBG BG">
      <div class="linear topright"></div>
      <div class="linear1 bottomright"></div>
      <div class="linear2 bottomright"></div>
      <div class="linear3 topright"></div>
    </div>
  </div>
</template>

<script src="./user.ts" lang="ts"></script>

<style lang="less">
.user{
  .el-tabs{
    width: 90%;
    height: 90%;
    background-color: #fff;
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .el-tabs__content{
    height: 90%;
  }
  .el-tab-pane{
    height: 100%;
  }
}
</style>