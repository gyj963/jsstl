/**
 * Created by Administrator on 14-8-10.
 */
var LinkedList=require("./double_linked_list");
/**
 * 栈 LIFO
 * @constructor
 */
function Stack(){
	this.l=new LinkedList();

	Object.defineProperty(this,"length",{
		get:function(){
			return this.l.length;
		}.bind(this)
	});
}
/**
 * 如当前堆栈为空，
 * isEmpty() 函数 返回 true
 * 否则返回false.
 * @returns {*|Boolean|boolean}
 */
Stack.prototype.isEmpty=function(){
	return this.l.isEmpty();
}
/**
 * pop() 函数移除堆栈中最顶层元素。
 * @returns {*}
 */
Stack.prototype.pop=function(){
	var _top=this.top();
	this.l.del(this.l.length-1);
	return _top;
}
/**
 * push() 函数将 value 值压栈，使其成为栈顶的第一个元素。
 * @param value
 */
Stack.prototype.push=function(value){
	this.l.add(value, this.l.length);
}
/**
 * size() 函数返当前堆栈中的元素数目。
 * （返回元素个数也可用 .length 获取）
 * @returns {*}
 */
Stack.prototype.size=function(){
	return this.length;
}
/**
 * top() 函数返回对栈顶元素的引用.
 * @returns {*}
 */
Stack.prototype.top=function(){
	return this.l.get(this.l.length-1);
}
module.exports=Stack;