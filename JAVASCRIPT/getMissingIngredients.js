function getMissingIngredients(recipe, added) {
  
  
  var arr = [];
   Object.keys(recipe).forEach(function(ingredient){
  	if (added[ingredient] === undefined) {
  		arr.push(0);
  	}
  	else {
  		arr.push(Math.ceil(added[ingredient]/recipe[ingredient]))
  	}
  });
  
  var numCakes = arr[0];
  arr.forEach(function(num){
  	if (num > numCakes) {
  		numCakes = num;
  	}
  });
  
  var done = true;
  for (var i in recipe) {
  	if (numCakes > 0 && numCakes * recipe[i] !== added[i]) {
  		done = false;	
  	}
  }
  
  if (done === true) {
  		return {};
  }
 
  
  
  var result = {};
  Object.keys(recipe).forEach(function(ingredient){
  	if (numCakes === 0) {
  		result[ingredient] = recipe[ingredient];
  	}
  	else {
  		result[ingredient] = numCakes * recipe[ingredient] - added[ingredient];
  	}
  });
  return result;
}