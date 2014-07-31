/**
 * Created by Administrator on 14-7-31.
 */
'use strict';
var sort_insertion=require("./algorithm/sort_insertion");
//	var array=[4,12,5,77];
	var array=[89,62,35,75,48,96];
//	var array=[24,88,79,32,43,97,1,12,234,55,22,777,3426,86,33,22,775,26,62,84,12];
//	var array=["a","abf","ae","h","b","cba","ar"];
var opt={
	array:array
//	begin:0,
//	end:8,
//	compare:function(a,b){
//		if(a ===b){
//			return 0;
//		}
//		return a<b?1:-1
//	}
}
sort_insertion(opt);
console.log(array);
