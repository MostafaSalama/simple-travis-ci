const math = require('./math') ;

test('it should get the correct power of the value',()=>{
    expect(math.power(2,3)).toBe(8);
})
test('it should get absolute value',()=>{
    expect(math.abs(-1)).toBe(1);
})
