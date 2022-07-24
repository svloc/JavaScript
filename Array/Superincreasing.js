function Superincreasing(arr) {
  let sum = 0;
  let isSuperincreasing = true;
  for (let i = 0; i < arr.lenght; i++) {
    if (i > 0 && sum >= arr[i]) {
      isSuperincreasing = false;
      break;
    }
    sum += arr[i];
  }
  return isSuperincreasing;
}
console.log(Superincreasing([1, 2, 5, 4]));

