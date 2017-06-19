function isPowerOfTwo(n) {
	if (n === 1) {
		return true;
	}
	if (n % 2 !== 0) {
		return false;
	}
	return isPowerOfTwo(n/2);
}

isPowerOfTwo(28);