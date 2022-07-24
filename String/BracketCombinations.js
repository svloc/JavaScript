function BracketCombinations(n) {
  if (n === 0) {
    return 1;
  }
  let parenthesis = [["(", 1, 0]];
  while (true) {
    let openParenthesisCount = parenthesis[0][1];
    let closeParenthesisCount = parenthesis[0][2];
    // RULE 3
    if (
      openParenthesisCount == closeParenthesisCount &&
      closeParenthesisCount == n &&
      openParenthesisCount == n
    ) {
      break;
    }
    let data = parenthesis.shift();
    let temp = [];
    let str = "";
    // RULE 1
    if (openParenthesisCount < n) {
      str = data[0] + "(";
      [, o, c] = data;
      temp.push(str, ++o, c);
      parenthesis.push(temp);
      temp = [];
    }
    // RULE 2
    if (openParenthesisCount > closeParenthesisCount) {
      str = data[0] + ")";
      [, o, c] = data;
      temp.push(str, o, ++c);
      parenthesis.push(temp);
      temp = [];
    }
  }
  return parenthesis.map((result) => result[0]).length;
}

console.log(BracketCombinations(3));

// Second functon for Bracket Combinations problem
function BracketCombinations_1(num){
    let factorial=(n)=>{
    if(n==0){
        return;
    }
    else if(n==1){
        return 1;
    }
    let k=1;
    for(let i=n;i>=1;i--){
        k*=i;
    }
    return k;
 }
 let result=factorial(2*num)/(factorial(num+1)*factorial(num))
 return result; 
}

console.log("Using formula",BracketCombinations_1(3))