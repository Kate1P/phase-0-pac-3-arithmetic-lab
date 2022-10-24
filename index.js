function add() {
    // we'll fill this in shortly
  }

  function subtract() {
    
  }
  function multiply() {
    
}
function divide() {
    
}
function add() {
    return "something";
  }

  function add(a, b) {
    return "something";
  }

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n+1;
}
// describe('basic math functions', function () {
//it('decrement(n) decrements n and returns the result', function() {
  //  expect(decrement(a)).toEqual(a - 1)
  
function decrement(n) {
    return n-1;
}
// describe('makeInt(n)', function() {
//   it('parses n as an integer and returns the parsed integer', function() {
//    expect(makeInt(a.toString())).toEqual(a)
//   })
 

function makeInt(n) {
   return parseInt(n, 10);
    
}

//describe('preserveDecimal(n)', function() {
  //  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    //  expect(preserveDecimal('2.222')).toBe(2.222)
    //})
  
    function preserveDecimal(n) { 
        return parseFloat(n);
    }