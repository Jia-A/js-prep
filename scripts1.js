// function clickFunc(myString){
//     return console.log(myString)
// }    //Function definition

function add(str, num1, num2){
    const x = 10;
    const u = 11;
    // const mul = a * b;
    // const div = a / b ;
    // const sub = a - b;
    // const final = mul + div + sub;
    const final = num1 + num2;
    return str + final;
}

const result = add("This is my result: ", 4, 5)
let n;
n=10

// const variable must be initialized during declaration unlike let and var. Once assigned, the value of a const variable cannot be changed. It is block-scoped and cannot be redeclared within the same scope. However, if the const variable holds an object or an array, the properties of that object or the elements of that array can be modified, but the reference to the object or array itself cannot be changed.
let h1;
h1 = document.querySelector("h1");

// Either of the below methods can be used to add event listener to the h1 element. Both will work fine. The first method is more concise, while the second method allows for multiple event listeners to be added to the same element without overwriting each other.
// h1.onclick = function(){
//     h1.innerText = result;
// }

// OR 

// h1.addEventListener("click", function(){
//     h1.innerText = result;
// })

// const h3 = document.querySelector("h3");
// h3.onclick = function(){
//     console.log("h3 clicked")
// }

// const p = document.querySelector("p");
// p.onclick = function(){
//     console.log("p clicked")
// }

// const span = document.querySelector("span");
// span.onclick = function(){
//     console.log("span clicked")
// }

function clickFunc(myString){
    return console.log(myString)
}    //Function definition