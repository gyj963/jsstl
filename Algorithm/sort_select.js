/**
 * Created by Administrator on 14-8-2.
 */
var Comparator=require("../util/comparator");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  选择排序       O(n^2)            O(1)         不稳定
 *
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
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1?opt.end: array.length-1,
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
			temp = array[min];
			array[min]=array[i];
			array[i]=temp;
		}
	}
	return array;
}
module.exports=sort_select;