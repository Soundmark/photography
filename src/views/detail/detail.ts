import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
import axios from 'axios'

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
}

mounted() {
 this.initData() 
}

initData(){
  axios.get('/paishe/getItem?id=1').then((res: any)=>{
    console.log(res.data)
    this.state.id = res.data.id
    this.state.title = res.data.title
    this.state.publisher = res.data.publisher
    this.state.time = res.data.time
    this.state.likes = res.data.likes
    this.state.content = res.data.content
  })
}
}