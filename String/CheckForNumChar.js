function FindChar(str){
   let n=str.length;
   var lc="";
   var uc="";
   var num="";
   var spChar="";

   for(var i=0;i<n;i++){
     if(str[i]>="a" && str[i]<="z")
     lc+=str[i]+" ";
     else if(str[i]>='A' && str[i]<='Z')
     uc+=str[i]+" ";
     else if(str[i]>='0' && str[i]<='9')
     num+=str[i]+" ";
     else
     spChar+=str[i]+" ";
   }

   console.log("LowerCase : ",lc);
   
   console.log("UpperCase: ",uc);
   
   console.log("Number : ",num);
   
   console.log("Sp char: ",spChar);
}
FindChar("SachinLokare#39")