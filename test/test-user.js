process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');

var User = require('../app/models/user');

var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {

	User.collection.drop();

	beforeEach(function(done) {
		// When worrying about user, will need to add a new user here... and use through out tests.
	
		// Create a default entity in db.
		done();
	});

	afterEach(function(done) {
		User.collection.drop();
		done();
	});
	
	it('should get all users /users GET', function(done) {
		done();
	});
	
	it('should add a new user /users POST', function(done) {
		done();
	});


});