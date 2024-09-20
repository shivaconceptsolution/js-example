let x = [2,3,8,9,11,12]
let sum1=0,sum2=0
for(let i=0;i<x.length;i++){
    if(x[i]%2==0){
        sum1 = sum1 + x[i]
    }
    else
    {
        sum2 = sum2 + x[i]
    }
   
}
console.log("Total sum of even is ",sum1 , "Total sum of odd is ",sum2)