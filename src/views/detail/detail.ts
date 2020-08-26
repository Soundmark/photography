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
n = 0
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

updated() {
  this.$nextTick(()=>{
    const markdown = document.querySelector('.markdown')
    const imgList = markdown?.querySelectorAll('img')
    window.onscroll = () => {
      this.setLazyload(imgList)
    }
  })
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
    this.state.content = this.state.content.replace(/src/g, 'src="https://api.doglefts.cn/loading.gif" data-src')
  })
}

setLazyload(list: any): any{
  const screenHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  for(let i=this.n;i<list.length;i++){
    console.log(list[i].offsetTop)
    if(list[i].offsetTop < screenHeight + scrollTop){
      if(list[i].src==='https://api.doglefts.cn/loading.gif'){
        list[i].src = list[i].getAttribute('data-src')
      }
      this.n += 1
    }
  }
}

switchComment(){
  this.showComment = !this.showComment
}

}