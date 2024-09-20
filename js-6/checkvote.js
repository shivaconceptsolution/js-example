let age=12
let identity=true
let voterlist=false

if(age>18 && identity && voterlist){
    console.log('elligible for voting')
}
else if(age<18 && identity & voterlist)
{
    console.log('age should be above 18')
}
else if(age>18 && !identity && voterlist)
{
    console.log('identity should be proper');
}
else if(age>18 && identity && !voterlist)
{
    console.log('name should be added in voter list');
}
else if(age>18 && !identity && !voterlist)
{
    console.log('identity and voterlist not proper')
}
else
{
    console.log('age,identity and voterlist not proper')
}