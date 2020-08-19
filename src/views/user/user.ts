import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import axios from 'axios'
import Config from '@/utils/config'
import { Container, TimeSelect } from 'element-ui'

@Component({})
export default class User extends Vue {
commentList = []
radio = 2
status = 'daishenhe'
currentPage = 1
pageCount = 15
total = 0

mounted() {
 this.initComment() 
}

initComment(){
  const req = {
    currentPage: this.currentPage,
    pageCount: this.pageCount,
    status: this.status
  }
  axios.post(Config.url + '/admin/comment/getCommentList', req).then((res)=>{
    // console.log(res.data)
    this.total = res.data.count
    res.data.dataList.reverse()
    res.data.dataList.forEach((item: any)=>[
      item.typeLabel = this.$global.getTypeEnum(item.type)
    ])
    this.commentList = res.data.dataList
  })
}

pass(item: any){
  const req = {
    id: item.id,
    articleId: item.articleId,
    content: item.content,
    type: item.type,
    status: 'yishenhe'
  }
  axios.post(Config.url + '/admin/comment/passComment', req).then((res)=>{
    // console.log(res.data)
    this.$message({
      message: res.data,
      type: 'success'
    })
    this.initComment()
  })
}

delComment(id: number){
  const req = {id}
  axios.post(Config.url + '/admin/comment/deleteComment', req).then((res)=>{
    this.$message({
      message: res.data,
      type: 'success'
    })
    this.initComment()
  })
}

goBack(item: any){
  const req = {
    id: item.id,
    articleId: item.articleId,
    status: 'daishenhe',
    type: item.type
  }
  axios.post(Config.url + '/admin/comment/backComment', req).then(res=>{
    this.$message({
      message: res.data,
      type: 'success'
    })
    this.initComment()
  })
}

change(index: number){
  if(index===1){
    this.status = ''
  }else if(index===2){
    this.status = 'daishenhe'
  }else{
    this.status = 'yishenhe'
  }
  this.initComment()
}

handleSizeChange(val: number){
  this.pageCount = val
  this.initComment()
}

handleCurrentChange(val: number){
  this.currentPage = val
  this.initComment()
}
}