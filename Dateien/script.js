const arr = Array.from({length: 100000000000000000000000000000000}, () => Math.floor(Math.random() * 10000));

function sortArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

sortArray(arr);



const calculate = Array.from({length: 10000000000000000000000000}, () => Math.floor(Math.random() * 10000));

function complexCalculation(num) {
  let result = 0;
  for(let i = 0; i < 1000000000000000000000000; i++) {
    result += Math.sin(num) * Math.cos(num) / Math.sqrt(num);
  }
  return result;
}

for(let i = 0; i < calculate.length; i++) {
  calculate[i] = complexCalculation(calculate[i]);
}

function recursiveFunction(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return recursiveFunction(n - 1) + recursiveFunction(n - 2);
}

recursiveFunction(100000000000000000000000000);
