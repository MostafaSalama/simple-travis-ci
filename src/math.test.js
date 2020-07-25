const math = require('./math') ;

test('it should get the correct square of the value',()=>{
    expect(math.power(2,3)).toBe(3);
})
