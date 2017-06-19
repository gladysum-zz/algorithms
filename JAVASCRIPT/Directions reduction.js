function dirReduc(arr){
  var obj = {
  	NORTH: 1,
  	SOUTH: -1,
  	EAST: 2,
  	WEST: -2
  };
  
  if (!arr.join("").includes("NORTHSOUTH")
  		&& !arr.join("").includes("SOUTHNORTH")
  		&& !arr.join("").includes("EASTWEST")
  		&& !arr.join("").includes("WESTEAST")) {
  	return arr;
  }
  
  var result = [];
  for (var i = 0; i < arr.length; i++) {
  	if (obj[arr[i]] + obj[arr[i+1]] !== 0) {
  		result.push(arr[i]);
  	}
  	else {
  		i++;
  	}
  }
  result = dirReduc(result);
  return result;
}
