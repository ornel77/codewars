function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) {
    return 100
  } else if(exam > 75 && projects >= 5) {
    return 90
  } else if(exam > 50 && projects >= 2) {
    return 75
  } else {
    return 0
  }
}

// console.log(finalGrade(100, 12))

/* ------------------------- Moving Zeros To The End ------------------------ */
function moveZeros(arr) {
  let zeros = arr.filter(elmt => elmt === 0 && elmt !== null)
  let final = arr.filter(elmt => elmt !== 0)
  final.push(zeros)
  // console.log(zeros, final)
  return final.flat()

}

// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
// console.log(moveZeros([ 'a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]))

/* ------------------------- Stop gninnipS My sdroW! ------------------------ */
function spinWords(string){
  let ar = string.split(' ')
  let final = []
  ar.forEach(word => {
    if(word.length >= 5) {
      final.push(word.split('').reverse().join(''))
    } else {
      final.push(word)
    }
  });

  return final.join(' ')
}

/* --------------------------- others solutions --------------------------- */
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}
console.log(spinWords("Hey fellow warriors"))