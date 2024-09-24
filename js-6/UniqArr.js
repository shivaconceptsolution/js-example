let x = [1,2,3,2,4,5,3]
let arr=[]
for(let i=0;i<x.length;i++){
    let f=true;
    for(let j=0;j<x.length ;j++){
        if(x[i]==x[j] && i!=j){
            f=false;
        }

    }
    if(!f){
        if(!arr.includes(x[i]))
         arr.push(x[i])
    }
}

console.log(arr)