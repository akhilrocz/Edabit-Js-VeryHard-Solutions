function allPairs(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let res = [];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      res.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

console.log(allPairs([2, 4, 5, 3], 7));
console.log(allPairs([5, 3, 9, 2, 1], 3));
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
