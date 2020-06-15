import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import navBall from '@/components/navball/navball.vue'
import axios from 'axios'

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
   }

  initData(){
    axios.get('/api/data/getList?type=paishe').then((res: any)=>{
      console.log(res.data)
      this.dataList = res.data
    })
  }
}