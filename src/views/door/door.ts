import {Component} from 'vue-property-decorator'
import Vue from 'vue';

@Component
export default class Door extends Vue {
  count = 0
  themeIndex = 0

  mounted() {
    this.$store.commit('hideNavHandle') 
    this.$nextTick(()=>{
      this.$global.loadImg()
    })
   }

  selectTheme(index: number){
    this.themeIndex = index
    const carousel: any = this.$refs.carousel
    carousel.setActiveItem(index)
  }

  changePic(index: number){
    this.themeIndex = index
  }

  // loadImg(){
  //   const loading = Loading.service({ fullscreen: true })
  //   const imgList = document.getElementsByTagName('img')
  //   const len = imgList.length
  //   let count = 0
  //   for(let i=0;i<len;i++){
  //     const item: any = imgList[i]
  //     console.log(item)
  //     item.onload = ()=>{
  //       count += 1
  //       if(count === len){
  //         this.$nextTick(()=>{
  //           loading.close()
  //         })
  //       }
  //     }
  //   }
  // }
}