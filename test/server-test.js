var app = require('../app');
var request = require('supertest');


describe('GET /devices', function() {
  it('should respond with json', function(callback) {
    request(app)
      .get('/devices')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end(callback);
  });
});


describe('404 error handling', function() {
  it('should respond 404 error', function(callback) {
    request(app)
      .get('/')
      .expect(404)
      .end(callback);
  });
});
