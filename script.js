function monkeyCount(n) {
  // your code here
  // return [...Array(n).keys()]
  return Array.from({ length: n }, (_, i) => i + 1);
  // return [...Array(26).keys()].map(i => String.fromCharCode(i + 97))
  // return [...Array(26)].map((_,i) => (i+10).toString(36))
}
// console.log(monkeyCount(1))

/* ----------------------------------- ** ----------------------------------- */
function firstNonConsecutive(arr) {
  if (arr == []) {
    return 0;
  }
  for (let [i, num] of arr.entries()) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1] || null;
    }
  }
}
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
// console.log(firstNonConsecutive([1,2,3,4]))
// console.log(firstNonConsecutive([6,4]))

/* ----------------------------------- ** ----------------------------------- */
function arrayPlusArray(arr1, arr2) {
  // arr1.push(arr2)
  // return arr1.flat().reduce((c,p) => c+p)

  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

/* ----------------------------------- ** ----------------------------------- */
function pigIt(str) {
  let ar = str.split(" ");
  let final = [];
  let regex = /[^\w\s]+/;
  // for (let word of ar) {
  //   if (!regex.test(word)) {
  //     let firstLetter = word.charAt(0)
  //     final.push(word.slice(1) + firstLetter + "ay")
  //   } else {
  //     final.push(word);
  //   }
  // }
  // return final.join(" ");
  return ar
    .map((word) => {
      if (!regex.test(word)) {
        let firstLetter = word.charAt(0);
        return word.slice(1) + firstLetter + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

// console.log(pigIt("Pig latin is cool")); //igPay atinlay siay oolcay
// console.log(pigIt("Hello world !")); //elloHay orldway !

/* ----------------------------------- ** ----------------------------------- */
function snail(ar) {
  let final = [];
  if (ar.length <= 1) {
    return ar.flat()
  } else if (ar.length === 2) {
    final.push(...ar.shift());
    final.push(...ar.pop().reverse());
    return final.flat();
  }
   else if (ar.length == 3) {
    let last = ar[1].pop();
    final.push(ar[0]);
    final.push(last);
    final.push(ar[2].reverse());
    final.push(ar[1].slice(0, 2));
    return final.flat();
  }

  while (ar.length) {
    final.push(...ar.shift());
    for(let i = 0; i < ar.length - 1; i++) {
      let last  =  ar[i].pop()
      final.push(last)
    }
    final.push(...ar.pop().reverse())
    for(let i = ar.length - 1; i > 0; i--) {
      let first = ar[i].shift()
      final.push(first)
    }
  }

  return final;
}

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(snail([1]));
console.log(
  snail([
    [1, 2],
    [3, 4],
  ])
);
console.log(
  snail([[]])
);

console.log(
  snail([
    [1, 2, 3, 4],
    [5, 6, 7,8],
    [9, 10,11,12],
    [13,14,15,16],
  ])
);
