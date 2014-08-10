/**
 * Created by Administrator on 14-8-9.
 */
var search_binary=require("../../../algorithm/search/search_binary"),
	assert = require('assert');

describe('二分查找 Binary Search：', function () {
	it('查找元素在已经排序的数组中的下标', function () {
		assert.equal(search_binary([1, 2, 3, 4, 5], 3), 2);
		assert.equal(search_binary([1, 2, 3, 4, 5], 1), 0);
		assert.equal(search_binary([1, 2, 3, 4, 5], 2), 1);
		assert.equal(search_binary([1, 2, 3, 4, 5], 4), 3);
		assert.equal(search_binary([1, 2, 3, 4, 5], 5), 4);
		assert.equal(search_binary([1, 2, 3, 4, 5], 0), -1);
		assert.equal(search_binary([1, 2, 3, 4, 5, 8], 6), -1);
		assert.equal(search_binary([1, 2, 3, 4, 5], 100), -1);
	});
});