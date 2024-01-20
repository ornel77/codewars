function orderWeight(strng) {
    const ar =  strng.split(' ')
    const reduceNumAr  =  ar.map(num => num.split('').reduce((c,p) => +c + +p))
    let weights = []

    // console.log("somme num", reduceNumAr);
    let indexReduceNum = {}
    reduceNumAr.forEach((num, i) => {
        // console.log("num", num, "index", i);
        indexReduceNum[i] = num
    });
    let sortedReduceNumAr = reduceNumAr.sort((a,b) => a -b)
    sortedReduceNumAr.forEach(num => {
        console.log(indexReduceNum[num]);
        weights.push(ar[indexReduceNum[num]])
    })
    console.log("object", indexReduceNum);
    // console.log("sorted", sortedReduceNumAr);
    // console.log("sdf", Object.keys(indexReduceNum))

    return weights.join(' ')
}
console.log(orderWeight("103 123 4444 99 2000"));
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log(orderWeight("56 65 74 100 99 68 86 180 90" ));