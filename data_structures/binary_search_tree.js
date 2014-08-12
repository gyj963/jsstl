/**
 * Created by Administrator on 14-8-11.
 */
var Comparator=require("../util/comparator");
function BinarySearchTree(compareFn){
	this.root=null;
	this._size=0;

	this._comparator=new Comparator(compareFn);

	Object.defineProperty(this,"size",{
		get:function(){
			return this._size;
		}.bind(this)
	});
}

BinarySearchTree.prototype.insert=function(value,parent){
	if(!parent){
		if(!this.root){
			this.root = new Node(value, null);
			this._size++;
			return;
		}
		parent = this.root;
	}
	var child=this._comparator.lessThan(value, parent.value)?"lchild":"rchild";
	if(parent[child]){
		this.insert(value, parent[child]);
	}else{
		parent[child]=new Node(value, parent);
		this._size++;
	}
};

BinarySearchTree.prototype.contains=function(e){
	return !!this._find(e);
};
BinarySearchTree.prototype._find=function(e,parent){
	if(!parent){
		if(this.root){
			parent = this.root;
		}else{
			return false;
		}
	}
	if(parent.value===e){
		return parent;
	}else if(this._comparator.lessThan(e, parent.value)){
		return parent.lchild&&this._find(e, parent.lchild);
	}else{
		return parent.rchild&&this._find(e, parent.rchild);
	}
};

BinarySearchTree.prototype.remove=function(e){
	var node=this._find(e);
	if(!node){
		throw new Error("Item not found in the tree");
	}
	/**
	 * 如果要删除的结点有左右孩子，就将右孩子中最小值的结点代替当前结点,
	 * 即将右孩子值最小的结点的值赋给要删除的结点，然后再递归删除值最小的结点
	 */
	if(node.lchild && node.rchild){
		var rchildMin= this._findMin(node.rchild);
		this.remove(rchildMin.value);
		node.value = rchildMin.value;
	}
	/**
	 * 如果要删除的结点只有一边有孩子，就把一边的孩子移上来
	 */
	else if(node.lchild || node.rchild){
		var child=node.lchild?"lchild":"rchild";
		node.value = node[child].value;
		node.lchild=node[child].lchild;
		node.rchild=node[child].rchild;
	}

	else{
		var child=node.parent.lchild && node.parent.lchild===node?"lchild":"rchild";
		node.parent[child]=null;
		this.size--;
	}
};
BinarySearchTree.prototype._findMin=function(node){
	while(node.lchild){
		node = node.lchild;
	}
	return node;
}

function Node(value,parent){
	this.value=value;
	this.parent=parent;
	this.lchild=null;
	this.rchild=null;
}

module.exports=BinarySearchTree;