function monkeyCount(n) {
  // your code here
    // return [...Array(n).keys()]
    return Array.from({length: n}, (_, i) => i + 1)
    // return [...Array(26).keys()].map(i => String.fromCharCode(i + 97))
    // return [...Array(26)].map((_,i) => (i+10).toString(36))

  }
  // console.log(monkeyCount(1))

  /* ----------------------------------- ** ----------------------------------- */
  function firstNonConsecutive (arr) {
    if(arr == []) {
      return 0
    }
    for(let [i, num] of arr.entries()) {
      if(arr[i+1] - arr[i] !== 1) {
        return arr[i+1] || null
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
  function pigIt(str){
    let ar = str.split(' ')
    let final = []
    for(let word of ar) {
      let arWord = word.split('')
      let firstLetter = arWord.shift()
      arWord.push(firstLetter+"ay")
      final.push(arWord.join(''))
    }

    return final.join(' ')
  }

  console.log(pigIt('Pig latin is cool')) //igPay atinlay siay oolcay
  console.log(pigIt('Hello world !')) //elloHay orldway !