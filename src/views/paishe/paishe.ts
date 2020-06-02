import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import navBall from '@/components/navball/navball.vue'

@Component({
  components: {
    navBall
  }
})
export default class Paishe extends Vue {
   dataList: any = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,11,1,1,]

  controlMoveNav(e: any){
    console.log(e)
  }

  moveNav(e: any){
    if(e.target.className === navBall){
      console.log(123)
    }
  }
}