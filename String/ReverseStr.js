function ReverseStr(str){
    return str.split("").reverse().join("");
}
console.log("Reverse String Using Functions",ReverseStr("sachin "))

function ReverseStrFor(str){
    let newString='';
    for(i=str.length-1;i>=0;i--){
      newString+=str[i];
    }
    return newString;
}

console.log("Reverse String Using For Loop..",ReverseStrFor("Lokare "))