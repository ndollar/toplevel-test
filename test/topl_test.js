var assert = require('assert')
  , requireFromTop = require('topl')(__dirname);

var first, msg;

first = requireFromTop('lib/first/first');
msg = "Failed to require first.js"
assert.doesNotThrow( 
  function() {
    first = requireFromTop('lib/first/first');
  },
  Error,
  msg
);
assert.equal(first, 'first', msg);

msg = "Failed to require second.js"
var second;
assert.doesNotThrow( 
  function() {
    second = requireFromTop('lib/first/first');
  },
  Error,
  msg
);
assert.equal(first, 'first', msg);





var second  = requireFromTop('lib/first/second/second');
assert.equal(second, 'second', "Failed to load second.js");

assert.throws(
  function() {
    requireFromTop("bogus/bogus");
  },
  Error,
  "Failed to throw error when requiring bogus module"
)
