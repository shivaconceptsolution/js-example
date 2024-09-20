let ch = 'B'
let ch1= ch>='A' && ch<='Z'?String.fromCharCode(ch.charCodeAt()+32):ch;
let res = "aeiou".includes(ch1)?"Vowel ":"Consonent";
console.log(res)