let a = [[2,3],[4,5]]
let b = [[1,2],[7,8]]
for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){
        let s=0
        for(let k=0;k<2;k++){
           s = s + a[i][k]*b[k][j]
        }
        process.stdout.write(s + " ")
    }
    console.log()
}