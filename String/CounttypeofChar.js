 function CounttypeofChar(str){
    let ans=[0,0,0,0];
    str.split('').forEach(x => {
     if(x.match(/[A-Z]/)){
         ans[0]++;
     }
     else if(x.match(/[a-z]/)){
         ans[1]++;
     }
     else if(x.match(/[0-9]/)){
         ans[1]++;
     }
     else{
         ans[3]++;
     }
     return ans;
 });
}

console.log(CounttypeofChar("sach12@12lokare"));
