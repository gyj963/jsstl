/**
 * Created by Administrator on 14-8-9.
 */
/**
 * 二分查找
 * 查找元素elem在已排序的sortedArray中的下标位置，
 * 如未查到返回-1
 * time：O(lg n)
 *
 * @param Array
 * @param Number|String
 * @returns {number}
 */
var search_binary=function(sortedArray,elem){
	var begin=0,end=sortedArray.length- 1,
		middle=0;
	while(begin<=end){
		middle=parseInt((begin+end)/2);
		if(sortedArray[middle]===elem){
			return middle;
		}else if(elem<sortedArray[middle]){
			end=middle-1;
		}else if(elem>sortedArray[middle]){
			begin = middle+1;
		}
	}
	return -1;
}
module.exports=search_binary;