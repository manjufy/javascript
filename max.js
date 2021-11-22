function findMaximumNum(str, n, k) {
  // For every digit of the number
  for (var i = 0; i < n; i++) {
    // If no more digits can be replaced
    if (k < 1) break;

    // If current digit is not already 9
    if (str[i] !== "9") {
      // Replace it with 9
      str[i] = "9";

      // One digit has been used
      k--;
    }
  }
  return str.join("");
}

// Driver code
var str = "285";
var n = str.length;
var k = 20;

console.log(findMaximumNum(str.split(""), n, k));