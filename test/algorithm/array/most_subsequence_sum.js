/**
 * Created by Administrator on 14-8-14.
 */
var mss=require("../../../algorithm/array/most_subsequence_sum"),
	assert = require('assert');

describe('最大子序列和 most subsequence sum（不知这样翻译是否准确）：', function () {
	it('查找元素在已经排序的数组中的下标', function () {
		assert.equal(mss([0,-2,3,5,-1,2]).sum, 9);
		assert.equal(mss([0,-2,3,5,-1,2]).begin, 2);
		assert.equal(mss([0,-2,3,5,-1,2]).end, 5);
		assert.equal(mss([-9,-2,-3,-5,-3]).sum, -2);
		assert.equal(mss([-9,-2,-3,-5,-3]).begin, 1);
		assert.equal(mss([-9,-2,-3,-5,-3]).end, 1);
	});
});