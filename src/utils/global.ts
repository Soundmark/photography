import {Loading} from 'element-ui'
import Vue from 'vue'

export default class Global extends Vue {
  setStateKey(state: any, data: any){
    for(const key in data){
      state[key] = data[key]
    }
  }
  
  //全局加载图片方法
  loadImg(){
    const loading = Loading.service({ fullscreen: true })
    const imgList = document.getElementsByTagName('img')
    const len = imgList.length
    let count = 0
    for(let i=0;i<len;i++){
      const item: any = imgList[i]
      item.onload = ()=>{
        count += 1
        if(count === len){
          this.$nextTick(()=>{
            loading.close()
          })
        }
      }
    }
}
}
