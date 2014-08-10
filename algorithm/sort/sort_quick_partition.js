/**
 * Created by Administrator on 14-8-4.
 */
/**
 * Created by Administrator on 14-8-3.
 */
var Comparator=require("../../util/comparator");
var swap=require("../../util/swap");
var generateRandomInt=require("../../util/generateRandomInt");
var getDgs=require("../../util/getDgs");

/**
 *  名称          时间复杂度         额外空间       稳定性
 *  快速排序      O(n log n)        O(1)          不稳定
 *
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */

var sort_quick_partition=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		temp=0;

	return (function sort_quick_tmp(array,left,right,comparator){
		if(left<right){
			temp=partition(array,left,right,comparator);
			sort_quick_tmp(array,left,temp-1,comparator);
			sort_quick_tmp(array,temp+1,right,comparator)
		}
		return array;
	})(array,begin, end, comparator)
};

var partition=function(array,left,right,comparator){
	swap(array,randPosition(left, right),right);
	var divposition=left,
		randposition=right;
	for(var i=left;i<right;i++){
		if(comparator.lessThan(array[i],array[randposition])){
			swap(array, i, divposition);
			divposition++;
		}
	}
	swap(array,randposition,divposition);
	return divposition;
};

var randPosition=function(left,right){
	var size=right-left+ 1,
		dgs=getDgs(size),
		randposition=left+generateRandomInt(10*Math.sqrt(dgs))%size;
	return randposition;
};
module.exports=sort_quick_partition;