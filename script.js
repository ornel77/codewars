// function scramble(str1, str2) {
//   let goodLetter = "";
//   let ar1 = str1.split("");
//   let ar2 = str2.split("");

//   for (let i = 0; i < ar1.length; i++) {
//     for (let j = 0; j < ar2.length; j++) {
//       if (ar1[i] === ar2[j]) {
//         goodLetter += ar1[i];
//         ar2.splice(j, 1);
//         break;
//       }
//     }
//   }
//   return goodLetter.length === str2.length;
// }


function scramble(str1, str2) {
  let occcurences = {}

  str2.split('').forEach(letter => {
    occcurences[letter] = occcurences[letter] ? occcurences[letter] += 1 : 1
  });

  str1.split('').forEach(letter => {
    occcurences[letter] && occcurences[letter]--
  })
  return Object.keys(occcurences).every(key => occcurences[key] === 0)

}
console.log(scramble("rkqodlw", "world")); //true
console.log(scramble("jscripts", "javascript")); //false
console.log(scramble("javscripts", "javascript")); //false
console.log(scramble("katas", "steak")); //false
console.log(scramble("cedewaraaossoqqyt", "codewars")); //true
