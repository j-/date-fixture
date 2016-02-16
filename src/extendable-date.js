import _Date from './original-date';

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
		super(year, month, day, hour, minutes, seconds, milliseconds);
	}

	/* Getter */

	getDate () {
		return _Date.prototype.getDate.call(this);
	}

	getDay () {
		return _Date.prototype.getDay.call(this);
	}

	getFullYear () {
		return _Date.prototype.getFullYear.call(this);
	}

	getHours () {
		return _Date.prototype.getHours.call(this);
	}

	getMilliseconds () {
		return _Date.prototype.getMilliseconds.call(this);
	}

	getMinutes () {
		return _Date.prototype.getMinutes.call(this);
	}

	getMonth () {
		return _Date.prototype.getMonth.call(this);
	}

	getSeconds () {
		return _Date.prototype.getSeconds.call(this);
	}

	getTime () {
		return _Date.prototype.getTime.call(this);
	}

	getTimezoneOffset () {
		return _Date.prototype.getTimezoneOffset.call(this);
	}

	getUTCDate () {
		return _Date.prototype.getUTCDate.call(this);
	}

	getUTCDay () {
		return _Date.prototype.getUTCDay.call(this);
	}

	getUTCFullYear () {
		return _Date.prototype.getUTCFullYear.call(this);
	}

	getUTCHours () {
		return _Date.prototype.getUTCHours.call(this);
	}

	getUTCMilliseconds () {
		return _Date.prototype.getUTCMilliseconds.call(this);
	}

	getUTCMinutes () {
		return _Date.prototype.getUTCMinutes.call(this);
	}

	getUTCMonth () {
		return _Date.prototype.getUTCMonth.call(this);
	}

	getUTCSeconds () {
		return _Date.prototype.getUTCSeconds.call(this);
	}

	getYear () {
		return _Date.prototype.getYear.call(this);
	}

	/* Setter */

	setDate (...args) {
		return _Date.prototype.setDate.apply(this, args);
	}

	setFullYear (...args) {
		return _Date.prototype.setFullYear.apply(this, args);
	}

	setHours (...args) {
		return _Date.prototype.setHours.apply(this, args);
	}

	setMilliseconds (...args) {
		return _Date.prototype.setMilliseconds.apply(this, args);
	}

	setMinutes (...args) {
		return _Date.prototype.setMinutes.apply(this, args);
	}

	setMonth (...args) {
		return _Date.prototype.setMonth.apply(this, args);
	}

	setSeconds (...args) {
		return _Date.prototype.setSeconds.apply(this, args);
	}

	setTime (...args) {
		return _Date.prototype.setTime.apply(this, args);
	}

	setUTCDate (...args) {
		return _Date.prototype.setUTCDate.apply(this, args);
	}

	setUTCFullYear (...args) {
		return _Date.prototype.setUTCFullYear.apply(this, args);
	}

	setUTCHours (...args) {
		return _Date.prototype.setUTCHours.apply(this, args);
	}

	setUTCMilliseconds (...args) {
		return _Date.prototype.setUTCMilliseconds.apply(this, args);
	}

	setUTCMinutes (...args) {
		return _Date.prototype.setUTCMinutes.apply(this, args);
	}

	setUTCMonth (...args) {
		return _Date.prototype.setUTCMonth.apply(this, args);
	}

	setUTCSeconds (...args) {
		return _Date.prototype.setUTCSeconds.apply(this, args);
	}

	setYear (...args) {
		return _Date.prototype.setYear.apply(this, args);
	}

	/* Conversion getter */

	toDateString () {
		return _Date.prototype.toDateString.call(this);
	}

	toISOString () {
		return _Date.prototype.toISOString.call(this);
	}

	toJSON () {
		return _Date.prototype.toJSON.call(this);
	}

	toGMTString () {
		return _Date.prototype.toGMTString.call(this);
	}

	toLocaleDateString () {
		return _Date.prototype.toLocaleDateString.call(this);
	}

	toLocaleFormat () {
		return _Date.prototype.toLocaleFormat.call(this);
	}

	toLocaleString () {
		return _Date.prototype.toLocaleString.call(this);
	}

	toLocaleTimeString () {
		return _Date.prototype.toLocaleTimeString.call(this);
	}

	toSource () {
		return _Date.prototype.toSource.call(this);
	}

	toString () {
		return _Date.prototype.toString.call(this);
	}

	toTimeString () {
		return _Date.prototype.toTimeString.call(this);
	}

	toUTCString () {
		return _Date.prototype.toUTCString.call(this);
	}

	valueOf () {
		return _Date.prototype.valueOf.call(this);
	}

}
