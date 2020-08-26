import {Component, Prop} from 'vue-property-decorator'
import Vue from 'vue'
import axios from 'axios'
import Config from '@/utils/config'

@Component({})
export default class Comment extends Vue {
  @Prop()
  article: any
  content = ''

  cancel(){
    this.$emit('cancelComment')
  }

  comment(){
    if(!this.content){
      this.$message({
        message: '请填写内容',
        type: 'warning'
      })
      return
    }
    const req = {
      articleId: this.article.id,
      articleTitle: this.article.title,
      content: this.content,
      time: this.$global.getTime(),
      type: this.article.type,
      status: 'daishenhe'
    }
    axios.post(Config.url + '/api/comment/addComment', req).then((res: any)=>{
      // console.log(res.data)
      this.$message({
        message: res.data,
        type: 'success'
      })
      this.cancel()
    })
  }
} 