let num = "10000001"
let res=0
for(let i=0;i<num.length;i++)  //1
{
res += parseInt(num[(num.length-1)-i])*Math.pow(2,i); 
}
console.log(res)