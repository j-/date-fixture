import _Date from './original-date';

const VALUE = Symbol('value');

export default class Date extends _Date {
	static get [Symbol.species] () {
		return _Date;
	}

	static now (...args) {
		return _Date.now(...args);
	}

	static parse (...args) {
		return _Date.parse(...args);
	}

	static UTC (...args) {
		return _Date.UTC(...args);
	}

	constructor (year, month, day, hour, minutes, seconds, milliseconds) {
		super();
		this[VALUE] = new _Date(...arguments);
	}

	/* Getter */

	getDate () {
		return this[VALUE].getDate();
	}

	getDay () {
		return this[VALUE].getDay();
	}

	getFullYear () {
		return this[VALUE].getFullYear();
	}

	getHours () {
		return this[VALUE].getHours();
	}

	getMilliseconds () {
		return this[VALUE].getMilliseconds();
	}

	getMinutes () {
		return this[VALUE].getMinutes();
	}

	getMonth () {
		return this[VALUE].getMonth();
	}

	getSeconds () {
		return this[VALUE].getSeconds();
	}

	getTime () {
		return this[VALUE].getTime();
	}

	getTimezoneOffset () {
		return this[VALUE].getTimezoneOffset();
	}

	getUTCDate () {
		return this[VALUE].getUTCDate();
	}

	getUTCDay () {
		return this[VALUE].getUTCDay();
	}

	getUTCFullYear () {
		return this[VALUE].getUTCFullYear();
	}

	getUTCHours () {
		return this[VALUE].getUTCHours();
	}

	getUTCMilliseconds () {
		return this[VALUE].getUTCMilliseconds();
	}

	getUTCMinutes () {
		return this[VALUE].getUTCMinutes();
	}

	getUTCMonth () {
		return this[VALUE].getUTCMonth();
	}

	getUTCSeconds () {
		return this[VALUE].getUTCSeconds();
	}

	getYear () {
		return this[VALUE].getYear();
	}

	/* Setter */

	setDate (...args) {
		return this[VALUE].setDate(...args);
	}

	setFullYear (...args) {
		return this[VALUE].setFullYear(...args);
	}

	setHours (...args) {
		return this[VALUE].setHours(...args);
	}

	setMilliseconds (...args) {
		return this[VALUE].setMilliseconds(...args);
	}

	setMinutes (...args) {
		return this[VALUE].setMinutes(...args);
	}

	setMonth (...args) {
		return this[VALUE].setMonth(...args);
	}

	setSeconds (...args) {
		return this[VALUE].setSeconds(...args);
	}

	setTime (...args) {
		return this[VALUE].setTime(...args);
	}

	setUTCDate (...args) {
		return this[VALUE].setUTCDate(...args);
	}

	setUTCFullYear (...args) {
		return this[VALUE].setUTCFullYear(...args);
	}

	setUTCHours (...args) {
		return this[VALUE].setUTCHours(...args);
	}

	setUTCMilliseconds (...args) {
		return this[VALUE].setUTCMilliseconds(...args);
	}

	setUTCMinutes (...args) {
		return this[VALUE].setUTCMinutes(...args);
	}

	setUTCMonth (...args) {
		return this[VALUE].setUTCMonth(...args);
	}

	setUTCSeconds (...args) {
		return this[VALUE].setUTCSeconds(...args);
	}

	setYear (...args) {
		return this[VALUE].setYear(...args);
	}

	/* Conversion getter */

	toDateString () {
		return this[VALUE].toDateString();
	}

	toISOString () {
		return this[VALUE].toISOString();
	}

	toJSON () {
		return this[VALUE].toJSON();
	}

	toGMTString () {
		return this[VALUE].toGMTString();
	}

	toLocaleDateString () {
		return this[VALUE].toLocaleDateString();
	}

	toLocaleFormat () {
		return this[VALUE].toLocaleFormat();
	}

	toLocaleString () {
		return this[VALUE].toLocaleString();
	}

	toLocaleTimeString () {
		return this[VALUE].toLocaleTimeString();
	}

	toSource () {
		return this[VALUE].toSource();
	}

	toString () {
		return this[VALUE].toString();
	}

	toTimeString () {
		return this[VALUE].toTimeString();
	}

	toUTCString () {
		return this[VALUE].toUTCString();
	}

	valueOf () {
		return this[VALUE];
	}

}
