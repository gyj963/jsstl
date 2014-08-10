/**
 * Created by Administrator on 14-8-5.
 */
var Comparator=require("../../util/comparator");
var swap=require("../../util/swap");
var isOdd=require("../../util/isOdd");
var isEven=require("../../util/isEven");
/**
 *  名称          时间复杂度         额外空间       稳定性
 *  堆排序        O(n log n)        O(n)          不稳定
 *
 * @param opt
 * opt={
 *      array:Array,
 *      begin:number,
 *      end:number,
 *      compare:function
 * }
 */
var sort_heap=function(opt){
	var array=opt.array,
		begin=typeof opt.begin !== "undefined"&&opt.begin<=array.length-1&&opt.begin>=0?opt.begin: 0,
		end=typeof opt.end !== "undefined"&&opt.end<=array.length-1&&opt.end>0?opt.end: array.length-1,
		comparator=new Comparator(opt.compare),
		heap=array,
		front=[],
		back=[],
		cut=false;
	if(begin!==0){
		front=array.slice(0,begin);
		heap = array.splice(begin, end+1);
		back = array.slice(end+1,array.length);
		cut = true;
	}
	heap_build(heap,0,end-begin,comparator);
	heap_sort(heap,0,end-begin,comparator);
	if(cut){
		heap=front.concat(heap).concat(back);
	}
	return heap;
};

//建大根堆 （父节点比任何子节点都大）
var heap_build=function(heap,begin,end,comparator){
	var step=0;
	for(var i=end;i>begin;){
		step = heap_adjust(heap,i,begin,end,comparator);
		i-=step;
	}
	return heap;
}

var heap_adjust=function(heap,curIndex,begin,end,comparator){

	var fatherIndex=parent(curIndex),
		greater=heap[fatherIndex],
		needAdjust=false,
		step= 1;
	if(fatherIndex>=begin&&fatherIndex<end){
//		结点下标为偶数则为右孩子否则为左孩子
		if(isEven(curIndex)){
//			比较同父两个兄弟大小
			if(comparator.greaterThan(heap[curIndex],heap[curIndex-1])){
				greaterIndex=curIndex;
			}else{
				greaterIndex=curIndex-1;
			}
//			如果此时是右孩子此时就也已经处理了左孩子所以直接-2，将比较左孩子的过程去掉
			step=2;
		}else{
			greaterIndex=curIndex;
			step=1;
		}
		if(comparator.greaterThan(heap[greaterIndex],heap[fatherIndex])){
			swap(heap,greaterIndex,fatherIndex);
			if(rightChild(greaterIndex)<=end){
				curIndex=rightChild(greaterIndex);
				needAdjust=true;
			}else if(leftChild(greaterIndex)<=end){
				curIndex=leftChild(greaterIndex);
				needAdjust=true;
			}
			if(needAdjust){
				heap_adjust(heap,curIndex,begin,end,comparator);
			}
		}
	}
	return step;
}

var heap_sort=function(heap,begin,end,comparator){
	var childIndex= 0,
		needAdjust=false;

	while(true){
		if(begin>=end){
			return;
		}
		needAdjust=false;
		swap(heap, begin, end);
		end--;
		if(rightChild(begin)<=end){
			childIndex=rightChild(begin);
			needAdjust=true;
		}else if(leftChild(begin)<=end){
			childIndex=leftChild(begin);
			needAdjust=true;
		}
		if(needAdjust){
			heap_adjust(heap,childIndex,begin,end,comparator);
		}
	}
}
var parent=function(n){
	return parseInt((n-1)/2);
}
//		以0为起始下标的二叉树 下标为n的结点的左孩子：2*n+1，右孩子：2*（n+1）
var leftChild=function(n){
	return 2*n+1;
}
var rightChild=function(n){
	return 2*(n+1);
}
module.exports=sort_heap;