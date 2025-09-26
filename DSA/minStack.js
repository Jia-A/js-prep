console.log("Min Stack Implementation")

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val)
        val = Math.min(val, this.minStack.length === 0 ? val : this.minStack[this.minStack.length - 1])
        this.minStack.push(val)
    }

    pop() {
        return this.stack.pop()
    }

    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        return this.minStack[this.stack.length - 1]
    }

}

const minStack = new MinStack()
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // → -3
minStack.pop();
console.log(minStack.top());    // → 0
console.log(minStack.getMin()); // → -2

console.log("--------------------------");