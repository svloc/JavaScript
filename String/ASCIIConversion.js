function ASCIIConversion(str) {
  let a = new String("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      a += str[i];
    } else {
      a += str.charCodeAt(i);
    }
  }
  return a;
}
console.log(ASCIIConversion("dog sss"));
