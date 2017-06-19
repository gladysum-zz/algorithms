function fragment(arr) {
		return arr.map(function(element){return [element]})
	}

function mergeTwoArrays(arr1, arr2) {
	var newArr = [];
	while (arr1.length > 0 && arr2.length > 0) {
		if (arr1[0] <= arr2[0]) {
			newArr.push(arr1.shift())
		}
		else {
			newArr.push(arr2.shift())
		}
	}
	if (arr1.length > 0) {
		newArr = newArr.concat(arr1);
	}
	else {
		newArr = newArr.concat(arr2);
	}
	return newArr;
}

function mergeSort(arr) {
	arr = fragment(arr);


	while (arr.length > 1) {
		console.log(arr1);
		var newArr = [];
		for (var i = 0; i < arr.length - 1; i = i + 2) {
			if (arr[i+1] !== undefined) { 
				newArr = newArr.concat(mergeTwoArrays(arr[i], arr[i+1]))
			}
			else {
				newArr = newArr.concat(arr[i]);	
			}	 
		}
	}
	return newArr[0]
}

mergeSort([3,2,4,5,1]);
