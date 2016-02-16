import _Date from './extendable-date';

const VALUE = Symbol('value');

function buildDate (value) {
	// Ensure input is a date
	value = new _Date(value);
	// Current datetime
	const now = Number(value);
	// Returns new Date class that can be extended
	return class Date extends _Date {
		static get [Symbol.species] () {
			return _Date;
		}

		static now () {
			return now;
		}

		// Constructor length must be 7
		constructor (year, month, day, hour, minutes, seconds, milliseconds) {
			super();
			this[VALUE] = new _Date(value);
			this.setTime(...args);
		}
	}
}
