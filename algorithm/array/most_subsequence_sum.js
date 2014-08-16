/**
 * Created by Administrator on 14-8-14.
 */
/**
 * 最大子序列和
 */
function mss(array){
//	最大和初始值为负无穷
	var maxSum=Number.NEGATIVE_INFINITY,
		curbegin = begin = end = 0,
		sum= 0,i=0;

	for(i = 0;i<array.length;i++){
		if(sum<0){
			sum = array[i];
			curbegin = i;
		}else{
			sum+=array[i];
		}
		if(sum>maxSum){
			maxSum=sum;
			begin = curbegin;
			end = i;
		}
	}
	return {
		sum:maxSum,
		begin:begin,
		end:end
	}
}

module.exports=mss;
