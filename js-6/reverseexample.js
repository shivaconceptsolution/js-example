let num=12345666;
var res=0
while(num!=0){
let rem = num%10; //8
res = res*10 + rem  // 378  res = 0+6
num = parseInt(num/10) //0
}
console.log('result is ',res)