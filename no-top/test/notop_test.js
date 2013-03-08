var assert = require('assert');

describe('Test no Top file', function() {
  it("should throw error if no Top file", function(){
    assert.throws(function() {
        require('toplevel')(__dirname);  
      },
      Error,
      "Failed to throw error when Top file doesnt exist"
    );
  });
});
