function QuestionsMarks(str) {
  res = false;
  for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < i; j++) {
      if (Number(str[i]) + Number(str[j]) == 10) {
        if (str.slice(i, j + 1).split("?").length - 1 == 3) {
          res = true;
          break;
        } else {
          res = true;
        }
      }
    }
  }
  return res;
}
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
