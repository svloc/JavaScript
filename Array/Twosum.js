function Twosum(arr,s){
  let resArr=[];
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==s)
        resArr.push([arr[i],arr[j]]);
    }
  }
  return resArr;
} 
const arr=[3, 5, 2, -4, 8, 11];
const sum=7; 
console.log(Twosum(arr,sum));