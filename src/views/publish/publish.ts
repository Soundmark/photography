import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
import axios from 'axios'
import {Message} from 'element-ui'

Vue.use(VueShowdown, {
  flavor: 'vanilla',
  options: {}
})

@Component({})
export default class Detail extends Vue {
dialogVisible = false
dialogImageUrl = ''
fileList = []
isPublish = true
state = {
  type: '',
  title: '标题',
  publisher: '小剩',
  time: '',
  likes: 0,
  content: '## 编辑内容',
  cover: '',
  introduction: '',
  rightSet: ''
}

mounted() {
 this.initData() 
}

initData(){
  if(this.$route.params.state){
    this.isPublish = false
    this.$global.setStateKey(this.state, this.$route.params.state)
  }
}

handlePreview(file: any){
  console.log(file)
  this.dialogImageUrl = file.url
  this.dialogVisible = true
}

handleRemove(file: any) {
  this.fileList.pop()
  const path: any = this.state.cover.match(/\/cover\/\d+.\w+$/)
  axios.get('/api/data/deleteCover?path=' + path[0]).then((res: any)=>{
    console.log(res.data)
  })
  this.state.cover = ''
}

handleChange(file: any, fileList: any){
  this.dialogImageUrl = file.url
  this.fileList = fileList
}

handleSuccess(res: string){
  console.log(res)
  if(this.state.cover && this.state.cover.match(/\/cover\/\d+.\w+$/)){
    const path: any = this.state.cover.match(/\/cover\/\d+.\w+$/)
    axios.get('/api/data/deleteCover?path=' + path[0]).then((res: any)=>{
      console.log(res.data)
    })
  }
  this.state.cover = res
}

handleSubmit(){
  if(this.valueCheck()){
    return
  }
  const date = new Date()
  this.state.time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1)
  this.state.content = JSON.stringify(this.state.content)
  console.log(this.state)
  axios.post('/api/data/addItem', this.state).then((res: any)=>{
    console.log(res.data)
    if(res.data.type==='success'){
      Message.success(res.data.info)
    }else{
      Message.warning(res.data.info)
    }
  })
}

handleUpdate(){
  if(this.valueCheck()){
    return
  }
  const date = new Date()
  this.state.time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 1)
  this.state.content = JSON.stringify(this.state.content)
  console.log(this.state)
  axios.post('/api/data/updateItem', this.state).then((res: any)=>{
    console.log(res.data)
    if(res.data.type==='success'){
      Message.success(res.data.info)
    }else{
      Message.warning(res.data.info)
    }
  })
}

valueCheck(){
  if(this.state.title==='标题' || !this.state.title){
    Message.warning('标题未改')
    return true
  }
  if(!this.state.cover){
    Message.warning('上传封面')
    return true
  }
  if(!this.state.type){
    Message.warning('选择类型')
    return true
  }
}
}