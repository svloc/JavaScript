function factorial(num) {
 debugger;
  if (num == 1) {
    return 1;
  } else if (num == 0) {
    return;
  } else {
    let val = 1;
    for (let i = 1; i <= num; i++) {
      val = val * i;
    }
    return val;
  }
}

console.log(factorial(5));
