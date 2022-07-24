function LetterCapitalize(sen) {
  let arr = sen.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
console.log(LetterCapitalize("sachin lokare"));

function L(sen) {
  arr = sen.split(" ");
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
console.log("second : ", L("hi my name is sachin lokare. i live in naNDED"));
