var assert = require('assert')
  , exec = require('child_process').exec
  , msg;

var correctStdOut = function correctStdOut(stdout) {
  return stdout.indexOf('toplevel-test') != -1;
}

var assertWhichTopWorks = function(done) {
   return function(error, stdout, stderr) {
     if (error) return done(error);
     assert(correctStdOut(stdout), 'Failed to output a directory');
     done(error);
   }
}

describe('which-top', function() {
  it('should work without passing a parameter', function(done) {
    process.chdir(__dirname);
    var which_top = exec('../../node_modules/.bin/which-top', 
      assertWhichTopWorks(done));
  });

  it('should work with a passed parameter', function(done) {
    var which_top = exec('../../node_modules/.bin/which-top ' + __dirname, 
      assertWhichTopWorks(done));
  });
});
