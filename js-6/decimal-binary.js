let num=7
var result=''
while(num!=0){
    result = num%2 + result
    num=parseInt(num/2)
}

console.log(result)