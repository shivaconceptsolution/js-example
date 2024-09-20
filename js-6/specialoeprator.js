console.log("hello"+1)
console.log("hello"+true)
console.log("hello"+12.34)
console.log("hello"+ " world")
console.log("12"+1)
let a=10
console.log(typeof a)
let b="hello"
console.log(typeof b)
let c=23.456
console.log(typeof c)
var d = undefined
console.log(typeof d)
let e
console.log(typeof e)

let person = { name: "Bob" };
console.log("mobile" in person); // Output: true

a = [1,2,3]
b = [4,5,6]
c = [...a,...b]
console.log(c)

function sum(a,b,c)
{
    console.log(a+b+c)
}

let arr=[1,2,3]
sum(...arr)