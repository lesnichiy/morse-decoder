const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
  const exprArr = [];

  for (let i = 0; i < expr.length; i += 10) {
    exprArr.push(expr.substring(i, i + 10));
  }

  let morseDecodedStr = ``;

  for (let i = 0; i < exprArr.length; i++) {
    if (exprArr[i] === '**********') {
      morseDecodedStr = `${morseDecodedStr} `;
    } else {
      let morseSymbolArr = [];

      for (let j = 0; j < exprArr[i].length; j += 2) {
        morseSymbolArr.push(exprArr[i].substring(j, j + 2));
      }

      let currentLetter = morseSymbolArr.reduce( (str, item) => {
        if (item === '10') {
          return `${str}.`;
        } else if (item === '11') {
          return `${str}-`;
        } else {
          return `${str}`;
        }
      }, ``);

      morseDecodedStr = `${morseDecodedStr}${MORSE_TABLE[currentLetter]}`

    }
  }

  return morseDecodedStr;
}

module.exports = {
    decode
};