function toWeirdCase(string) {
  let ar = string.split(" ");
  let final = [];
  ar.forEach((word) => {
    let letters = word.toLowerCase().split("");
    let subAr = [];
    for (let [i, letter] of letters.entries()) {
      if (i % 2 === 0) {
        subAr.push(letter.toUpperCase());
      } else {
        subAr.push(letter);
      }
    }
    final.push(subAr.join(""));
  });
  return final.join(" ");
}
// console.log(toWeirdCase("This is a test"));

/* ----------------------------------- ** ----------------------------------- */
function findOdd(a) {
  const obj = {};
  a.forEach((num) => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  });

  for (const occurence in obj) {
    if (obj[occurence] % 2 !== 0) {
      return +occurence;
    }
  }
}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
//   }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

/* ----------------------------------- ** ----------------------------------- */
function oddCount(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }

  return count;
}

// console.log(oddCount(15028883))

/* ----------------------------------- ** ----------------------------------- */
function squareSum(numbers) {
  // return numbers.reduce((c,n) => Math.pow(c, 2)+ Math.pow(n,2))
  let a = [];
  numbers.forEach((num) => a.push(num ** 2));
  return a.length > 0 ? a.reduce((c, p) => c + p) : 0;
}

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

// console.log(squareSum([1,2]))
// console.log(squareSum([0, 3, 4, 5]))
// console.log(squareSum([]))

/* ----------------------------------- ** ----------------------------------- */

function toCamelCase(str) {
  let ar = str.split(/[_-]/);
  let final = [];
  let firstWord = ar.shift();
  final.push(firstWord);
  for (let [i, word] of ar.entries()) {
    final.push(word[0].toUpperCase() + word.slice(1));
  }
  return final.join("");
}

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

// console.log(toCamelCase("The_Stealth-Warrior"))
// console.log(toCamelCase("the-stealth-warrior"))

/* ----------------------------------- ** ----------------------------------- */
function divisors(integer) {
  let ar = [];
  for (let i = integer - 1; i > 1; i--) {
    if (Number.isInteger(integer / i)) {
      ar.push(integer / i);
    }
  }
  return ar.length==0 ? `${integer} is prime` : ar
}

// console.log(divisors(15));
// console.log(divisors(25));
// console.log(divisors(13));
// console.log(divisors(23));

/* ----------------------------------- ** ----------------------------------- */
function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0
}

// console.log(isDivisible(3,3,4))
// console.log(isDivisible(12,3,4))

/* ----------------------------------- ** ----------------------------------- */
function doMath(string) {
  let ar = string.split(' ')
  let numbers =[]
  let letters = []
  let indexLetter = {}
  ar.forEach(word => {
    letters.push(...word.match(/[a-z]/g))
    numbers.push(word.replace(/[a-z]/, ''))
  })
  for(let i=0; i <letters.length; i++) {
    indexLetter[i] = letters[i]
  }
  let sortedLetters = [...letters]
  sortedLetters.sort()
  let sortedNumbers = []
  
  for(let [i,letter] of sortedLetters.entries()) {
    sortedNumbers.push(numbers[letters.indexOf(letter)])
    // numbers.splice(i, 1)
  }
  return sortedNumbers

  
}
// console.log(doMath("24z6 1z23 y369 89z 900b"))
// console.log(doMath("24z6 1x23 y369 89a 900b"))

/* ----------------------------------- ** ----------------------------------- */
const sequenceSum = (begin, end, step) => {
  let count = 0
  for(let i = begin; i <= end; i+=step) {
    console.log(i, count)
    count += i
  }
  return count
};

// console.log(sequenceSum(2,6,2))
// console.log(sequenceSum(1,5,1))


/* -------------------------- Parse HTML/CSS Colors ------------------------- */
function parseHTMLColor(color) {
  let hexaValue
  let couple = []
  if(color.length === 7) {
    hexaValue = color.split('')
    hexaValue.shift()
    for (let i = 0; i < hexaValue.length; i+=2) {
      couple.push(hexaValue[i] + hexaValue[i+1])
    }

  } else if(color.length === 4) {
    hexaValue = color.split('')
    hexaValue.shift()
    for (let i = 0; i < hexaValue.length; i++) {
      couple.push(hexaValue[i] + hexaValue[i])
    }
  } else {
    // PRESET_COLORS
  }

  //convertion hexa
  console.log(parseInt(couple[1],16))
  return couple
}

console.log(parseHTMLColor('#80FFA0'))
console.log(parseHTMLColor('#3B7'))
console.log(parseHTMLColor('LimeGreen'))