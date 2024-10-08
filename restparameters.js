function sumAll(...args) { // args is an array of all arguments
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  console.log(sumAll(1)); // 1
  console.log(sumAll(1, 2)); // 3
  console.log(sumAll(1, 2, 3)); // 6