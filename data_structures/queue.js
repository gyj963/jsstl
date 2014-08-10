/**
 * Created by Administrator on 14-8-10.
 */
var LinkedList=require("./double_linked_list");
/**
 * 队列 FIFO
 * @constructor
 */
function Queue(){
	this.l=new LinkedList();

	Object.defineProperty(this, "length",{
		get:function(){
			return this.l.length;
		}.bind(this)
	});
}
/**
 * isEmpty()函数返回真(true)如果队列为空，否则返回假(false)。
 * @returns {boolean}
 */
Queue.prototype.isEmpty=function(){
	return this.l.isEmpty();
}
/**
 * back()返回一个引用，指向队列的最后一个元素。
 * @returns {ctor.constructor.value|*|value|result.value|Diff.diff.value|e.value}
 */
Queue.prototype.back =function(){
	return this.l.get(this.l.length-1);
}
/**
 * front()返回队列第一个元素的引用。
 * @returns {ctor.constructor.value|*|value|result.value|Diff.diff.value|e.value}
 */
Queue.prototype.front =function(){
	return this.l.get(0);
}
/**
 * pop()函数删除队列的一个元素。
 * @returns {ctor.constructor.value|*|value|result.value|Diff.diff.value|e.value}
 */
Queue.prototype.pop =function(){
	var _front=this.front();
	this.l.del(0);
	return _front;
}
/**
 * push()函数往队列中加入一个元素。
 * @param value
 */
Queue.prototype.push =function(value){
	this.l.add(value,this.l.length);
}
/**
 * size()返回队列中元素的个数.
 * （返回元素个数也可用 .length 获取）
 * @returns {*}
 */
Queue.prototype.size=function(){
	return this.length;
}

module.exports=Queue;

