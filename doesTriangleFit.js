function doesTriangleFit(arr1, arr2) {
  if (!isValidTriangle(arr1) || !isValidTriangle(arr2)) {
    return false;
  }

  function isValidTriangle(sides) {
    const [a, b, c] = sides;
    return a + b > c && b + c > a && a + c > b;
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  return arr1[0] <= arr2[0] && arr1[1] <= arr1[1] && arr1[2] <= arr2[2];
}

console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));
