function ArrayRotation(arr) {
  let startIndex = arr[0];
  let arr_rotation = [];
  for (let i = startIndex; i < arr.length; i++) {
    arr_rotation.push(arr[i]);
  }
  for (let i = 0; i < startIndex; i++) {
    arr_rotation.push(arr[i]);
  }
  return arr_rotation.join("");
}
console.log(ArrayRotation([4, 3, 4, 3, 1, 2]));

//second function
function ArrayRotation_1(arr) {
  let startIndex = arr[0];
  for (let i = startIndex; i < arr.length; i++) {
    arr.push(arr[i]);
  }
  arr = arr.splice(startIndex);
  return arr.join("");
}
console.log(ArrayRotation_1([4, 3, 4, 3, 1, 2]));
