function HybrowlabTask(sen) {
  let split_sen = sen.split("");
  let new_str = new String("");
  let c = 0;
  for (let i = 0; i < split_sen.length; i++) {
    if (split_sen[i] != sen[i + 1]) {
      new_str += c +1+ split_sen[i];
      c=0;
    } else {
      c++;
    }
  }
  return new_str;
}

console.log(HybrowlabTask("sachin lokare"));

function a2(sen){
let s=sen.toLowerCase().split(" ").join("");
 console.log(s)   
var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
return result; 
}
console.log(a2('Hi Iam sachin lokare'))
