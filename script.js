function titleCase(title, minorWords = "") {
  if (title === "") {
    return ""; // Return an empty string if title is empty
  }
  const firstWord = title.split(" ").shift();
  const firstWordCap =
    firstWord.slice(0, 1).toUpperCase() + firstWord.slice(1).toLowerCase();
  const ar = title.toLowerCase().split(" ").slice(1);
  const result = [];
  if (minorWords != undefined) {
    const options = minorWords.toLowerCase().split(" ");
    for (let word of ar) {
      if (options.includes(word)) {
        result.push(word.toLowerCase());
      } else {
        result.push(
          word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
        );
      }
    }
    console.log(result);
    return result.length != 0
      ? `${firstWordCap} ${result.join(" ")}`
      : firstWordCap;
  } else if (title != "") {
    return title
      .split(" ")
      .map((word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }
}

// console.log(titleCase("a clash of KINGS", "a an the of"));
// console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
// console.log(titleCase("the quick brown fox"));
// // console.log(titleCase(""));
// console.log(titleCase("ab","ab"));

function number(array) {
  return array.map((v, i) => {
    return `${i + 1}: ${v}`;
  });
}

// console.log(number(["a", "b", "c"]));
// console.log(number([]));

function reverseLetter(str) {
  let regex = /[a-z]/g;
  let wordReverse = "";
  for (let letter of str) {
    if (letter.match(regex)) {
      wordReverse += letter;
    }
  }
  return wordReverse.split("").reverse().join("");
}

//   console.log(reverseLetter("3f4sdornellaf112"))
//   console.log(Math.sqrt(79))

function validatePIN(pin) {
  //return true or false
  let regex = /[0-9]/g;
  if (pin.split("").length === 4 || pin.split("").length === 6) {
    for (let b of pin) {
      if (!b.match(regex)) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

function validatePIN(pin) {
  var pinlen = pin.length;
  var isCorrectLength = pinlen == 4 || pinlen == 6;
  var hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }

  return false;
}

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

//   console.log(validatePIN("1234567"))
//   console.log(validatePIN("-1234"))
//   console.log(validatePIN("a234"))
//   console.log(validatePIN("123456"))

/* ------------------------------------ p ----------------------------------- */
function longestConsec(strarr, k) {
  const ar = [];
  let i = 0;
  let word = ""
//   for (let j = 0; j <= k; j++) {
//     // ar.push((word += strarr[i]));
//     // i++;

//     console.log(j)
//   }
while(k !== strarr.length + 1) {
    ar.push(strarr.slice(i, k).join(''))
    i++
    k++
}
let lengths = ar.map(a => {a: a.length})
return lengths
}
// console.log(
//   longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
// );
// console.log(
//   longestConsec(
//     [
//       "ejjjjmmtthh",
//       "zxxuueeg",
//       "aanlljrrrxx",
//       "dqqqaaabbb",
//       "oocccffuucccjjjkkkjyyyeehh",
//     ],
//     1
//   )
// );

// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))
// console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))


/* ----------------------------------- ** ----------------------------------- */
function encode(string) {
  let e = {
    "a": 1,
    "e": 2,
    "i": 3,
    "o": 4,
    "u": 5
  }
let encodedMessage = ""
  for(let letter of string) {
    if(e.hasOwnProperty(letter)) {
      encodedMessage += e[letter]
    } else {
      encodedMessage += letter
    }
    
  }

  console.log(encodedMessage)
}

console.log(encode('hello'))

function decode(string) {
  return
}