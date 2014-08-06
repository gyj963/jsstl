/**
 * Created by Administrator on 14-8-2.
 */
var Comparator=require("../util/comparator");
var swap=require("../util/swap");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  冒泡排序      平均 O(n^2)        O(1)          稳定
 *               最优 O(n)
 *               最差 O(n^2)
 *
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */
var sort_bubble=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		i=0,temp= 0,flag=true;

	while(flag){
		flag = false;
		for(i = begin+1;i<=end;i++){
			if(comparator.greaterThan(array[i-1],array[i])){
				swap(array,i,i-1);
				flag = true;
			}
		}
		end--;
	}
	return array;
}
module.exports=sort_bubble;