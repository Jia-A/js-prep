console.log("Contains duplicate problem");

class ContainsDuplicateNumber {

    hasDuplicate(nums){
            const set = new Set()
            for(const num of nums){
                if (set.has(num)){
                    return true
                }
                set.add(num)
            }
            return false
    }

    hasDuplicate2(nums){
        const newSet = new Set(nums)
        return newSet.size !== nums.length
    }
}

const containsDuplicate = new ContainsDuplicateNumber()
console.log(containsDuplicate.hasDuplicate([1,2,3,4,4,5,6,7,8,9,10]))
console.log(containsDuplicate.hasDuplicate2([1,2,3,4,5,6,7,8,9,10]))

console.log("--------------------------");