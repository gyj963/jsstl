/**
 * Created by Administrator on 14-8-16.
 */
var LNRS=require("../../../algorithm/string/longest_no_repeat_substring"),
	assert = require('assert');

describe('最长不重复字串 longest no repeat substring ：', function () {
	it('返回字符串的最长不重复字串', function () {
		assert.equal(LNRS("ABCBDAB"), "CBDA");
		assert.equal(LNRS("bab"), "ba");
		assert.equal(LNRS("caba"), "cab");
		assert.equal(LNRS("afsfeaaewef"), "sfea");
		assert.equal(LNRS("123"), "123");
	});
});