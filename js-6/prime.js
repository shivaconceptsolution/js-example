let flag=true;
var num=4;
if(num%2==0 && num!=2){
    console.log('not prime');
}
else{
for(let i=2;i<num/2;i++){
    if(num%i==0){
        console.log('not prime');
        flag=false;
        break;
        
    }
}
if(flag || num==2){
    console.log('prime')
}
}