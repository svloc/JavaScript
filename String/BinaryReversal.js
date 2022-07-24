function BinaryReversal(str) {
  let binary = new String("");
  binary = (str >>> 0).toString(2);
  return parseInt(binary.split("").reverse().join(""), 2);
}
console.log(BinaryReversal("213"));
