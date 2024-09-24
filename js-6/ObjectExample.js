let student = {rno:1001,name:"xyz",branch:"cs",fees:12000}
console.log(student)
for(let key in student){
    console.log(key,student[key])
}

console.log(student["branch"])
console.log(student.branch)

