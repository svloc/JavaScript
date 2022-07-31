function swapArr(arr){
    let temp;
    let j=arr.length-1;
    let i=0
    while(i<arr.length){
        temp=arr[i];
        console.log(temp);
        arr[j]=arr[i];
        console.log(arr[j])
        arr[i]=temp;
        i++;
        j--;
    }
return arr;
}
console.log(swapArr([1,9]));