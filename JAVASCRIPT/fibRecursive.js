// return the first n fibonacci numbers

function fibRecursive(n) {
	if (n === 1) {
		return [1];
	}
	if (n === 2) {
		return [1, 1];
	}
	return fibRecursive(n-1).concat([fibRecursive(n-1)[n-2] + fibRecursive(n-2)[n-3]])
}
fibRecursive(7);