function minimumSizeSubarray(nums, tar) {
    let left = 0
    let sum = 0
    let minLen = Infinity
    
    for(let right = 0; right < nums.length; right++){
        sum = sum + nums[right]
        while(sum >= tar){
            minLen = Math.min(minLen, right - left + 1)
            sum = sum - nums[left]
            left++
        }
    }
    
    return minLen === Infinity ? 0 : minLen
}

const myArr = [2, 3, 1, 2, 4, 3]
const target = 7

const k = minimumSizeSubarray(myArr, target)
console.log(k)