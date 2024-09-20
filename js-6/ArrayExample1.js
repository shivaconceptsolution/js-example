let x = ["C", 12, 89, "C++", true, 11]
console.log('display array using normal for loop')

for(let i=0;i<x.length;i++){
    console.log(x[i])
}
console.log('display array using for of loop')
for(let item of x){
    console.log(item)
}
console.log('display array using for in loop')
for(let index in x){
    console.log(x[index]) //[] subscript
}
console.log('display array using for each loop')
x.forEach((item)=>{
    console.log(item)
})