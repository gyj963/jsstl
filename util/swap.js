/**
 * Created by Administrator on 14-8-2.
 */
function swap(array,i,j){
	var tmp;
	tmp = array[i];
	array[i]=array[j];
	array[j]=tmp;
}
module.exports=swap;