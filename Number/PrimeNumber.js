function PrimeNumber(num) {
  let s=true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      s = false;
      break;
    }
  }
  if (s) {
    console.log(num, " is Not Prime Number");
  } else {
    console.log(num, " is Prime Number:");
  }

}
PrimeNumber(11);
