/**
 * Created by Administrator on 14-8-18.
 */
/**
 * 最长回文字串 之 Manacher’s Algorithm  O(n)
 * 英：http://leetcode.com/2011/11/longest-palindromic-substring-part-ii.html
 * 中：http://blog.csdn.net/han_xiaoyang/article/details/11969497
 * @param s
 * @constructor
 */
function LPS(s){
	var temp = [],p = [],
		temp = s.split(""),
		t = "", len = 0, tres="", res="",
		C = 0, L = 0, R = 0, i = 0, j = 0,
		k = 0, li = 0, ri = 0, maxlen = 0, maxi = 0;
	t = temp.join("#");
	t="#"+t+"#";
	len = t.length;
	for(k = 0; k < len; k++){
		p[k]=0;
	}

	L = C - p[C];
	R = C + p[C];
	i = C - 1;
	j = C + 1;
	while(C < len){

		while(i - p[i] >= L){
			p[j] = p[i];


			li = j - p[j] - 1;
			ri = j + p[j] + 1;

			while(li >= 0 && ri < len && t[li] === t[ri]){
				p[j] += 1;
				li--;
				ri++;
			}

			i--;
			j++;
		}

		if(j <= R){
			p[j] = R - j;
		}
		li = j - p[j] - 1;
		ri = j + p[j] + 1;
		while(li >= 0 && ri < len && t[li] === t[ri]){
			p[j] += 1;
			li--;
			ri++;
		}

		C = j;
		L = C - p[C];
		R = C + p[C];
		i = C - 1;
		j = C + 1;
	}

	for(k = 0; k < len; k++){
		if(p[k] > maxlen){
			maxlen = p[k];
			maxi = k;
		}
	}
	tres = t.slice(maxi - maxlen, maxi + maxlen + 1);
	res = tres.split("#").join("");

	return res;
}

module.exports=LPS;