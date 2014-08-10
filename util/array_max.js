/**
 * Created by Administrator on 14-8-9.
 */
var array_max=function(array,begin,end){
	var begin=typeof begin !== "undefined"&&begin<=array.length-1&&begin>=0?begin: 0,
		end=typeof end !== "undefined"&&end<=array.length-1&&end>0?end: array.length- 1,
		max=array[begin];
	for(var i=begin+1;i<=end;i++){
		if(array[i]>max){
			max = array[i];
		}
	}
	return max;
}
module.exports=array_max;