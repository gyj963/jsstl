/**
 * Created by Administrator on 14-8-15.
 */
var LCS=require("../../../algorithm/string/longest_common_substring"),
	assert = require('assert');

describe('最长公共子串 longest common substring ：', function () {
	it('返回两字符串的最长公共子串', function () {
		assert.equal(LCS("bab","caba"), "ab");
		assert.equal(LCS("caba","bab"), "ba");
		assert.equal(LCS("aawefss","afsfeaaewef"), "wef");
		assert.equal(LCS("21232523311324","312123223445"), "21232");
		assert.equal(LCS("123","456"), "");
	});
});