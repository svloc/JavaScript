function TimeConvert(num) {
  let h = Math.floor(num / 60);
  let m = num % 60;
  return h + ":" + m;
}
console.log(TimeConvert(60));
