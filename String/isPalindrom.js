function isP(str){
  let n;

  for(let i=0;str[i]!==undefined;i++)
  n++;
  
  let rev="";
  for(let i=n-1;i>=0;i--){
     rev+=str[i];
  }
  if(rev==str)
  console.log("Yes");
  else
  console.log("No")
}
isP("sachin");