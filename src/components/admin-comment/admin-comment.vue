<template>
  <div class="adminComment">
    <el-radio-group v-model="radio" @change="change">
      <el-radio :label="1">全部</el-radio>
      <el-radio :label="2">待审核</el-radio>
      <el-radio :label="3">已审核</el-radio>
    </el-radio-group>
    <div class="listContainer">
      <ul class="list">
        <li v-for="(item, index) in commentList" :key="index">
          <div class="head">
            <el-tag>{{item.typeLabel}}</el-tag>
            <el-tag type="danger" v-show="item.status==='yishenhe'">已审核</el-tag>
            {{item.articleTitle}}
          </div>
          <div class="body">
            内容：{{item.content}}
          </div>
          <div class="foot">
            <el-button @click="delComment(item.id)" v-if="item.status==='daishenhe'">删除</el-button>
            <el-button type="primary" @click="pass(item)" v-if="item.status==='daishenhe'">通过</el-button>
            <el-button type="warning" @click="goBack(item)" v-if="item.status==='yishenhe'">撤销</el-button>
          </div>
        </li>
      </ul>
    </div>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="sizes, prev, pager, next"
      :page-size="15"
      :page-sizes="[15, 30, 45, 60]"
      :total="total">
    </el-pagination>
  </div>
</template>

<script src="./admin-comment.ts" lang="ts"></script>

<style lang="less">
.adminComment{
  height: 100%;
  .list{
    padding: 0;
    border: 1px solid #e6e6e6;
    overflow-y: scroll;
    margin-bottom: 40px;
  }
  .el-pagination{
    position: absolute;
    bottom: 5px;
  }
  li{
    list-style-type: none;
    border-bottom: 1px solid #e6e6e6;
    padding: 3px;
  }
  .head{
    text-align: left;
    padding: 0;
    width: auto;
    border-bottom: none;
    font-weight: bold;
    height: 25px;
    line-height: 25px;
    .el-tag{
      height: 25px;
      line-height: 25px;
    }
  }
  .body{
    padding: 5px 0;
  }
  .foot{
    text-align: right;
    .el-button{
      width: 35px;
      height: 20px;
      text-align: center;
      padding: 0;
      margin-left: 5px;
      font-size: 12px;
    }
  }
}
</style>