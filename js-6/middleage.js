let a=23,b=46,c=25
let res = (a>b && a<c || a<b && a>c)? " a is middle":((b>c && b<a || b<c && b>a)?"b is middle":"c is middle")
console.log(res)