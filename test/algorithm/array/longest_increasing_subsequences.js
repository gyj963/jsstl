/**
 * Created by Administrator on 14-8-14.
 */
var LIS=require("../../../algorithm/array/longest_increasing_subsequences"),
	assert = require('assert');

describe('最长递增子序列 longest increasing subsequences：', function () {
	it('返回最长递增子序列的长度', function () {
		assert.equal(LIS([1,5,8,2,3,4]), 4);
		assert.equal(LIS([0,4,5,2,6]), 4);
		assert.equal(LIS([5,4,3,2,1]), 1);
	});
});