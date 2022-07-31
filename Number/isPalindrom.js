function isP(n){
    let rem;
    let rev=0;
    let n1=n;
    while(n!=0){
        rem=n%10;
        rev=rev*10+rem;
        n=parseInt(n/10);
    }
    if(n1==rev)
    console.log("Yes");
    else
    console.log("No");

}

// function isP(num){
//     let arr=String(num).split("");
//     let n =arr.length;
//     let ans=[];
//     for(let i=n-1;i>=0;i--){
//        ans.push(arr[i]);
//     }

//     if(num==ans.join(""))
//     console.log("Yes");
//     else
//     console.log("No");

// }
isP(121);