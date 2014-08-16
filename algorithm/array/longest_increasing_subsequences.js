/**
 * Created by Administrator on 14-8-14.
 */
/**
 * 最长递增子序列 方法一
 * @param array
 * @returns {number}
 * @constructor
 */
function Lis_a(array){
	this.array=array;
	this.dp=[];
	this.size=1;
	this.lisres=[];
	var i= 0,j= 0;

	for(i = 0;i<this.array.length;i++){
		this.dp[i]=1;
		for(j = 0;j<i;j++){
			if(this.array[i]>this.array[j]&&this.dp[i]<this.dp[j]+1){
				this.dp[i]=this.dp[j]+1;
				if(this.dp[i]>this.size){
					this.size = this.dp[i];
				}
			}
		}
	}
	return this.size;
}
/**
 * 将function Lis_a(array)中的return注释掉 并酱紫写：
 * function lis(array){
 *	var l=new Lis_a(array);
 *	 	l._getLIS(array.length-1);
 *	return l.lisres;
 *}
 * 酱紫可以获取最长递增序列的序列数组
 * @param index
 * @private
 */
Lis_a.prototype._getLIS=function(index){
	var isLIS=false;
	if(index<0||this.size ===0){
		return ;
	}
	if(this.dp[index]===this.size){
		this.size--;
		isLIS=true
	}

	this._getLIS(index-1);
	if(isLIS){
		this.lisres.push(this.array[index]);
	}
}

/**
 * 最长递增子序列 方法二 （动态规划和二分查找结合）
 * @param array
 * @returns {Number}
 * @constructor
 */
function Lis_b(array){
	var MaxV=[],
		pos,i;
	MaxV.push(array[0]);
	for(i = 1;i<array.length;i++){
		if(array[i]>MaxV[MaxV.length-1]){
			MaxV.push(array[i]);
		}else{
			pos=binary_search(MaxV, array[i]);
			MaxV[pos]=array[i];
		}
	}
	return MaxV.length;
}
/**
 * 二分查找比x稍大的MaxV中的位置
 * @param arr
 * @param x
 * @returns {number}
 */
function binary_search(MaxV,x){
	var left= 0,right=MaxV.length- 1,middle;

	while(left<=right){
		middle=parseInt((left+right)/2);
		if(MaxV[middle]<=x){
			left = middle+1;
		}else{
			right=middle-1;
		}
	}
	return left;
}

module.exports=Lis_b;