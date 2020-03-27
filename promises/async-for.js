for (let i = 0; i < 5; ++i) {
    // Actually prints out "5" 5 times.
    // But if you use `let` above, it'll print out 0-4
    setTimeout(() => console.log(i), 0);
  }
  
  // This will print *before* the 5's
  console.log('end');