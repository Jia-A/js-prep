console.log("Valid parantheses check")

class ValidParanthesesCheck{

    isValidParantheses(string){
        const stack = []
        const charTable = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        for(let char of string){
            if(charTable[char]){
                if(stack.length > 0 && stack[stack.length - 1] === charTable[char])
                {stack.pop()}
                else return false
            }
            else {
                stack.push(char)
            }
        }
        return stack.length === 0
    }
}


const isValid = new ValidParanthesesCheck()
console.log(isValid.isValidParantheses("[{[{(({[]}))}]}]"))
console.log(isValid.isValidParantheses("[{[{())}]}]"))

console.log("--------------------------");