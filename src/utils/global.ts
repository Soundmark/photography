const global = {
  setStateKey(state: any, data: any){
    for(const key in data){
      state[key] = data[key]
    }
  }
}

export default global