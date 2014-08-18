/**
 * Created by Administrator on 14-8-18.
 */
var LPS=require("../../../algorithm/string/longest_palindromic_substring"),
	assert = require('assert');

describe('最长回文字串 之 Manacher’s Algorithm：', function () {
	it('返回字符串的最长回文字串', function () {
		assert.equal(LPS("babcbabcbaccba"), "abcbabcba");
		assert.equal(LPS("bab"), "bab");
		assert.equal(LPS("caba"), "aba");
		assert.equal(LPS("afsfeaaewef"), "eaae");
		assert.equal(LPS("123"), "1");
	});
});