console.log("Two sum problem")

class TwoSum{

    twoSumIndices(arr, target){
        const newMap = {};
        for(let i = 0; i < arr.length; i++){ // { 2 : 0, 3 : 1, 11 : 2, 15 : 3, 7: 4 }
            newMap[arr[i]] = i
        }

        for(let i = 0; i < arr.length; i++){
            const diff = target - arr[i] // 9 - 2 = 7
            if(newMap[diff] !== undefined && newMap[diff] !== i) // key present or not in the object newMap["7"] && value of newMap["7"] !== 0
            return [i, newMap[diff]]
        }
        return []
    }

    twoSumIndices2(arr, target){
        const newMap = new Map();
        for(let i=0; i<arr.length; i++){
            const diff = target - arr[i];
            if(newMap.has(diff) && newMap.get(diff) !== i){
                return [newMap.get(diff), i];
            }
            newMap.set(arr[i], i); // set the value of arr[i] as key
        }
        return []
    }
}

const twoSum = new TwoSum();
console.log(twoSum.twoSumIndices([2, 3, 11, 15, 7], 9))
console.log(twoSum.twoSumIndices2([2, 3, 11, 15, 7], 9))

console.log("--------------------------");