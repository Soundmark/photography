<template>
  <div class="container">
    <div class="title">
      <h3>管理员登录</h3>
      <i class="el-icon-close" @click="close"></i>
    </div>
    <el-form :inline="true">
      <el-form-item label="账号">
        <el-input type="text" v-model="data.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="data.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./login.ts" lang="ts"></script>

<style lang="less" scoped>
.container{
  width: 300px;
  height: 250px;
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  text-align: center;
  box-shadow: 0 0 2px 0px black;
}
.title{
  position: relative;
  i{
    position: absolute;
    right: 15px;
    top: -5px;
  }
}
</style>