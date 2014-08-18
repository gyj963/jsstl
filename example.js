/**
 * Created by Administrator on 14-7-31.
 */
'use strict';
var sort_insertion=require("./algorithm/sort/sort_insertion");
var sort_binaryInsert=require("./algorithm/sort/sort_binaryInsert");
var sort_shell=require("./algorithm/sort/sort_shell");
var sort_select=require("./algorithm/sort/sort_select");
var sort_bubble=require("./algorithm/sort/sort_bubble");
var sort_quick=require("./algorithm/sort/sort_quick");
var sort_quick_partition=require("./algorithm/sort/sort_quick_partition");
var sort_heap=require("./algorithm/sort/sort_heap");
var sort_merge=require("./algorithm/sort/sort_merge");
var sort_counting=require("./algorithm/sort/sort_counting");
var LinkedList=require("./data_structures/double_linked_list");
var BinarySearchTree=require("./data_structures/binary_search_tree");
var LIS=require("./algorithm/array/longest_increasing_subsequences");
var LCS=require("./algorithm/string/longest_common_substring");
var LCS=require("./algorithm/string/longest_common_subsequence");
var LNRS=require("./algorithm/string/longest_no_repeat_substring");
var LPS=require("./algorithm/string/longest_palindromic_substring");

//	var array=[];
//	var array=[4,12,5,77];
//	var array=[89,62,35,75,48,96];
//	var array=[24,88,79,32,43,97,1,12,234,55,22,777,3426,86,33,22,775,26,62,84,12];
//	var array=[24,88,79,32,43,97,1,12,234,55,22,777];
//	var array=["a","abf","ae","h","b","cba","ar"];
//	var array=[49,38,52,44,81,97,76,13,27,65];

//var opt={
//	array:array,
//	begin:3,
//	end:5
//	compare:function(a,b){
//		if(a ===b){
//			return 0;
//		}
//		return a<b?1:-1
//	}
//}

//sort_insertion(opt);
//sort_binaryInsert(opt);
//sort_shell(opt);
//sort_select(opt);
//sort_bubble(opt);
//sort_quick(opt);
//sort_quick_partition(opt);
//sort_heap(opt);
//sort_merge(opt);
//sort_counting(opt);
//console.log(array);


//var linkedList=new LinkedList();
//console.log(linkedList);
//console.log(linkedList.isEmpty());
//linkedList.add(1,0);
//console.log(linkedList);
//linkedList.add(2,1);
//console.log(linkedList);
//linkedList.add(3,2);
//console.log(linkedList);
//linkedList.add(0,0);
//console.log(linkedList);
//var thisnode=linkedList.get(2);
//console.log(thisnode);
//linkedList.del(2);
//console.log(linkedList);

//var binarySearchTree=new BinarySearchTree();
//binarySearchTree.insert(4);
//binarySearchTree.insert(2);
//binarySearchTree.insert(7);
//binarySearchTree.insert(3);
//binarySearchTree.insert(12);
//binarySearchTree.insert(0);
//binarySearchTree.insert(5);
//binarySearchTree.insert(15);
//console.log(binarySearchTree.root);
//console.log(binarySearchTree.contains(6));
//console.log(binarySearchTree.contains(2));
//console.log(binarySearchTree.contains(8));
//console.log(binarySearchTree.contains(3));
//binarySearchTree.remove(4);
//console.log(binarySearchTree.root);

//console.log(LIS([1,5,8,2,3,4]));
//console.log(LCS("ABCBDAB","BDCABA"));
//console.log(LCS("caba","bab"));
//console.log(LCS("21232523311324","312123223445"));

//console.log(LNRS("ABCBDAB"));
console.log(LPS("babcbabcbaccba"));