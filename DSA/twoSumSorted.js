console.log("Two Sum Sorted problem");

class TwoSumSorted{
    twoSum1(arr, target){
        let left = 0, right = arr.length - 1
       
        while(left<right){
            const currentSum = arr[left] + arr[right]
            if(currentSum > target){
                right--
            }
            else if(currentSum < target){
                left++
            }
            else if(currentSum === target){
                return [left+1, right+1]
            }
        }
    }

    twoSum2(arr, target){
        const map = new Map()
        for(let i=0; i<arr.length;i++){
            
            const diff = target - arr[i]
            
            if(map.has(diff)){
                return [map.get(diff), i+1 ]
            }
            map.set(arr[i], i+1)
        }
        return []
    }
}

const twoSumSorted = new TwoSumSorted()
console.log(twoSumSorted.twoSum1([1,3,4,5,7,11], 9))
console.log(twoSumSorted.twoSum2([1,3,4,5,7,11], 11))

console.log("--------------------------");