function iqTest(numbers){
  var arr = numbers.split(" ").map(function(num){return Number(num)});
  var evenCount = 0;
  for (let i = 0; i < 3; i++) {
  	if (arr[i] % 2 === 0) {
  		evenCount++
  	}
  }
  
  for (let i = 0; i < arr.length; i ++ ) {
  	if (evenCount > 1) {
  		if (arr[i] % 2 === 1) {
  			return i + 1;
  		}			
  	}
  	else {
  		if (arr[i] % 2 === 0) {
  			return i + 1;
  		}
  	}
  }
}