
// Function to find even numbers in an array
function findEvenNumbers(arr) {
    var evenNumbers = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
  
  // Function to find odd numbers in an array
  function findOddNumbers(arr) {
    var oddNumbers = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
    }
    return oddNumbers;
  }
  