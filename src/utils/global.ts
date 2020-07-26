const global = {
  setStateKey(state: any, data: any){
    for(const key in data){
      state[key] = data[key]
    }
  },
  url: 'https://api.doglefts.cn'
}

export default global