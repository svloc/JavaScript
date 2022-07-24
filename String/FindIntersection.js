function FindIntersection(strArr){
    const arr1=strArr[0].split(", ");
    const arr2=strArr[1].split(", ");

    let resArr=[];
    let matchMap={};

    arr1.forEach(element => matchMap[element]=true);
    arr2.forEach(ele=>{
        if(matchMap[ele])
        resArr.push(ele);});
    if(resArr.length>0)
    return resArr.join(", ");
    
    return false;    

}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));