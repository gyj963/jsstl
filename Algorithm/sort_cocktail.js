/**
 * Created by Administrator on 14-8-3.
 */
var Comparator=require("../util/comparator");
var swap=require("../util/swap");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  鸡尾酒排序     O(n^2)            O(1)          稳定
 *
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */
var sort_cocktail=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		i=0,j= 0,temp= 0,flag=true;

	while(flag){
		flag = false;
		for(i = begin+1;i<=end;i++){
			if(comparator.greaterThan(array[i-1],array[i])){
				swap(array,i,i-1);
				flag = true;
			}
		}
		for(j=end-1;j>=begin+1;j--){
			if(comparator.greaterThan(array[j-1],array[j])){
				swap(array,j,j-1);
				flag = true;
			}
		}
		begin++;
		end--;
	}
	return array;
}
module.exports=sort_cocktail;