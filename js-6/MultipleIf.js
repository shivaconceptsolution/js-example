let num=3
let f=false;
if(num%3==0)
{
    console.log('divisble by 3')
    f=true;
}
if(num%5==0)
{
    console.log('divisible by 5')
    f=true;
}
if(num%9==0)
{
    console.log('divisible by 9')
    f=true;
}

if(!f){
    console.log('not divisble by any')
}
