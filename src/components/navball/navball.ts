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
  navList = [
    {
      id: 'changjing',
      name: '场景',
      to: 'changjing',
      type: 'nav',
      x: -24.72,
      y: -76.08
    }, 
    {
      id: 'houqi',
      name: '后期',
      to: 'houqi',
      type: 'nav',
      x: 64.72,
      y: -47.02
    },
    {
      id: 'shebei',
      name: '设备',
      to: 'shebei',
      type: 'nav',
      x: 64.72,
      y: 47.02
    },
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
    }
  ]

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

  activeSearch(e: any){
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
    console.log(e)
    e.stopPropagation()
  }

  activeMove(e: any){
    this.ballInnerDistance.disX = e.clientX - e.target.offsetLeft
    this.ballInnerDistance.disY = e.clientY - e.target.offsetTop
    this.canMove = true
    this.$emit('controlMoveNav', this.canMove, this.ballInnerDistance)
  }

  cancelMove(){
    this.canMove = false
    this.$emit('controlMoveNav',this.canMove)
  }

  changePosition(e: any){
    if(this.canMove){
      console.log(e)
      e.target.style.left = e.clientX - this.ballInnerDistance.disX + 'px'
      e.target.style.top = e.clientY - this.ballInnerDistance.disY + 'px'
    }
  }
}