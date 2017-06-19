function isPrime(m) {
	if (n < 2) {
		return false;
	}
	for (var i = 2; i <= m/2; i ++) {
		if (m % i === 0) {
			return false;
		}
	}
	return true;
}

// returns first n primes
function primes(n) {
	if (n === 1) {
		return [2];
	}
	var last = primes(n-1)[n-2] + 1;
	while (!isPrime(last)) {
		last++;
	}
	return primes(n-1).concat([last]);
}

primes(4);