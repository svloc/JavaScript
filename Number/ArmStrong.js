function ArmNum(num){
 let rem;
 let ans=num;
 let s=0;

 while(num!=0){
    rem=num%10;
    s=s+rem*rem*rem;
    num=parseInt(num/10);
 }
 if(s==ans)
 console.log("Yes");
 else
 console.log("No");

}

ArmNum(153)