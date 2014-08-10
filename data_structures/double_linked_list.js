/**
 * Created by Administrator on 14-8-10.
 */
/**
 * 双向循环链表
 * @constructor
 */

function LinkedList(){
	this._length=0;
	this.head=null;
	this.tail=null;

	Object.defineProperty(this,'length',{
		get:function(){
			return this._length;
		}.bind(this)
	});
}

function Node(value){
	this.value=value;
	this.prev=null;
	this.next=null;
}
/**
 * 如当前链表为空，
 * isEmpty() 函数 返回 true
 * 否则返回false.
 * @returns {boolean}
 */
LinkedList.prototype.isEmpty=function (){
	return this._length===0;
}
/**
 * add()将value值添加到当前链表下表为index处
 * @param value
 * @param index
 */
LinkedList.prototype.add=function(value,index){
	if(index>this.length||index<0){
		throw new Error("Index out of bounds");
	}

	var node=new Node(value);

	if(typeof index!=="undefined"&&index<this._length){
		var preNode={},
			nextNode={},
			i=0;

		if(index===0){
			nextNode=this.head;
			this.head = node;
		}else{
			nextNode=this.getNode(index);
			preNode=nextNode.prev;
			preNode.next=node;
			node.prev=preNode;
		}
		nextNode.prev =node;
		node.next=nextNode;
	}else{
		if(!this.head){
			this.head=node;
		}
		if(this.tail){
			this.tail.next = node;
			node.prev=this.tail;
		}
		this.tail = node;
	}
	this._length+=1;
}
/**
 * get()获取当前链表下标为index处的值
 * @param index
 * @returns {ctor.constructor.value|*|value|result.value|Diff.diff.value|e.value}
 */
LinkedList.prototype.get=function(index){
	return this.getNode(index).value;
}
/**
 * getNode()获取当前链表下标为index处的整个结点。
 * @param index
 * @returns {null|*}
 */
LinkedList.prototype.getNode=function(index){
	if(index>=this.length||index<0){
		throw new Error("Index out of bounds");
	}

	var node=this.head,
		i= 0;
	for(i = 0;i<index;i++){
		node=node.next;
	}
	return node;
}
/**
 * del()删除当前链表下标为index处的结点
 * @param index
 */
LinkedList.prototype.del=function(index){
	if(index>=this.length||index<0){
		throw new Error("Index out of bounds");
	}

	this.delNode(this.getNode(index));
}
/**
 * delNode()删除当前链表中node结点
 * @param node
 */
LinkedList.prototype.delNode=function(node){
	var prevNode={},
		nextNode={},
		i= 0;
	prevNode=node.prev;
	nextNode=node.next;

	if(node===this.tail){
		this.tail=prevNode;
	}else{
		nextNode.prev=prevNode;
	}

	if(node===this.head){
		this.head=nextNode;
	}else{
		prevNode.next=nextNode;
	}

	this._length-=1;
}
/**
 * map()对当前链表中每个结点值，都以结点值作为fn的参数，调用并执行fn函数
 * @param fn
 */
LinkedList.prototype.map=function(fn){
	var node=this.head,
		i= 0,index=0;
	while(index<this._length){
		fn(node.value);
		node = node.next;
		index++;
	}
}

module.exports=LinkedList;