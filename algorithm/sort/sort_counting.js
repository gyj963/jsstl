/**
 * Created by Administrator on 14-8-9.
 */
var Comparator=require("../../util/comparator");
var array_max=require("../../util/array_max");

/**
 *  名称          时间复杂度                      额外空间       稳定性
 *  计数排序      O(n+k) n个0到k之间的整数时       O(n)          稳定
 *
 *  注：用来排序密集正整数
 * @param opt
 * opt={
 *      array:Array, （数组里是正整数）
 *      begin:number,
 *      end:number,
 * }
 */
var sort_counting=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		position=[],temp=[],i, j, k,
		max=array_max(array,begin, end);

	for(i=0;i<=max;i++){
		position[i]=0;
	}
	for(i=begin;i<=end;i++){
		position[array[i]]+=1;
	}
	for(i=1;i<=max;i++){
		position[i]+=position[i-1];
	}
	for(k=end;k>=begin;k--){
		temp[position[array[k]]-1]=array[k];
		position[array[k]]-=1;
	}
	for(k = begin,j = 0;j<temp.length;j++,k++){
		array[k]=temp[j];
	}
	return array;
}
module.exports=sort_counting;