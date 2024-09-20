for(let i=69;i>=65;i--)  //i=5
    {
       let data =65;
        for(let j=65;j<=i;j++) // 1 to 2
         {
            if(j%2==0)
            {
             process.stdout.write(String.fromCharCode((data+32)) + " ");
             data++;
            }
            else
             process.stdout.write(String.fromCharCode(data) + " ");
       
         }
         process.stdout.write("\n");
       
    }