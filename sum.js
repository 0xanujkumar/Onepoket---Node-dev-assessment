
function sumOfIntegers(numbers) {
   
    let sum = 0;
  
  
    for (let i = 0; i < numbers.length; i++) {
      
      if (Number.isInteger(numbers[i])) {
        sum += numbers[i];
      } else {
        console.error(`Invalid input: ${numbers[i]} is not an integer.`);
      }
    }
  
    return sum;
  }
  
  module.exports = sumOfIntegers;
  