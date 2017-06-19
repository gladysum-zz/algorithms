function bubbleSort(arr) {
	for (var j = arr.length-1; j >0; j --) {	
		for (var i = 0; i < j; i ++) {
			if (arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
		}
	}
	return arr; 
}

bubbleSort([4,3,2,1]);