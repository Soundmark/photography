<template>
  <div class="publish">
    <div class="article">
      <div class="head">
        <h1>{{state.title}}</h1>
        <div class="publisher">作者：<input type="text" v-model="state.publisher"></div>
      </div>
      <VueShowdown :markdown="state.content" class="markdown"/>
    </div>
    <div class="editPart">
      <el-button type="primary" v-if="isPublish" @click="handleSubmit">发布</el-button>
      <el-button type="primary" v-if="!isPublish" @click="handleUpdate">更新</el-button>
      <div class="title">
        <label>主题：<input type="text" placeholder="输入标题" v-model="state.title"></label>
      </div>
      <el-select v-model="state.type" :disabled="!isPublish">
        <el-option label="拍摄" value="paishe"></el-option>
        <el-option label="场景" value="changjing"></el-option>
        <el-option label="后期" value="houqi"></el-option>
        <el-option label="设备" value="shebei"></el-option>
      </el-select>
      <div class="introduction">
        <label>简介：<br><textarea v-model="state.introduction"></textarea></label>
      </div>
      <div class="uploadImg">
        <el-upload
        :action="url+'/admin/data/uploadCover'"
        :on-change="handleChange"
        list-type="picture-card"
        :on-success="handleSuccess"
        >
          <i class="el-icon-plus"></i>
          <div slot-scope="{file}" slot="file">
            <img :src="file.url" alt="" class="previewImg">
            <span
              class="upload-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <!-- <input type="text" class="rightSet" placeholder="rightset" v-model="state.rightSet"> -->
      <textarea v-model="state.content" class="editor"></textarea>
    </div>
  </div>
</template>

<script src="./publish.ts" lang="ts"></script>

<style lang="less">
.article{
  height: 540px;
  overflow-y: scroll;
}
.markdown{
  width: 800px;
  margin: 0 auto;
}
.head{
  width: 800px;
  margin: 0 auto;
  border-bottom: 1px solid #e6e6e6;
  h1{
    text-align: center;
  }
  .publisher{
    text-align: left;
  }
}
.editPart{
  border-top: 1px solid black;
  position: fixed;
  bottom: 5px;
  width: 100%;
  height: 200px;
  .title{
    position: absolute;
    bottom: 165px;
    left: 50%;
    transform: translateX(-50%);
    input{
      width: 680px;
    }
  }
  .el-select{
    left: 80px;
  }
  .introduction{
    position: absolute;
    left: 80px;
    top: 40px;
    textarea{
      width: 250px;
      height:130px;
    }
  }
  .uploadImg{
    position: absolute;
    width: 240px;
    height: 160px;
    bottom: 5px;
    right: 100px;
    text-align: center;
    span{
      display: inline-block;
      height: 160px;
      line-height: 160px;
    }
    .el-upload{
      width: 240px;
      height: 160px;
    }
    .el-upload-list__item{
      width: 240px;
      height: 160px;
    }
    .previewImg{
      width: 240px;
      height: 160px;
    }
    .el-dialog__header{
      height: 0;
    }
    .upload-delete{
      font-size: 36px;
      position: relative;
      bottom: 170px;
      display: none;
    }
    .previewImg:hover + .upload-delete,
    .upload-delete:hover{
      display: inline-block;
    }
  }
  .rightSet{
    position: absolute;
    right: 100px;
    top: 5px;
  }
  .editor{
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    height: 150px;
    width: 800px;
  }
}
</style>