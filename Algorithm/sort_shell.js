/**
 * Created by Administrator on 14-8-1.
 */
var Comparator=require("../util/comparator");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  希尔排序      最差 O(n log n)    O(n)          不稳定
 *               最优 O(n)
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */
var sort_shell=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		i=0,j=0,temp= 0,gap=parseInt((end-begin+1)/2);

	while(gap>=1){
		for(i=begin+gap;i<=end;i+=1){
			temp=array[i];
			j = i-gap;
			while(j>=begin&&comparator.greaterThan(array[j],temp)){
				array[j+gap]=array[j];
				j=j-gap;
			}
			array[j+gap]=temp;
		}
		gap = parseInt(gap/2);
	}
	return array;
}
module.exports=sort_shell;