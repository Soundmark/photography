import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import axios from 'axios'
import Config from '@/utils/config'

@Component({})
export default class Login extends Vue {
  data = {
    account: '',
    password: ''
  }

  close(){
    this.$emit('closeLogin')
  }

  login(){
    console.log(this.data)
    axios.post(Config.url+'/api/user/signin', this.data).then((res: any)=>{
      console.log(res.data)
      if(res.data.success){
        this.$store.commit('loginHandle')
        localStorage.setItem('token', res.data.token)
        this.close()
      }
    })
  }
} 