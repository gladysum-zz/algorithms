// return first n rows of Pascal's triangle
function pascal(n) {
	if (n === 1) {
		return [[1]];
	}
	if (n === 2) {
		return [[1], [1, 1]];
	}
	var newRow = [1];
	for (var i = 0; i < n-2; i ++) {
		
		newRow.push(pascal(n-1)[n-2][i] + pascal(n-1)[n-2][i+1]);
	}
	newRow.push(1);
		return pascal(n-1).concat([newRow]);
}

pascal(5);

