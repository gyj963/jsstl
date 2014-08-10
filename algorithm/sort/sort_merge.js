/**
 * Created by Administrator on 14-8-6.
 */
var Comparator=require("../../util/comparator");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  归并排序      平均O(nlogn)       O(n)          稳定
 *               最差O(nlogn)
 *               最优O(n)
 *
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */
var sort_merge=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare);

	merge_sort(array,begin, end,comparator);
	return array;
};


var merge_sort=function(array,begin, end,comparator){
	var middle=0;
	if(begin<end){
		middle=parseInt((begin+end)/2);
		merge_sort(array, begin, middle,comparator);
		merge_sort(array,middle+1,end,comparator);
		merge_array(array,begin, middle,end,comparator);
	}
}

var merge_array=function(array,begin, middle,end,comparator){
//	i，j 为前后两段的指针 ，m，n 为两段的末尾指针
	var i=begin,j=middle+ 1,
		m=middle,n=end,
		temp=[];
	while(i<=m&&j<=n){
		if(comparator.greaterThan(array[i],array[j])){
			temp.push(array[j++]);
		}else{
			temp.push(array[i++]);
		}
	}
	while(i<=m){
		temp.push(array[i++]);
	}
	while(j<=n){
		temp.push(array[j++]);
	}
	for(var t=0;t<temp.length;t++){
		array[begin+t]=temp[t];
	}
}
module.exports=sort_merge;