function ArithGeoII(arr){
arr=arr.sort((a,b)=>a-b);
let startNum=arr[0];
let str='';
for(let i=1;i<=arr.length;i++){
    if(startNum*i==arr[i] ){
        str="Arithmetic";
        return str;
    }
    else{
        return -1;
    }
}
return arr;
}
console.log(ArithGeoII([5,10,15]))