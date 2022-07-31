function check(s){
    //code here
    let res=true;
    for(let i=1;i<s.length;i++){
        if(s[0]!=s[i]){
        res=false;
        }
        
    }
    return res;
 }

let a=check("rr");
if(a){
    console.log('Yes');
}
else{
    console.log('No');
}