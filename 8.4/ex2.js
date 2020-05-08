const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (array) => {
    let arr = []
    for (let i = 0; i < array.length; i+=1){
       arr.push(array[i].length);
    }
    return arr
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];


assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);