/**
 * Created by Administrator on 14-8-12.
 */
var Queue=require("../../data_structures/queue");
function bfsTree(root,callback){
	var q=new Queue();
	q.push(root);
	while(!q.isEmpty()){
		var node=q.pop();
		callback(node.value);
		if(node.lchild){
			q.push(node.lchild);
		}
		if(node.rchild){
			q.push(node.rchild);
		}
	}
}

module.exports=bfsTree;