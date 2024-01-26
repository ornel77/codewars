function toWeirdCase(string) {
  let ar = string.split(' ');
  let final = [];
  ar.forEach((word) => {
    let letters = word.toLowerCase().split('');
    let subAr = [];
    for (let [i, letter] of letters.entries()) {
      if (i % 2 === 0) {
        subAr.push(letter.toUpperCase());
      } else {
        subAr.push(letter);
      }
    }
    final.push(subAr.join(''));
  });
  return final.join(' ');
}
// console.log(toWeirdCase("This is a test"));

/* ----------------------------------- ** ----------------------------------- */
function findOdd(a) {
  const obj = {};
  a.forEach((num) => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  });

  for (const occurence in obj) {
    if (obj[occurence] % 2 !== 0) {
      return +occurence;
    }
  }
}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
//   }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

/* ----------------------------------- ** ----------------------------------- */
function oddCount(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }

  return count;
}

// console.log(oddCount(15028883))

/* ----------------------------------- ** ----------------------------------- */
function squareSum(numbers) {
  // return numbers.reduce((c,n) => Math.pow(c, 2)+ Math.pow(n,2))
  let a = [];
  numbers.forEach((num) => a.push(num ** 2));
  return a.length > 0 ? a.reduce((c, p) => c + p) : 0;
}

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

// console.log(squareSum([1,2]))
// console.log(squareSum([0, 3, 4, 5]))
// console.log(squareSum([]))

/* ----------------------------------- ** ----------------------------------- */

function toCamelCase(str) {
  let ar = str.split(/[_-]/);
  let final = [];
  let firstWord = ar.shift();
  final.push(firstWord);
  for (let [i, word] of ar.entries()) {
    final.push(word[0].toUpperCase() + word.slice(1));
  }
  return final.join('');
}

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

// console.log(toCamelCase("The_Stealth-Warrior"))
// console.log(toCamelCase("the-stealth-warrior"))

/* ----------------------------------- ** ----------------------------------- */
function divisors(integer) {
  let ar = [];
  for (let i = integer - 1; i > 1; i--) {
    if (Number.isInteger(integer / i)) {
      ar.push(integer / i);
    }
  }
  return ar.length == 0 ? `${integer} is prime` : ar;
}

// console.log(divisors(15));
// console.log(divisors(25));
// console.log(divisors(13));
// console.log(divisors(23));

/* ----------------------------------- ** ----------------------------------- */
function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0;
}

// console.log(isDivisible(3,3,4))
// console.log(isDivisible(12,3,4))

/* ----------------------------------- ** ----------------------------------- */
function doMath(string) {
  let ar = string.split(' ');
  let numbers = [];
  let letters = [];
  let indexLetter = {};
  ar.forEach((word) => {
    letters.push(...word.match(/[a-z]/g));
    numbers.push(word.replace(/[a-z]/, ''));
  });
  for (let i = 0; i < letters.length; i++) {
    indexLetter[i] = letters[i];
  }
  let sortedLetters = [...letters];
  sortedLetters.sort();
  let sortedNumbers = [];

  for (let [i, letter] of sortedLetters.entries()) {
    sortedNumbers.push(numbers[letters.indexOf(letter)]);
    // numbers.splice(i, 1)
  }
  return sortedNumbers;
}
// console.log(doMath("24z6 1z23 y369 89z 900b"))
// console.log(doMath("24z6 1x23 y369 89a 900b"))

/* ----------------------------------- ** ----------------------------------- */
const sequenceSum = (begin, end, step) => {
  let count = 0;
  for (let i = begin; i <= end; i += step) {
    console.log(i, count);
    count += i;
  }
  return count;
};

// console.log(sequenceSum(2,6,2))
// console.log(sequenceSum(1,5,1))

/* -------------------------- Parse HTML/CSS Colors ------------------------- */
function parseHTMLColor(color) {
  const preset_colors = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
  };
  let convertColor = preset_colors[color.toLowerCase()];
  if (convertColor != undefined) color = convertColor;
  let hexaValue = color.split('')
  hexaValue.shift();
  let couple = [];
  if (color.length == 7) {
    for (let i = 0; i < hexaValue.length; i += 2) {
      couple.push(parseInt(hexaValue[i] + hexaValue[i + 1], 16));
    }
    return { r: couple[0], g: couple[1], b: couple[2] };
  } else {
    for (let i = 0; i < hexaValue.length; i++) {
      couple.push(parseInt(hexaValue[i] + hexaValue[i], 16));
    }

    return { r: couple[0], g: couple[1], b: couple[2] };
  }
}

/* --------------------------- OPTIMIZED SOLUTIONS -------------------------- */


function parseHTMLColor(color) {
  const preset_colors = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
  };
  var call = preset_colors[color.toLowerCase()]
  if (call != undefined) { color = call }
                
  var len = color.length
  // console.log(color.slice(1, len).match(/.{2}/g)); // [ '80', 'FF', 'A0' ]
  
  len == 7 ? color = color.slice(1,len).match(/.{2}/g).map(x=> parseInt(x, 16)) 
             :
             color = color.slice(1,len).match(/.{1}/g).map(x=> parseInt(x+x, 16))

  return {r:color[0], g:color[1], b:color[2]}                      
}

function parseHTMLColor(color) {
  var key = color.toLowerCase();
  var rgb = (PRESET_COLORS[key] || key).slice(1);
  
  if (rgb.length === 3)
    rgb = rgb.replace(/./g, '$&$&');
    
  var val = parseInt(rgb, 16);
  
  return { 
    r: val / 65536 | 0,
    g: (val / 256 | 0) % 256,
    b: val % 256
  }
}

console.log(parseHTMLColor('#80FFA0'));
console.log(parseHTMLColor('#3B7'));
console.log(parseHTMLColor('cyan'));
console.log(parseHTMLColor('blue'));
