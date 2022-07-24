function AdditivePersistence(num){
    num=String(num);
    if(num.length==1){
        return 0;
    }
    let count=0;
    while(num.length!=1){
        let sum=0;
        for(let i=0;i<num.length;i++){
            sum+=Number(num[i]);
        }
        count++;
        sum=String(sum);
        if(sum.length==1){
         return count;
        }
        num=sum;
    }
}
console.log(AdditivePersistence(4));