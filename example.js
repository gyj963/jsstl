/**
 * Created by Administrator on 14-7-31.
 */
'use strict';
var sort_insertion=require("./algorithm/sort_insertion");
var sort_binaryInsert=require("./algorithm/sort_binaryInsert");
var sort_shell=require("./algorithm/sort_shell");
var sort_select=require("./algorithm/sort_select");
var sort_bubble=require("./algorithm/sort_bubble");
var sort_quick=require("./algorithm/sort_quick");
var sort_quick_partition=require("./algorithm/sort_quick_partition");
var sort_heap=require("./algorithm/sort_heap");
var sort_merge=require("./algorithm/sort_merge");

//	var array=[];
	var array=[4,12,5,77];
//	var array=[89,62,35,75,48,96];
//	var array=[24,88,79,32,43,97,1,12,234,55,22,777,3426,86,33,22,775,26,62,84,12];
//	var array=[24,88,79,32,43,97,1,12,234,55,22,777];
//	var array=["a","abf","ae","h","b","cba","ar"];
//	var array=[49,38,52,44,81,97,76,13,27,65];
var opt={
	array:array,
//	begin:0,
//	end:3
//	compare:function(a,b){
//		if(a ===b){
//			return 0;
//		}
//		return a<b?1:-1
//	}
}
//sort_insertion(opt);
//sort_binaryInsert(opt);
//sort_shell(opt);
//sort_select(opt);
//sort_bubble(opt);
//sort_quick(opt);
//sort_quick_partition(opt);
//sort_heap(opt);
sort_merge(opt);
console.log(array);
