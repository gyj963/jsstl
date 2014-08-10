/**
 * Created by Administrator on 14-8-10.
 */
'use strict';

var Queue = require('../../data_structures/queue'),
	assert = require('assert');

describe('Queue', function () {
	it('should start empty', function () {
		var q = new Queue();
		assert(q.isEmpty());
		assert.equal(q.length, 0);
		assert.equal(q.size(), 0);
	});

	it('should implement a FIFO logic', function () {
		var q = new Queue();
		q.push(1);
		q.push(2);
		q.push(3);
		assert.equal(q.length, 3);
		assert.equal(q.size(), 3);
		assert.equal(q.pop(), 1);
		assert.equal(q.pop(), 2);
		assert.equal(q.pop(), 3);
		assert(q.isEmpty());
		assert.throws(function () { q.pop(); }, Error);
	});

	it('should allow me to peek at the first element and last element in' +
		   ' line without popping it', function () {
		var q = new Queue();
		assert.throws(function () { q.front(); }, Error); //Empty list
		assert.throws(function () { q.back(); }, Error); //Empty list
		q.push(1);
		q.push(2);
		q.push(3);
		assert.equal(q.front(), 1);
		assert.equal(q.back(), 3);
		assert.equal(q.front(), 1);
		assert.equal(q.back(), 3);
		q.pop();
		assert.equal(q.front(), 2);
		assert.equal(q.back(), 3);
	});
});


