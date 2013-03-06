var assert = require('assert')
  , assert = require('assert')
  , msg;

describe('Toplevel', function() {
  it('should not throw an exception when being required', function() {
    assert.doesNotThrow(function() {
        require('toplevel')(__dirname)
      },
      Error,
      msg
    );
  });
  it("should require the first module", function() {
    var first;
    var requireFromTop = require('toplevel')(__dirname)

    msg = "Failed to require first.js"
    assert.doesNotThrow(function() {
        first = requireFromTop('lib/first/first');
      },
      Error,
      msg
    );
    assert.equal(first, 'first', msg);
  });

  it("should require the second module", function() {
    msg = "Failed to require second.js"
    var second;
    var requireFromTop = require('toplevel')(__dirname)

    second = requireFromTop('lib/first/second/second');
    assert.doesNotThrow(function() {
        second = requireFromTop('lib/first/second/second');
      },
      Error,
      msg
    );

    assert.equal(second, 'second', "Failed to load second.js");
  });

  it("should throw exception for a bogus module", function() {
    assert.throws(function() {
        requireFromTop("bogus/bogus");
      },
      Error,
      "Failed to throw error when requiring bogus module"
    )
  });
});

