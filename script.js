function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// console.log(finalGrade(100, 12))

/* ------------------------- Moving Zeros To The End ------------------------ */
function moveZeros(arr) {
  let zeros = arr.filter((elmt) => elmt === 0 && elmt !== null);
  let final = arr.filter((elmt) => elmt !== 0);
  final.push(zeros);
  // console.log(zeros, final)
  return final.flat();
}

// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
// console.log(moveZeros([ 'a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]))

/* ------------------------- Stop gninnipS My sdroW! ------------------------ */
function spinWords(string) {
  let ar = string.split(' ');
  let final = [];
  ar.forEach((word) => {
    if (word.length >= 5) {
      final.push(word.split('').reverse().join(''));
    } else {
      final.push(word);
    }
  });

  return final.join(' ');
}

/* --------------------------- others solutions --------------------------- */
function spinWords(words) {
  return words
    .split(' ')
    .map(function (word) {
      return word.length > 4 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
}
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split('').reverse().join('');
  });
}
// console.log(spinWords("Hey fellow warriors"))

/* ------------------------- Find the middle element ------------------------ */
function gimme(triplet) {
  let newAr = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(newAr[1]);
}

/* ----------------------------- other solution ----------------------------- */
// const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };

// console.log(gimme([2, 3, 1]))
// console.log(gimme([5, 10, 14]))

/* -------------------------------------------------------------------------- */
/*                                  Factorial                                 */
/* -------------------------------------------------------------------------- */
function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('error');
  }
  let count = 1;
  for (let i = 1; i <= n; i++) {
    count *= i;
  }

  return count;
}

/* ----------------------------- other solution ----------------------------- */
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
// console.log(factorial(5));

/* -------------------------------------------------------------------------- */
/*                           Find The Parity Outlier                          */
/* -------------------------------------------------------------------------- */
function findOutlier(integers) {
  let evens = integers.filter((num) => num % 2 === 0);
  let odds = integers.filter((num) => num % 2 !== 0);
  return evens.length > odds.length ? odds[0] : evens[0];
}

// console.log(findOutlier([0, 1, 2]))

/* -------------------------------------------------------------------------- */
/*                     Round up to the next multiple of 5                     */
/* -------------------------------------------------------------------------- */

// function roundToNext5(n){
//   while(n%5!== 0) {
//     n / 5
//     n++
//   }
//   return n
// }

/* ----------------------------- other solution ----------------------------- */
function roundToNext5(n) {
  return Math.ceil(n / 5);
}

// console.log(roundToNext5(21))

/* -------------------------------------------------------------------------- */
/*                        Find the next perfect square!                       */
/* -------------------------------------------------------------------------- */

function findNextSquare(sq) {
  let isPerfectSquare =
    Math.floor(Math.sqrt(sq)) * Math.floor(Math.sqrt(sq)) === sq;
  return isPerfectSquare
    ? Math.ceil(Math.sqrt(sq + 1)) * Math.ceil(Math.sqrt(sq + 1))
    : -1;
}

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if (Math.round(number) === number) {
    return Math.pow(++number, 2);
  }
  return -1;
}

// console.log(findNextSquare(121))
// console.log(findNextSquare(114))

/* -------------------------------------------------------------------------- */
/*                               Decipher this!                               */
/* -------------------------------------------------------------------------- */

function decipherThis(str) {
  let ar = str.split(' ');

  return ar
    .map((word) => {
      let code = word.match(/\d+/).join('');
      let letters = word.replace(/\d/g, '');
      let reverseString = '';
      if (letters.length === 0) {
        reverseString = '';
      } else if (letters.length === 1) {
        reverseString = letters;
      } else {
        reverseString =
          letters[letters.length - 1] + letters.slice(1, -1) + letters[0];
      }
      let character = String.fromCharCode(+code);
      return character + reverseString;
    })
    .join(' ');
}

/* ----------------------------- other solution ----------------------------- */
function decipherThis(str) {
  return str
    .split(' ')
    .map((w) =>
      w
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')
    )
    .join(' ');
}

function decipherThis(str) {
  return str.replace(
    /\b(\d+)(\w?)(\w*?)(\w?)\b/g,
    (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2
  );
}
// console.log(decipherThis('72olle 103doo 100ya'))
// console.log(decipherThis('82yade 115te 103o'))
// console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))

/* -------------------------------------------------------------------------- */
/*                           Sum Strings as Numbers                           */
/* -------------------------------------------------------------------------- */

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

// console.log(sumStrings('123', '456'))
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))

/* -------------------------------------------------------------------------- */
/*                              CamelCase Method                              */
/* -------------------------------------------------------------------------- */
// function camelCase(str) {
//   return str.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1,).toLowerCase()
//   }).join(' ')
// }

String.prototype.camelCase = function () {
  if (this.length === 0) {
    return '';
  } else {
    return this.split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }
};

// console.log("".camelCase());

/* -------------------------------------------------------------------------- */
/*                              Compare Versions                              */
/* -------------------------------------------------------------------------- */

function compareVersions(version1, version2) {
  // return parseFloat(version1) >= parseFloat(version2);
  if (!version1.includes('.') && !version2.includes('.')) {
    return +version1 >= +version2;
  }

  let ar1 = version1.split('.');
  let ar2 = version2.split('.');
  if (ar1.length > ar2.length) {
    ar2.push(0);
  } else {
    ar1.push(0);
  }

  for (let i = 0; i < ar1.length; i++) {
    if (+ar1[i] > +ar2[i]) {
      return true;
    } else if (+ar1[i] < +ar2[i]) {
      return false;
    } else {
      continue;
    }
  }
}

function compareVersions (version1, version2) {
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');

  let maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
      if (Number(arr1[i] || 0) < Number(arr2[i] || 0)) {
          return false;
      }
  } return true;
}

function compareVersions(v1, v2)  {
  const a1 = v1.split('.').map(Number);
  const a2 = v2.split('.').map(Number);
  for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
    let n1 = a1[i] || 0, n2 = a2[i] || 0;
    if (n1 === n2) continue;
    return (n1 > n2) ? true : false;
  }
  return true;
};

console.log(compareVersions('11', '11')); //true
console.log(compareVersions('10.4.6', '10.4')); //true
console.log(compareVersions('10.4.9', '10.5')); //false
console.log(compareVersions('10.4', '11')); //false
console.log(compareVersions('10.4', '10.10')); //false
console.log(compareVersions("11", "10")); //true
