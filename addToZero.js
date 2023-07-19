// Starting array
let array = [0, 1, 4, 11, 2, 37];

// Write your solution below:
const addToZeroVariable = (array) => {
    let isBoolean = false
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          isBoolean = true; // Found a pair that adds up to zero
        }
      }
    }
     // No pair found that adds up to zero
    return isBoolean
  };

let result = addToZeroVariable(array);
console.log(result);