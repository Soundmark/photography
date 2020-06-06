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
dialogVisible = false
dialogImageUrl = ''
fileList = []
state = {
  type: '',
  title: '标题',
  publisher: '',
  time: '',
  likes: '',
  content: '## 编辑内容',
}

mounted() {
//  this.initData() 
}

handlePreview(file: any){
  console.log(file)
  this.dialogImageUrl = file.url
  this.dialogVisible = true
}

handleRemove(file: any) {
  this.fileList.pop()
}

handleChange(file: any, fileList: any){
  this.dialogImageUrl = file.url
  this.fileList = fileList
}

}