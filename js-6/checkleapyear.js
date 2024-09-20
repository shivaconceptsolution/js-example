let year=1000
let res = ''
if(year%400==0){
   res = 'Leap Year'
}
else
{
    if(year%4==0){
        if(year%100!=0){
            res = 'Leap Year';
        }
        else{
            res = 'Not Leap Year';
        }
    }
    else
    {
        res = 'Not Leap Year';
    }
}
console.log(res)