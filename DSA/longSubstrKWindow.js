const str = 'ecebk'
const k = 2

const longSubrstrK = (myStr, tar)=> {
  let left=0, result=0, map= {}
  for(let right=0; right<str.length;right++){
    map[myStr[right]] = (map[myStr[right]] || 0) + 1
    while(Object.keys(map).length > tar){
      map[myStr[left]] = map[myStr[left]] - 1
        
      if(map[myStr[left]] === 0){
        delete map[myStr[left]]

      }
      left++
    }
    result = Math.max(result, right - left + 1)
  }
  return result
}


console.log(longSubrstrK(str, k))