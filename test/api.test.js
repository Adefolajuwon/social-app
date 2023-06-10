const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = chai;

chai.use(chaiHttp);

// Import your Express app or router
const app = require('../index');

describe('Profile API', () => {
	describe('POST /profile', () => {
		it('should create a new profile', (done) => {
			chai
				.request(app)
				.post('/profile')
				.send({
					firstname: 'juwon',
					lastname: 'oye',
					age: 25,
					email: 'oye@gmail.com',
					password: 'foodisfooddd',
				})
				.end((err, res) => {
					assert.equal(res.status, 200);
					assert.property(res.body, 'profile');
					assert.propertyVal(res.body.profile, 'firstname', 'juwon');
					assert.propertyVal(res.body.profile, 'lastname', 'oye');
					// Add more assertions for other profile properties
					done();
				});
		});

		it('should return an error when required fields are missing', (done) => {
			chai
				.request(app)
				.post('/profile')
				.send({
					lastname: 'oye',
					age: 25,
					email: 'oye@gmail.com',
					password: 'fodisfood',
				})
				.end((err, res) => {
					assert.equal(res.status, 400);
					assert.property(res.body, 'error');
					assert.propertyVal(
						res.body,
						'error',
						'Please provide all required fields'
					);
					done();
				});
		});
	});

	describe('GET /profile/:email', () => {
		it('should retrieve a profile by email', (done) => {
			chai
				.request(app)
				.get('/profile/johndoe@example.com')
				.end((err, res) => {
					assert.equal(res.status, 200);
					assert.isObject(res.body);
					assert.propertyVal(res.body, 'email', 'johndoe@example.com');
					done();
				});
		});

		it('should return an error when profile is not found', (done) => {
			chai
				.request(app)
				.get('/profile/njfjjf@example.com')
				.end((err, res) => {
					assert.equal(res.status, 404);
					assert.property(res.body, 'error');
					assert.propertyVal(res.body, 'error', 'User profile not found');
					done();
				});
		});
	});
});
