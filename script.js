/* -------------------------------------------------------------------------- */
/*                            The Hashtag Generator                           */
/* -------------------------------------------------------------------------- */

function generateHashtag(str) {
  let ar = str
    .trim()
    .split(" ")
    .filter((s) => s !== "");
  let final = ar
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
  return final.length < 140 && final.length !== 0 ? "#" + final : false;
}

// console.log(generateHashtag("Do We have A Hashtag"))
// console.log(generateHashtag(""))
// console.log(generateHashtag("    Hello     World   "))
// console.log(generateHashtag("Codewars is nice"))
// console.log(generateHashtag("a".repeat(139)))

/* -------------------------------------------------------------------------- */
/*                      Does my number look big in this?                      */
/* -------------------------------------------------------------------------- */
// function narcissistic(value) {
//   let ar = value.toString().split('').map(Number)
//   let len = ar.length
//   let result = ar.reduce((c,p) => c + p**len)
//   return result === value
// }

function narcissistic(value) {
  let len = ar.length;
  return (
    value
      .toString()
      .split("")
      .map(Number)
      .reduce((c, p) => c + p ** len) === value
  );
}
// console.log(narcissistic(153))
// console.log(narcissistic(1652))

/* -------------------------------------------------------------------------- */
/*                              Ten Green Bottles                             */
/* -------------------------------------------------------------------------- */

function tenGreenBottles(n) {
  let obj = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
  };
  let str = "";
  for (let i = n; i >= 1; i--) {
    if (i === 1) {
      str +=
        `One green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere'll be no green bottles hanging on the wall.` +
        "\n";
    } else {
      str +=
        `${obj[i]} green bottles hanging on the wall,\n${
          obj[i]
        } green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere'll be ${obj[
          i - 1
        ].toLowerCase()} green bottle${
          i === 2 ? "" : "s"
        } hanging on the wall.` + "\n\n";
    }
  }
  return str;
}

// console.log(tenGreenBottles(9));

/* -------------------------------------------------------------------------- */
/*                              Are we alternate?                             */
/* -------------------------------------------------------------------------- */
function isAlt(word) {
  let regex = /[aeiou]/g;
  let evens = [];
  let odds = [];
  let ar = word.split("");
  for (let i = 0; i < ar.length; i++) {
    if (i % 2 === 0) {
      evens.push(ar[i]);
    } else {
      odds.push(ar[i]);
    }
  }
  const isVowels = (a) => a.match(regex);
  const isConsonants = (a) => !a.match(regex);
  return evens.every(isConsonants) || 
}
console.log(isAlt("amazon")); //true
console.log(isAlt("apple")); //false
console.log(isAlt("banana")); //true
