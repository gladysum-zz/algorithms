function sumRecursive(arr) {
	if (arr.length === 1) {
		return arr[0];
	}
	
	if (arr.length === 2) {
		return arr[0] + arr[1];
	}
	
	return arr.shift() + sumRecursive(arr);
}

sumRecursive([1,2,3,4]);