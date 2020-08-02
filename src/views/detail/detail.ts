import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
import axios from 'axios'
import router from '@/router'
import Config from '@/utils/config'

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
  content: '',
  type: '',
  cover: '',
  introduction: ''
 }

mounted() {
 this.initData()
}

get isLogin(){
  return this.$store.state.isLogin
}

initData(){
  console.log(this.$route)
  const query = {
    id: this.$route.query.id,
    type: this.$route.query.type
  }
  axios.get(Config.url+'/api/data/getItem', {params: query}).then((res: any)=>{
    this.$global.setStateKey(this.state, res.data)
  })
}
}