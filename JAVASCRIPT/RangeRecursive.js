// Return the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y) {
	if (x === y - 2) {
		return [x + 1];
	}
	return [x + 1].concat(range(x + 1, y));
}

range(1, 9);