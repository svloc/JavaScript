function DistinctList(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let isBackward=false;
        for(b=0;b<i;b++){
            if(arr[b]==arr[i]){
                isBackward=true;
                break;
            }
        }
        if(isBackward){
            continue;
        }
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]==arr[i]){
                count++;
            }
        }
    }
    return count;
}
let data=[1,2,1,2,3,3,1,1]
console.log(DistinctList(data))