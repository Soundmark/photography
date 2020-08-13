<template>
  <div class="comment">
    <div class="head">
      <div class="input">
        <el-input type="textarea" resize="none" :maxlength="100" show-word-limit v-model="content" placeholder="请输入内容..."></el-input>
      </div>
      <div class="button">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary">留言</el-button>
      </div>
    </div>
  </div>
</template>

<script src="./comment.ts" lang="ts"></script>

<style lang="less" scoped>
.comment{
  width: 100%;
  background-color: #fff;
  padding: 5px 20px;
  .input{
    padding: 5px 0;
  }
  .button{
    padding: 5px 0;
    text-align: right;
  }
}
</style>