import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
import axios from 'axios'
import router from '@/router'

Vue.use(VueShowdown, {
  flavor: 'vanilla',
  options: {}
})

@Component({})
export default class Detail extends Vue {
content = ""
state = {
  id: -1,
  title: '',
  publisher: '',
  time: '',
  likes: '',
  content: ''
 }

mounted() {
 this.initData()
}

initData(){
  console.log(this.$route)
  const query = {
    id: this.$route.query.id,
    type: this.$route.query.type
  }
  axios.get('/api/data/getItem', {params: query}).then((res: any)=>{
    this.state.id = res.data.id
    this.state.title = res.data.title
    this.state.publisher = res.data.publisher
    this.state.time = res.data.time.slice(0, 10)
    this.state.likes = res.data.likes
    this.state.content = res.data.content
  })
}
}