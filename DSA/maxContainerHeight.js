console.log("Max container height problem");

class MaxContainerHeight{
    maxArea(heights){
        let l=0, r = heights.length - 1, res= 0
        while(l<r){
           const area =  Math.min(heights[l], heights[r]) * (r-l)
           res = Math.max(res, area)
           if(heights[l] <= heights[r]){
            l++
           }
           else {
            r--
           }

        }
        return res
    }
}

const area = new MaxContainerHeight()
console.log(area.maxArea([1,7,2,5,4,7,3,6]))

console.log("--------------------------");