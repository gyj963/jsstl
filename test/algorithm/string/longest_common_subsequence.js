/**
 * Created by Administrator on 14-8-16.
 */
var LCS=require("../../../algorithm/string/longest_common_subsequence"),
	assert = require('assert');

describe('最长公共子序列 longest common subsequence ：', function () {
	it('返回两字符串的最长公共子序列', function () {
		assert.equal(LCS("bab","caba"), "ba");
		assert.equal(LCS("caba","bab"), "ab");
		assert.equal(LCS("aawefss","afsfeaaewef"), "aawef");
		assert.equal(LCS("123","456"), "");
		assert.equal(LCS("ABCBDAB","BDCABA"), "BCBA");
	});
});