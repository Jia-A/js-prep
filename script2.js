// Type conversion
// JS is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime. This flexibility allows for implicit type conversion, where JavaScript automatically converts values from one type to another when necessary. However, it can also lead to unexpected results if not used carefully.

// Why it's called dynamically typed: In JavaScript, you can declare a variable without specifying its type, and the type can change as the program runs.

var a = 10;    // number
console.log(typeof a);
a = "10";    // string
console.log(typeof a);

const p = Number(a)
console.log(typeof p)

const input1 = document.querySelector(".first")
const input2 = document.querySelector(".second")
const resultSpan = document.querySelector(".result")
console.log(input1, input2, resultSpan);
    console.log(resultSpan.innerText);
function handleAdd(){
    const num1 = input1.value // "1"
    const num2 = input2.value 

    console.log(num1 + "num1", typeof num1, num2 + "num2", typeof num2);
    console.log("Line num",num1 + num2);
    const num1AsNumber = Number(num1)
    const num1AsBoolean = Boolean(num1AsNumber)  // num1 
    const num2AsNumber = Number(num2)

    if(num1AsBoolean == true){
        const result = num1AsNumber + num2AsNumber
        resultSpan.innerText = result
    }
    else {
        resultSpan.innerText = num2AsNumber
    }
   
}
