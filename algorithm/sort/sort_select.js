/**
 * Created by Administrator on 14-8-2.
 */
var Comparator=require("../../util/comparator");
var swap=require("../../util/swap");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  选择排序       O(n^2)            O(1)         不稳定
 *
 * flash：http://ds.fzu.edu.cn/fine/resources/FlashContent.asp?id=85
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */
var sort_select=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		i=0,j=0,temp= 0,min=0;

	for(i=begin;i<end;i++){
		min = i;
		for(j = i+1;j<=end;j++){
			if(comparator.greaterThan(array[min], array[j])){
				min=j;
			}
		}
		if(min!==i) {
			swap(array,i,min);
		}
	}
	return array;
}
module.exports=sort_select;