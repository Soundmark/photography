import {Component} from 'vue-property-decorator'
import Vue from 'vue';

@Component
export default class Door extends Vue {
  count = 0
  themeIndex = 1

  selectTheme(index: number){
    this.themeIndex = index
    console.log('切换主题', this.themeIndex)
  }
}