import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import axios from 'axios'
import Config from '@/utils/config'

@Component({})
export default class Login extends Vue {
  content = ''

  cancel(){
    this.$emit('cancelComment')
  }
} 