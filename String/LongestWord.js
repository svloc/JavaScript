function LongestWord(sen) {
  let splitsen = sen.split(" ");
  let punctuationString = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  let max_length = 0;
  for (let i = 0; i < splitsen.length; i++) {
    if (splitsen[i].replace(punctuationString, "").length > max_length) {
      max_length = splitsen[i].replace(punctuationString, "").length;
    }
  }
  for (let i = 0; i < splitsen.length; i++) {
    if (max_length == splitsen[i].length) {
      return splitsen[i];
    }
  }
}
console.log(LongestWord("sach Lokare"));

function LongestWord_1(sen) {
  let arr = sen.match(/[a-zA-Z]+/gi);
  let sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  return sorted[0];
}

console.log(LongestWord_1("sach??? Lokare12"));
