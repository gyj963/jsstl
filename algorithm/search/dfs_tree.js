/**
 * Created by Administrator on 14-8-12.
 */
function TLR(root,callback){
	if(root){
		callback(root.value);
		TLR(root.lchild,callback);
		TLR(root.rchild,callback);
	}
}

function LTR(root,callback){
	if(root){
		LTR(root.lchild,callback);
		callback(root.value);
		LTR(root.rchild,callback);
	}
}

function LRT(root,callback){
	if(root){
		LRT(root.lchild,callback);
		LRT(root.rchild,callback);
		callback(root.value);
	}
}

var dfs_tree={
	TLR :TLR,
	LTR :LTR,
	LRT :LRT

}
module.exports=dfs_tree;