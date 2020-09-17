import {Component} from 'vue-property-decorator'
import Vue from 'vue'
import axios from 'axios'
import Config from '@/utils/config'
import adminComment from '@/components/admin-comment/admin-comment.vue'

@Component({
  components: {
    adminComment
  }
})
export default class User extends Vue {
  
}