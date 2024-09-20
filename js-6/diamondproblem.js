var row=2;
var count=1;
for(let i=1;i<=5;i++){
    if(i<=3){
        for(let space=2;space>=i;space--){
            process.stdout.write(" ")
        }
        for(let j=1;j<=2*i-1;j++)
        {
            process.stdout.write("*")
        }
        
    }
    else
    {
        for(let space=1;space<=count;space++){
            process.stdout.write(" ")
        }
        for(let j=1;j<=2*row-1;j++){
            process.stdout.write("*")
        }
        row--;
        count++;
    }
    process.stdout.write("\n")
}