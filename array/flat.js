var arr = [1, 2, 3, 4];

const dd = arr.flatMap(x => [x, x * 2]);
console.log(dd);
// is equivalent to
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]