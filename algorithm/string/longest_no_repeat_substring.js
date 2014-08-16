/**
 * Created by Administrator on 14-8-16.
 */
/**
 * 最长不重复子串
 * 动态规划+hash，时间复杂度O(n) 空间复杂度O(1)算法
 * @param s
 * @returns {string}
 * @constructor
 */
function LNRS(s){
	var len=s.length,curlen= 1,maxlen= 0,
		maxindex= 0,laststart= 0,
		visit=[],
		subString="",
		i= 0,j=0;

//	初始化visit
	for(i = 0;i<len;i++){
		visit[s[i]]=-1;
	}
	visit[s[0]]=0;

	for(i = 1;i<len;i++){
		if(visit[s[i]]===-1){
			curlen++;
			visit[s[i]]=i;  //记录字符下标
		}else{
//			如果当前的起始位置在当前下标的字母曾出现的位置之后 就更新 当前长度 新的laststart 并更新字符下标
			if(laststart<=visit[s[i]]){
				curlen = i-visit[s[i]];
				laststart=visit[s[i]]+1;
				visit[s[i]]=i;  //更新字符下标
			}
//			否则 即 当前的起始位置在当前下标的字母曾出现的位置之前则当前字母在当前的起始位置后是第一次出现仍算成当前的不重复子串，并更新字符下标
			else{
				curlen++;
				visit[s[i]]=i;  //更新字符下标
			}
		}
		if(curlen>maxlen){
			maxlen=curlen;
			maxindex=i-maxlen+1;
		}
	}

	subString=s.slice(maxindex,maxindex+maxlen);

	return subString;
}

module.exports=LNRS;