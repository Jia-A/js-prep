const nums = [8,4,3,2,9]
const maxDiff = 1

const maxDifFunc = (nums, maxDiff) =>{
  let left=0, result=0, min=0, max=0
  for(let right=0; right<nums.length; right++){
    min = Math.min(...nums.slice(left, right+1))
    max = Math.max(...nums.slice(left, right+1))
    
    while(max-min>1){
      left++
      min = Math.min(...nums.slice(left, right+1))
      max = Math.max(...nums.slice(left, right+1))
    }
    result = Math.max(result, right - left + 1)
}
  return result
}


console.log(maxDifFunc(nums, maxDiff))