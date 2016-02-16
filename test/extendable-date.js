const assert = require('assert');
const ExtendableDate = require('../').ExtendableDate;

describe('ExtendableDate', function () {
	it('is a function', function () {
		assert.equal(typeof ExtendableDate, 'function', 'Check type');
	});
	it('can be initialized', function () {
		assert.doesNotThrow(() => new ExtendableDate(), 'Create instance');
	});
	it('is an instance of Date', function () {
		assert.equal(new ExtendableDate() instanceof Date, true, 'Check instanceof');
	});
	it('has the right class name', function () {
		assert.equal(ExtendableDate.name, 'Date', 'Get name');
	});
	it('returns the right strings', function () {
		assert.equal(String(ExtendableDate), 'function Date() { [native code] }', 'Object.prototype.toString.call()');
		assert.equal(Object.prototype.toString.call(ExtendableDate), '[object Function]', 'String()');
	});
});
