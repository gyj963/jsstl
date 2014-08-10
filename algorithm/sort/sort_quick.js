/**
 * Created by Administrator on 14-8-3.
 */
var Comparator=require("../../util/comparator");
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
var sort_quick=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		temp=0,left=0, right= 0;

	if(begin<end){
		left=begin;
		right=end;
		temp= array[left];
		do{
			while(comparator.greaterThan(array[right],temp)&&left<right){
				right=right-1;
			}
			if(left<right){
				array[left]=array[right];
				left=left+1;
			}
			while(comparator.lessThan(array[left], temp)&&left<right){
				left=left+1;
			}
			if(left<right){
				array[right]=array[left];
				right=right-1;
			}

		}while(left!=right);
		array[left]=temp;
		opt.begin =begin;
		opt.end =left-1;
		sort_quick(opt);
		opt.begin =left+1;
		opt.end =end;
		sort_quick(opt);
	}
	return array;
};

module.exports=sort_quick;