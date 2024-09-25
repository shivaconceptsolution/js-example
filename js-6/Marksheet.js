let marks = {phy:30,chem:33,math:98,eng:77,hin:78}
let flag=true
let totalmarks=0
let c=0
let fsubject=""
let message=""
let gm=0
for(let m in marks){
    if(marks[m]<0 || marks[m]>100){
        flag=false;
        message=`Invalid marks in ${m} subject, Assigned Marks should be 0 to 100`
        break
    }
    else
    {
        if(marks[m]<33){
            fsubject+=m+" "
            gm=marks[m]
            c++;
        }
        else{
            totalmarks+=marks[m];
        }
    }
}

if(flag){
   if(c==0 || c==1 && gm>=28){
      
      let per =(c==0)?totalmarks/5:(totalmarks+33-gm)/5;
      if(per>33 && per<45){
        message=`Congrates you are pass with third division and percentage is  in ${per.toFixed(2)}`
      }
      else if(per<60){
          message=`Congrates you are pass with second division and percentage is  in ${per.toFixed(2)}`
      }
      else
      {
        message=`Congrates you are pass into first division and percentage is ${per.toFixed(2)}`
      }
      if(c==1){
        message += `Pass by grace and grace mark is ${(33-gm)} grace subject is ${fsubject}`
      }
   }
   else if(c==1){
    message=`Try again you are supp in ${fsubject}`
   }
   else
   {
    message=`Try again you are failed in ${fsubject}`
   }
   console.log(message)
}
else
{
    console.log(message)
}