// Return x such that a**x === b.

function func(a, b) {
	if (a === b) {
		return 1;
	}
	return 1 + func(a, b/a);
}

func(2, 16);
