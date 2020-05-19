
const sum = require('./calcs')

test('soma 1 e 2 para dar 3', () => {
   expect(sum(1, 2)).toEqual(3)
});
describe('sum', () =>{
   expect(sum(2, 4)).toBe(6);
})
