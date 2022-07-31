function DuplicateChar(str){
    let res="";
  for(let i=0;str[i]!==undefined;i++){
    for(let j=i+1;str[j]!==undefined;j++){
        if(str[i]==str[j])
        res=res+str[i]+" ";
        
    }
  }
  return res+" ";
}


function Un(str){
    let uniq="";
    for(let i=0;str[i]!==undefined;i++){
        if(!uniq.includes(str[i]))
        uniq+=str[i];
    }
console.log(uniq);
}
console.log(DuplicateChar("saacchhiin"));

Un("saacchhiin")