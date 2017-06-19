// Final Review problem "search"

function atLeastOne(arr, isEven) {
	function isEven(n) {
		if (n % 2 === 0) {
			return true;
		}
		else {
			return false;
		}
	}
	var bool = false;
	arr.forEach(function(val){
		if (!Array.isArray(val)) {
			if (isEven(val)) {
				bool = true;
			}
		}
		else {
			if (bool === false) {
				bool = atLeastOne(val, isEven);
			}
		}
	});
	return bool; 
}

atLeastOne([1,[1,2],1]);