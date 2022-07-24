function AlphabetSearching(str) {
  if ([...new Set(str)].sort().join("").length==26) {
    return true;
  } else {
    return false;
  }
}
console.log(AlphabetSearching("qqqqqqqqqwertyuiopasdfghjklzxcvbnmmmmm"));
console.log(AlphabetSearching('jssfjsfj'));
console.log(AlphabetSearching('qwertyuioplkjhgfffdsssaaazzzxxxxcccvvbbnbmn'));
