import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import navBall from '@/components/navball/navball.vue'
import axios from 'axios'
import Config from '@/utils/config'

@Component({
  components: {
    navBall
  }
})
export default class Paishe extends Vue {
  dataList = []
  
  mounted() {
    this.initData()
    this.$store.commit('showNavHandle')
    // this.$nextTick(()=>{
    //   this.$global.loadImg()
    // })
  }

  initData(){
    axios.get(Config.url+'/api/data/getList?type=houqi').then((res: any)=>{
      console.log(res.data)
      this.dataList = res.data
    })
  }
}