/**
 * Created by Administrator on 14-7-31.
 */
var Comparator=require("../../util/comparator");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  插入排序      平均 O(n^2)        O(1)          稳定
 *               最优 O(n)
 *               最差 O(n^2)
 *
 * flash：http://www.tjbpi.com/jpk/shujujiegou/flash/%B5%DA%CA%AE%D2%BB%D5%C2%20%C5%C5%D0%F2/%D6%B1%BD%D3%B2%E5%C8%EB%C5%C5%D0%F2.swf
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */
var sort_insertion=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		i=0,j=0,temp=0;

	for(i=begin+1;i<=end;i++){
		temp=array[i];
		j = i-1;
		while(j>=begin&&comparator.greaterThan(array[j],temp)){
			array[j+1]=array[j];
			j--;
		}
		array[j+1]=temp;
	}
	return array;
}
module.exports=sort_insertion;