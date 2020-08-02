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
    axios.get(Config.url+'/api/data/getList?type=shebei').then((res: any)=>{
      this.dataList = res.data
    })
  }
}