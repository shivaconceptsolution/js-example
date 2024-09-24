let x = [1,8,9,6,5,4,21,10,19,11]
let m=0,s=0,t=0
for(let i=0;i<x.length;i++)
{
  if(m<x[i]){
    t=s
    s=m
    m=x[i]
  }
  else if(s<x[i])
  {
    t=s
    s=x[i]
  }
  else if(t<x[i]){
    t=x[i]
  }
}

console.log('max element is ',m)
console.log('second max element is ',s)
console.log('Third max element is ',t)