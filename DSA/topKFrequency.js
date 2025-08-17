console.log("Top K Frequent Elements")

class TopKFrequency {
    // normal sorting
    topKFrequency(arr, k){
        const map = {}
        for(let num of arr){
            map[num] = (map[num] || 0) + 1
        }

        const sortedArray = Object.entries(map).sort((a,b)=> b[1] - a[1]);
        return sortedArray.slice(0,k).map(item => Number(item[0]));
    }

    // bucket sorting
    topKFrequency2(arr, k){
        const map = {}
        for(let num of arr){
            map[num] = (map[num] || 0) + 1
        }

        const freqMap = new Array(arr.length+1).fill().map(()=> [])
        
        for(let ele in map){
                        
            freqMap[map[ele]].push(parseInt(ele))
        }
        const finalArr = []
        for(let i= freqMap.length- 1; i >=0 ;i --){
            if(freqMap[i].length > 0){
                finalArr.push(...freqMap[i])
            }
        }
        return finalArr.slice(0,k)
    }
}

const topKFrequency = new TopKFrequency();
console.log(topKFrequency.topKFrequency([1, 1, 1,2,5,3,2,4,4,4,4,2], 4));
console.log(topKFrequency.topKFrequency2([1, 1, 1,2,5,3,2,4,4,4,4], 4));
console.log("--------------------------");