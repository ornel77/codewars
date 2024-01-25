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
    const obj = {}
    a.forEach(num => {
        obj[num] = obj[num] ? obj[num] + 1 : 1
    })

    for(const occurence in obj) {
        if(obj[occurence] % 2 !== 0) {
            return +occurence
        }
    }


}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
//   }

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
