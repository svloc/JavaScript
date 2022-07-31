function Dup(arr){
 let n=arr.length;
 let uniq=[];
    
 for(let i=0;i<n;i++){
   if(!uniq.includes(arr[i])){
   uniq.push(arr[i]); 
 }
 }
let m=uniq.length;
let temp;
 for(let i=0;i<m;i++){
    for(let j=i+1;j<m;j++){
        if(uniq[i]>uniq[j]){
            temp=uniq[i];
            uniq[j]=uniq[i];
            uniq[i]=temp;
        }
          
    }
 }
 console.log(uniq[m-2]);
}
Dup([1,1,2,2,3,4,5])