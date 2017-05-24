function listToArray(list) {
  let result = [];
  let currentNode = list;
  while (currentNode) {
    result.push(currentNode.data)
    currentNode = currentNode.next;
  }
  return result.map(element=>element*2);
}

function arrayToList(arr) {
  if (arr.length === 0) {
    return {};
  }
  if (arr.length === 1) {
    return {data: arr[0], next: null}
  }
  return {data: arr.shift(), next: arrayToList(arr)}
}

arrayToList(listToArray({data: 1, next: {data: 2, next: {data: 3, next: null}}}))
