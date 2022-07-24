function ABCheck(string) {
  let ab_counter = 0;
  let temp = new String("");
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "b") {
      if (temp.length > 0 && string[i] !== temp && ab_counter === 3)
        return true;
      ab_counter = 0;
      temp = string[i];
    } else ab_counter++;
  }
  return false;
}
console.log(ABCheck("sacbin sjjsjss"));
