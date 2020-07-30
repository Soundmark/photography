import {Component} from 'vue-property-decorator'
import Vue from 'vue';

@Component
export default class Door extends Vue {
  count = 0
  themeIndex = 1

  mounted() {
    this.$store.commit('hideNavHandle') 
  }

  selectTheme(index: number){
    this.themeIndex = index
    if(index===2){
      this.setBG(this.$refs.changjing, 'changjing')
    }else if(index===3){
      this.setBG(this.$refs.houqi, 'houqi')
    }else if(index===4){
      this.setBG(this.$refs.shebei, 'shebei')
    }
  }

  setBG(ele: any, name: string){
    if(!ele.style.background){
      ele.style.background = 'url(https://api.doglefts.cn/BG/'+name+'.jpg) no-repeat center/100% auto'
    }
}
}