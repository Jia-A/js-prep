console.log("Daily Temperatures");


class DailyTemperatures {

    temperatures(arr){
        const response = Array(arr.length).fill(0)
        const stack = []
        for(let i=0; i< arr.length; i++){
            while(stack.length > 0 && arr[i] > stack[stack.length - 1][0]){
                let [stackEl, stackInd] = stack.pop()
                response[stackInd] = i - stackInd
            }
            stack.push([arr[i], i])
        }
        return response
        
    }

}

const tempInstance = new DailyTemperatures()
console.log(tempInstance.temperatures([30,38,30,36,35,40,28]))

console.log("--------------------------");