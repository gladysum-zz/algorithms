function arrayToList(arr) {
	if (arr.length === 1) {
		return {value: arr[0], rest: null};
	}
	return {value: arr.shift(), rest: arrayToList(arr)};
}
var list = arrayToList([1,2,3]);

function listToArray(list) {
	if (list.rest === null) {
		return [list.value];
	}
	return [list.value].concat(listToArray(list.rest));
}

listToArray(list);