module.exports = function longestConsecutiveLength(array) {
  // your solution here
var count=1;
var max=1;
var l=array.length;
if (l==0) return 0; 
for (var i=0; i<l; i++){
	if (array[i]-array[i-1]==1){
	max=max+1;
	}else{
	count=Math.max(count, max);
	max=1;
	}
}
return count;
}
