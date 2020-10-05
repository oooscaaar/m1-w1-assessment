// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num%2===0) {
    return true;
  }
  return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a>b){
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
    return false;
  }

  if (a>b && a> c){
    return a;
  } else if(b>a && b>c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (typeof numbers != 'object') {
    return false;
  }

  let undef = false;

  numbers.forEach((number) => {
    if (typeof number !== 'number') {
      undef = true;
    }
  });

  if (undef) {
    return false;
  }

  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((acc, sum) => (acc += sum));
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {

  if(numbers.length === 0) {
    return false;
  }

  if (typeof numbers != 'object') {
    return false;
  }

  let max = 0;
  numbers.forEach(number => {
    if(number > max){
      max = number;
    }
  });
  return max;
}

// Return the longest string in an array
function longestString(strings) {

  if(strings.length === 0) {
    return false;
  }

  if (typeof strings != 'object') {
    return false;
  }

  let longestWord = "";
  strings.forEach(word => {
    if(word.length > longestWord.length){
      longestWord = word;
    }
  });
  return longestWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (typeof wordsArr != 'object') {
    return false;
  }
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

  if(wordsArr.length === 0) {
    return false;
  }

  if (typeof wordsArr != 'object') {
    return false;
  }

  let isUnique = true;
  for (let i = 0; i < wordsArr.length - 1; i++) {
    for (let j = i + 1; j < wordsArr.length; j++) {
      if (wordsArr[i] === wordsArr[j]) {
        isUnique = false;
      }
    }
    if (isUnique) {
      return wordsArr[i];
    }
    isUnique = true;
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof personObj != 'object') {
    return false;
  }

  if(personObj.firstName === undefined || personObj.lastName === undefined){
    return false;
  }

  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) { 

  if(matrix.length === 0) {
    return false;
  }

  if (typeof matrix != 'object') {
    return false;
  }

  let max = 0;
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      if(matrix[i][j] > max){
        max = matrix[i][j];
      }
    }
  }
  return max;
}
