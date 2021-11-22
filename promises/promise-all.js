const p1 = Promise.resolve(3);
const p2 = Promise.reject();
const p3 = 42;
const p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'Huuuur');
  }).catch(error => {
      return 'some problem';
  });
const p5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3, p4, p5]).then((values) => {
  console.log(values);
});