const example = async () => {
    const nums = [1,2,3];
    nums.forEach(async num => {
     const result = await returnNum(num);
     console.log(result);
    });
    console.log('after forEach');
  }
   
  const returnNum = x => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x);
      }, 500);
    });
  }
   
  example().then(() =>{
    console.log('done');
  })