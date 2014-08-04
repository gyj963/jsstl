/**
 * Created by Administrator on 14-8-3.
 */
var Comparator=require("../util/comparator");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  快速排序      O(n^2)            O(1)          稳定
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
		begin=opt.begin&&opt.begin<=array.length-1?opt.begin: 0,
		end=opt.end&&opt.end<=array.length-1?opt.end: array.length-1,
		comparator=opt.comparator||new Comparator(opt.compare),
		temp=0,left=0, right= 0,lopt=opt,ropt=opt;
	console.log(begin, end);
	if(begin===end){
		console.log("equal");
	}
	if(begin<end){
		console.log("yes");
		left=begin;
		right=end;
		temp= array[left];
		do{
			while(comparator.greaterThan(array[right],temp)&&left<right){
				right--;
			}
			if(left<right){
				array[left]=array[right];
				left++;
			}
			while(comparator.lessThan(array[left], temp)&&left<right){
				left++;
			}
			if(left<right){
				array[right]=array[left];
				right--;
			}

		}while(left!=right);
		array[left]=temp;

		lopt.begin =begin;
		lopt.end =left-1;
		sort_quick(lopt);
		ropt.begin =left+1;
		ropt.end =end;
		sort_quick(ropt);
	}
	return array;
};

module.exports=sort_quick;