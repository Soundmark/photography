import {Component} from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class NavBall extends Vue {
  showTool = false
  quitNavTimer: any
  quitSearchTimer: any
  showSearch = false
  canShowSearch = false
  canMove = false
  ballInnerDistance = {
    disX: 0,
    disY: 0
  }
  timer: any
  navList = [
    {
      id: 'sousuo',
      name: '搜索',
      type: 'search',
      x: -80,
      y: 0
    },
    {
      id: 'backtop',
      name: '回到顶部',
      type: 'backtop',
      x: -24.72,
      y: 76.08
    },
    {
      id: 'shebei',
      name: '设备',
      to: 'shebei',
      type: 'nav',
      src: require('../../assets/images/camera.png'),
      x: 64.72,
      y: 47.02
    }, 
    {
      id: 'houqi',
      name: '后期',
      to: 'houqi',
      type: 'nav',
      src: require('../../assets/images/clip.png'),
      x: 64.72,
      y: -47.02
    }, 
    {
      id: 'changjing',
      name: '场景',
      to: 'changjing',
      type: 'nav',
      src: require('../../assets/images/scenery.png'),
      x: -24.72,
      y: -76.08
    },
    {
      id: 'paishe',
      name: '拍摄',
      to: 'paishe',
      type: 'nav',
      src: require('../../assets/images/shoot.png'),
      x: -24.72,
      y: -76.08
    }
  ]

  mounted(){
    const deg = Math.PI * 2 / this.navList.length
    let degCount = Math.PI
    const r = 80
    this.navList.forEach((item: any)=>{
      item.x = Math.cos(degCount) * r
      item.y = Math.sin(degCount) * r
      degCount -= deg
    })
  }

  activeNav(){
    // console.log('activeNav')
    clearTimeout(this.quitNavTimer)
    this.showTool = true
    setTimeout(() => {
      this.canShowSearch = true
    }, 500);
  }

  quitNav(){
    // console.log('quitNav')
    this.quitNavTimer = setTimeout(() => {
      this.showTool = false
      this.canShowSearch = false
    }, 1000);
  }

  quitNavNow(){
    this.showTool = !this.showTool
  }

  activeSearch(){
    if(this.canShowSearch){
      clearTimeout(this.quitSearchTimer)
      this.showSearch = true
    }
  }

  hideSearch(){
    this.quitSearchTimer = setTimeout(() => {
      this.showSearch = false
    }, 1000);
  }

  setStopPropagation(e: any){
     e.stopPropagation()
  }

  backtopHandle(){
    let timer = 0
    cancelAnimationFrame(timer)
    timer = requestAnimationFrame(function fn(){
      const osTop = document.documentElement.scrollTop || document.body.scrollTop
      const speed = Math.floor(-osTop/10)
      document.documentElement.scrollTop = document.body.scrollTop = osTop + speed
      if(osTop > 0){
        timer = requestAnimationFrame(fn)
      }else{
        cancelAnimationFrame(timer)
      }
    })
  }
}