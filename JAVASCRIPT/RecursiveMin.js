function min(arr) {
	function lower(a, b) {
		if (a < b) {
			return a;
		}
		else {
			return b;
		}
	}
	
	if (arr.length === 2) {
		return lower(arr[0], arr[1]);
	}
	if (arr.length === 1) {
		return arr[0];
	}
	debugger;
	return lower(arr.shift(), min(arr));
}

min([4,3,2,1])