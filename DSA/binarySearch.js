console.log("Binary Search problem")

class BinarySearch{

    binary(arr, target){
        let l = 0, r = arr.length - 1
        while(l<=r){
            let m = Math.floor(l + ((r-l) / 2))
            if(arr[m] === target){
               return m 
            }
            else if (arr[m]<target){
                l = m+1
            }
            else if(arr[m]>target){
                r = m-1
            }
        }
        return -1
    }

    lowerBound(arr, target){
        let l = 0, r = arr.length
        while(l<r){
            let m = Math.floor(l + ((r-l) / 2))
            if(arr[m] < target){
                l = m + 1
            }
            else {
                r = m
            }
        }
        return l
    }
    lowerBound(arr, target){
        let l = 0, r = arr.length
        while(l<r){
            let m = Math.floor(l + ((r-l) / 2))
            if(arr[m] <= target){
                l = m + 1
            }
            else {
                r = m
            }
        }
        return l
    }
}

const search = new BinarySearch()
console.log(search.binary([-1,0,2,4,6,8], 6))

console.log("--------------------------");