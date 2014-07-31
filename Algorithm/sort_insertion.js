/**
 * Created by Administrator on 14-7-31.
 */

var Comparator=require("../util/comparator");
var sort_insertion=function(opt){
	var array=opt.array;
		begin=opt.begin?opt.begin: 0,
		end=opt.end&&opt.end<=array.length-1?opt.end: array.length-1,
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
}
module.exports=sort_insertion;