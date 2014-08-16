/**
 * Created by Administrator on 14-8-16.
 */
/**
 * 最长公共子序列
 * 最长公共子序列与最长公共子串的区别在于最长公共子序列不要求在原字符串中是连续的，比如ADEFG和ABCDEG的最长公共子序列是ADEG。
 * 动态规划
 * @param sa
 * @param sb
 * @returns {*}
 * @constructor
 */

function LCS(sa,sb){
	var lena=sa.length,lenb=sb.length,
		num=[],  //num 为记录中间结果的数组，num是个二维数组
		flag=[],  //flag 为标记数组，用于标识下标的走向，构造出公共子序列，flag是个二维数组
		i= 0,j=0;

//  初始化num 多初始化一行一列 以备后用
	for(i = 0;i<=lena;i++){
		num[i]=new Array();
		for(j = 0;j<=lenb;j++){
			num[i][j]=0;
		}
	}
//  初始化flag 多初始化一行一列 以备后用
	for(i = 0;i<=lena;i++){
		flag[i]=new Array();
		for(j = 0;j<=lenb;j++){
			flag[i][j]=1;
		}
	}
//	计算中间结果
	for(i = 1;i<=lena;i++){
		for(j = 1;j<=lenb;j++){
			if(sa[i-1]===sb[j-1]){
				num[i][j]=num[i-1][j-1]+1;
				flag[i][j]=1; //下标走向 ： 斜向下
			}
//			sa[i]!==sb[j] && 中间结果中上面的比左边的小就存左面的数
			else if(num[i][j-1]>num[i-1][j]){
				num[i][j]=num[i][j-1];
				flag[i][j]=2;  //下标走向 ： 向右
			}
//			sa[i]!==sb[j] && 中间结果中上面的比左边的大就存上面的数
			else{
				num[i][j]=num[i-1][j];
				flag[i][j]=3;  //下标走向 ： 向下
			}
		}
	}
	return getSubsequence(num, flag,sa, sb);
}

function getSubsequence(num,flag,sa, sb){
	var res="",
		i=sa.length,
		j=sb.length;

	while(i>0&&j>0){
		if(flag[i][j]===1){
			res = sa[i-1]+res;
			i--;
			j--;
		}else if(flag[i][j]===2){
			j--;
		}else if(flag[i][j]===3){
			i--;
		}
	}
	return res;
}
module.exports=LCS;