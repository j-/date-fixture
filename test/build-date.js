const assert = require('assert');
const buildDate = require('../').buildDate;

describe('buildDate', function () {
	it('is a function', function () {
		assert.equal(typeof buildDate, 'function', 'Check type');
	});
	it('returns a constructor', function () {
		assert.equal(typeof buildDate(), 'function', 'Check type');
	});
	it('constructor returns a date object', function () {
		const Foo = buildDate();
		const bar = new Foo();
		assert.equal(bar instanceof Date, true, 'Check type');
	});
});
