/**
 * Created by Administrator on 14-8-2.
 */
var Comparator=require("../util/comparator");
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
		begin=opt.begin&&opt.begin<=array.length-1?opt.begin: 0,
		end=opt.end&&opt.end<=array.length-1?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		i=0,temp= 0,flag=true;

	while(flag){
		flag = false;
		for(i = begin+1;i<=end;i++){
			if(comparator.greaterThan(array[i-1],array[i])){
				temp = array[i];
				array[i]=array[i-1];
				array[i-1]=temp;
				flag = true;
			}
		}
		end--;
	}
	return array;
}
module.exports=sort_bubble;