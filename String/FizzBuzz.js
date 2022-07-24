function FizzBuzz(num) {
  let string = new String("");
  for (let i = 0; i < num; i++) {
    if (num % 5 == 0 && num % 3 == 0) {
      string += "FizzBuzz ";
    } else if (num % 3 == 0) {
      string += "Fizz";
    } else if (num % 5 == 0) {
      string += "Buzz";
    } else {
      string += i + " ";
    }
  }
  return string.trim();
}

console.log(FizzBuzz(5));
