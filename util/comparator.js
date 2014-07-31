/**
 * Created by Administrator on 14-7-31.
 */
function Comparator(compareFn){
	if(compareFn){
		this.compare=compareFn;
	}
}
Comparator.prototype.compare=function(a,b){
	if(a === b){
		return 0;
	}
	return a<b?-1:1;
}
Comparator.prototype.lessThan=function(a,b){
	return this.compare(a, b)<0;
}
Comparator.prototype.greaterThan=function(a,b){
	return this.compare(a, b)>0;
}
Comparator.prototype.lessThanOrEqual=function(a,b){
	return this.lessThan(a, b)||this.compare(a, b)===0;
}
Comparator.prototype.greaterThanOrEqual=function(a,b){
	return this.greaterThan(a, b)||this.compare(a, b)===0;
}
Comparator.prototype.reverse=function(a,b){
	var originalCompareFn=this.compare;
	this.compare=function(a,b){
		return originalCompareFn(b, a);
	}
}
module.exports=Comparator;


