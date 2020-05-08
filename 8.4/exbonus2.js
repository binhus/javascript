const assert = require('assert');
const removeMiddle = (remove) => {
    let halfindex = parseInt(words.length/2);
    let wordRemoved = [words[halfindex]];
    remove.splice(halfindex,1)

    return wordRemoved;
}
// escreva a função removeMiddle para passar nos testes abaixo:

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);


assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);