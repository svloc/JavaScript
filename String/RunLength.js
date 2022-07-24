function RunLength(str) {
  let arr = str.split("");
  let run_length = new String("");
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != str[i + 1]) {
      run_length += counter + 1 + arr[i];
      counter = 0;
    } else {
      counter++;
    }
  }
  return run_length;
}

console.log(RunLength("sssaaccchhin"));
