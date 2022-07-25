function WaveSorting(arr) {
  arr = arr.sort((a, b) => a - b);
  let firstArr = arr.slice(0, Math.floor(arr.length / 2));
  let secondArr = arr.slice(Math.floor(arr.length / 2), arr.length);
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] >= secondArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(WaveSorting([0, 4, 22, 4, 14, 4, 2]));
console.log(WaveSorting_1([0, 1, 2, 4, 1, 1, 1]));
