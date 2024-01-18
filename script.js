function scramble(str1, str2) {
  let goodLetter = '';
  let ar1 = str1.split('');
  let ar2 = str2.split('');

  for (let i = 0; i < ar1.length; i++) {
    for (let j = 0; j < ar2.length; j++) {
      if (ar1[i] === ar2[j]) {
        goodLetter += ar1[i];
        ar2.splice(j, 1);
        break;
      }
    }
  }
  return goodLetter.length === str2.length;
}

/* -------------------------------------------------------------------------- */
/*                             OPTIMIZED SOLUTIONS                            */
/* -------------------------------------------------------------------------- */
function scramble(str1, str2) {
  let occcurences = {};

  str2.split('').forEach((letter) => {
    occcurences[letter] = occcurences[letter] ? (occcurences[letter] += 1) : 1;
  });

  str1.split('').forEach((letter) => {
    occcurences[letter] && occcurences[letter]--;
  });
  return Object.keys(occcurences).every((key) => occcurences[key] === 0);
}

function scramble(str1, str2) {
  const count = {};
  str1.split('').forEach((c) => {
    count[c] = count[c] ? (count[c] += 1) : 1;
  });
  return str2.split('').every((c) => {
    return count[c]--;
  });
}
// console.log(scramble("rkqodlw", "world")); //true
// console.log(scramble("jscripts", "javascript")); //false
// console.log(scramble("javscripts", "javascript")); //false
// console.log(scramble("katas", "steak")); //false
// console.log(scramble("cedewaraaossoqqyt", "codewars")); //true

/* ----------------------------------- ** ----------------------------------- */
function findMissingLetter(array) {
  let code = array.map((letter) => letter.charCodeAt(0));
  let prec = [];
  for (let i = 0; i < code.length; i++) {
    if (code[i] + 1 !== code[i + 1] && code[i] !== code[code.length - 1]) {
      prec.push(code[i]);
    }
  }

  return String.fromCharCode(+prec.join('') + 1);
}

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
