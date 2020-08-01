import {Component} from 'vue-property-decorator'
import Vue from 'vue';

@Component
export default class Door extends Vue {
  count = 0
  themeIndex = 0

  mounted() {
    this.$store.commit('hideNavHandle') 
  }

  selectTheme(index: number){
    this.themeIndex = index
    const carousel: any = this.$refs.carousel
    carousel.setActiveItem(index)
  }

  changePic(index: number){
    this.themeIndex = index
  }
}