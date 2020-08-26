<template>
  <div>
    <div class="detail">
      <div class="head">
        <h1>{{state.title}}</h1>
        <div class="publisher">作者：{{state.publisher}}</div>
        <div class="edit" v-if="isLogin">
          <router-link :to="{name: 'publish', params: {state}}">编辑</router-link>
        </div>
      </div>
      <VueShowdown ref="showdown" :markdown="state.content" class="markdown"/>
    </div>
    <comment :class="showComment?'showComment':''" @cancelComment="switchComment" :article="{id:state.id,title:state.title,type:state.type}"></comment>
    <div class="commentList">
      <div class="title">
        <p>留言区</p>
      </div>
      <div v-if="showCommentList">
        <ul>
          <li v-for="(item,index) in state.comments" :key="index">
            <div class="name">网友说：</div>
            <div class="content">{{item.content}}</div>
          </li>
        </ul>
      </div>
      <div v-else class="noComments">
        <p>暂无留言</p>
      </div>
    </div>
    <div class="tool">
      <button>点赞</button>
      <button @click="switchComment">留言</button>
    </div>
    <div class="BG" :style="'background:url('+'https://api.doglefts.cn/BG/detail.jpg'+') no-repeat center/100% auto'"></div>
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
  .edit{
    position: absolute;
    right: 25px;
    top: 89px;
    a{
      text-decoration: none;
    }
  }
}
.comment{
  z-index: 10;
  position: fixed;
  bottom: -130px;
  transition: 0.2s;
}
.showComment{
  bottom: 0;
  transition: 0.2s;
}
.commentList{
  position: relative;
  z-index: 9;
  background-color: rgba(255, 255, 255, 0.9);
  width: 840px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px 0px black;
  margin-bottom: 10px;
  .title{
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #e6e6e6;
    p{
      margin: 0;
      height: 40px;
      font-size: 18px;
      line-height: 40px;
    }
  }
  ul{
    padding-left: 0px;
    margin: 0;
  }
  li{
    list-style-type: none;
    padding: 5px 10px;
    border-bottom: 1px solid #e6e6e6;
    .name{
      font-weight: bold;
      height: 20px;
      line-height: 20px;
    }
    .content{
      padding: 5px 0;
    }
  }
  .noComments{
    text-align: center;
    p{
      height: 80px;
      line-height: 80px;
      margin: 0;
    }
  }
}
.tool{
  position: fixed;
  left: calc(50% - 480px);
  bottom: 50px;
  z-index: 9;
  button{
    display: block;
    margin: 5px 0;
    width: 45px;
    height: 30px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.4);
  }
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