/**
 * Created by Administrator on 14-8-15.
 */
/**
 * 最长公共字串
 * 找两个字符串的最长公共子串，要求在原字符串中是连续的。
 * @param sa
 * @param sb
 * @returns {number}
 * @constructor
 */
function LCS(sa,sb){
	var cur=[], //当前行
		last=[], //上一行
		subString="",
		maxIndex=-1,
		max= 0,i= 0,j= 0,k= 0;

	for(i = 0;i<sb.length;i++){
		for(k=0;k<sa.length;k++){
			cur[k]=0;
		}

		for(j=0;j<sa.length;j++){
			if(sb[i]===sa[j]){
				if(j ===0||i ===0){
					cur[j]=1;
				}else{
					cur[j]=last[j-1]+1;
				}
			}
		}
		for(k=0;k<sa.length;k++){
			last[k]=cur[k];
			if(cur[k]>max){
				max = cur[k];
				maxIndex=k;
			}
		}
	}
	subString=sa.slice(maxIndex-max+1,maxIndex+1);

	return subString;
}

module.exports=LCS;