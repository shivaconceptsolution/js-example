
let year =2000;
switch(year%400==0 || year%4==0 && year%100!=0){
    case true:
        console.log('Leap Year')
        break;
    default:
        console.log('Not a Leap Year')
        break

}