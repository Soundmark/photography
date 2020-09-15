function debounce(fn: any, wait: number){
  let timer: any = null
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, wait);
  }
}

function throttle(fn: any, wait: number) {
  let timer: any = null
  fn()
  return function(){
    if(timer) return
    timer = setTimeout(() => {
      timer = null
      fn()
    }, wait);
  }
}

export {
  debounce,
  throttle
}