/**
 * Created by Administrator on 14-8-11.
 */
var LinkedList=require("./double_linked_list");
/**
 * 双端队列（deque，全名double-ended queue）
 * @constructor
 */
function Deque(){
	this.l=new LinkedList();

	Object.defineProperty(this,"length",{
		get:function(){
			return this.l.length;
		}.bind(this)
	});
}
/**
 * isEmpty()函数返回真(true)如果队列为空，否则返回假(false)。
 * @returns {boolean}
 */
Deque.prototype.isEmpty=function(){
	return this.l.isEmpty();
}
/**
 * push_back()函数将value值插入到双端队列尾部
 * @param value
 */
Deque.prototype.push_back=function(value){
	this.l.add(value, this.l.length);
}
/**
 * push_front()函数将value值插入到双端队列头部
 * @param value
 */
Deque.prototype.push_front=function(value){
	this.l.add(value,0)
}
/**
 * pop_back()函数将删除尾部元素，并返回删除的元素值
 * @returns {*}
 */
Deque.prototype.pop_back=function(){
	var _back=this.back();
	this.l.del(this.l.length-1);
	return _back;
}
/**
 * pop_front()函数将删除头部元素，并返回删除的元素值
 * @returns {*}
 */
Deque.prototype.pop_front=function(){
	var _front=this.front();
	this.l.del(0);
	return _front;
}
/**
 * back()函数返回尾部元素
 * @returns {ctor.constructor.value|*|value|result.value|Diff.diff.value|e.value}
 */
Deque.prototype.back=function(){
	return this.l.get(this.l.length-1);
}
/**
 * front()函数返回头部元素
 * @returns {ctor.constructor.value|*|value|result.value|Diff.diff.value|e.value}
 */
Deque.prototype.front=function(){
	return this.l.get(0);
}
/**
 * size()返回队列中元素的个数.
 *（返回元素个数也可用 .length 获取）
 * @returns {Queue.length|*}
 */
Deque.prototype.size=function(){
	return this.length;
}
module.exports=Deque;