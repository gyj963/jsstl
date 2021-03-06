/**
 * Created by Administrator on 14-8-9.
 */
var sort_counting=require("../../../algorithm/sort/sort_counting"),
	assert=require("assert");
describe("计数排序 counting sort:",function(){
	it("参数对象中只有数组(array)时，对数组中的全部，可以进行正确排序（从小到大）",function(){
		assert.deepEqual(sort_counting({array:[]}),[]);
		assert.deepEqual(sort_counting({array:[89,62,35,75,48,96]}),[ 35, 48, 62, 75, 89, 96 ]);
		assert.deepEqual(sort_counting({array:[24,88,79,32,43,97,1,12,234,55,22,777,3426,86,33,22,775,26,62,84,12]}),[ 1, 12, 12, 22, 22, 24, 26, 32, 33, 43, 55, 62, 79, 84, 86, 88, 97, 234, 775, 777, 3426 ]);
	});
	it("参数对象中有数组(array)和起始下标（begin）、终止下标（end），对数组中从起始下标到终止下标排序，可以进行正确排序（从小到大）",function(){
		assert.deepEqual(sort_counting({array:[],begin:3,end:5}),[]);
		assert.deepEqual(sort_counting({array:[89,62,35,75,48,96],begin:3,end:5}),[89,62,35,48,75,96]);
		assert.deepEqual(sort_counting({array:[24,88,79,32,43,97,1,12,234,55,22,777,3426,86,33,22,775,26,62,84,12],begin:0,end:3}),[24,32,79,88,43,97,1,12,234,55,22,777,3426,86,33,22,775,26,62,84,12]);
	});
})