/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value for x (5). You must still use
  `x` as the variable inside the function, however.
*/

x = 5;

function double(num) {
  x = num * 2;
  return x;
}
double(2.5);
console.log('The value of x is', x, '-- it should be 5.');

/*
  Step 2. Rewrite the JavaScript `double()` function above so that
  it does not pollute the global namespace: that is, neither its
  variables nor the `double()` function itself can be accessed
  directly via the global `window` object, like `window.x`).

  Be sure to comment out the original `double()` function so you
  can accurately test your work.
*/
(function(obj) {
  var x=5;
  function double(num) {
    var x=num*2;
    return x;
  }
  console.log('The value of x is', x, '-- it should be 5.');
})();
double(6);

/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
*/
(function(obj) {
  var x=5;
  function double(num) {
    var x=num*2;
    return x;
  }
  function getDouble(num) {
    if (isNaN(num)) {
      throw 'The value is not a number!';
    }
  }
  try {
    getDouble('A');
  } catch (e) {
    console.error(e);
  }
  console.log('The value of x is', x, '-- it should be 5.');
})();
double(6);
