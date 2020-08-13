import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
import axios from 'axios'
import Config from '@/utils/config'
import comment from '@/components/comment/comment.vue'

Vue.use(VueShowdown, {
  flavor: 'vanilla',
  options: {}
})

@Component({
  components: {
    comment
  }
})
export default class Detail extends Vue {
content = ""
state = {
  id: -1,
  title: '',
  publisher: '',
  time: '',
  likes: '',
  content: '',
  type: '',
  cover: '',
  introduction: '',
  comments: []
 }
 showComment = false
 showCommentList = true

mounted() {
 this.initData()
}

get isLogin(){
  return this.$store.state.isLogin
}

initData(){
  const query = {
    id: this.$route.query.id,
    type: this.$route.query.type
  }
  axios.get(Config.url+'/api/data/getItem', {params: query}).then((res: any)=>{
    this.$global.setStateKey(this.state, res.data)
    if(!this.state.comments){
      this.showCommentList = false
      this.state.comments = []
    }
  })
}

switchComment(){
  this.showComment = !this.showComment
}

}