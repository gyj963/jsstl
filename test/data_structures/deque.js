/**
 * Created by Administrator on 14-8-11.
 */
'use strict';

var Deque = require('../../data_structures/deque'),
	assert = require('assert');

describe('Deque', function () {
	it('should start empty', function () {
		var dq = new Deque();
		assert(dq.isEmpty());
		assert.equal(dq.length, 0);
		assert.equal(dq.size(), 0);
	});

	it('should implement a double-end FIFO logic', function () {
		var dq = new Deque();
		dq.push_back(1);
		dq.push_back(2);
		dq.push_back(3);
		assert.equal(dq.length, 3);
		assert.equal(dq.size(), 3);
		assert.equal(dq.pop_front(), 1);
		assert.equal(dq.pop_back(), 3);
		assert.equal(dq.pop_back(), 2);
		assert(dq.isEmpty());

		assert.throws(function () { dq.pop_front(); }, Error);
		assert.throws(function () { dq.pop_back(); }, Error);
	});

	it('should allow me to peek at the first element and last element in' +
		   ' line without popping it', function () {
		var dq = new Deque();
		assert.throws(function () { dq.front(); }, Error); //Empty list
		assert.throws(function () { dq.back(); }, Error); //Empty list
		dq.push_back(2);
		dq.push_front(1);
		dq.push_back(3);
		assert.equal(dq.front(), 1);
		assert.equal(dq.back(), 3);
		assert.equal(dq.front(), 1);
		assert.equal(dq.back(), 3);
		dq.pop_front();
		assert.equal(dq.front(), 2);
		assert.equal(dq.back(), 3);
		dq.pop_back();
		assert.equal(dq.front(), 2);
		assert.equal(dq.back(), 2);
	});
});


