function VowelCount(sen) {
  let VowelCounter = 0;
  let VowelPattern = /^[aeiouAEIOU]$/;
  for (let i = 0; i < sen.length; i++) {
    if(sen[i].match(VowelPattern)) {
      VowelCounter++;
    }
  }
  return VowelCounter;
}
console.log(VowelCount("aeiou sachin lokare "));
