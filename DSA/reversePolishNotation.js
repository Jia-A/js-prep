console.log("Evaluate Reverse Polish Notation")

class EvalRPN {

    evaluation(tokens){
        const stack = []
        for(const c of tokens){
            if(c === '+'){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(a + b)
            }
            else if(c === '-'){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(a - b)
            }
            else if(c === '*'){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(a * b)
            }
            else if(c === '/'){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b - a))
            }
            else {
                stack.push(parseInt(c))
            }
        }

        return stack.pop()
    }
}

const evalRPN = new EvalRPN()
console.log(evalRPN.evaluation(["2", "1", "+", "3", "*"]))

console.log("--------------------------");