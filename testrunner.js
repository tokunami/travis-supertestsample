var Mocha = require('mocha');
var mocha = new Mocha();

var files = ['./test/server-test.js'];

files.forEach(function(file) {
  mocha.addFile(file);
});

mocha.run(function(err) {
  process.exit(err);
});
