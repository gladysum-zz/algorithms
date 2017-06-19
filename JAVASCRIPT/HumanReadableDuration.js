function formatDuration (seconds) {
  if (seconds === 0) {return "now"}
  var obj = {
     31536000: "year",
     86400: "day",
     3600: "hour",
     60: "minute",
     1: "second"
  }
  
  var keys = Object.keys(obj);
  keys.reverse();
  var obj2 = {};
  for (let i = 0; i < keys.length; i ++) {
    var units = Math.floor(seconds/keys[i]);
    var seconds = seconds % keys[i];
    if (units > 0) {
      obj2[obj[keys[i]]] = units;
    }
  }
  var keys2 = Object.keys(obj2);

  function singleOrPlural(str, num) {
    if (num < 2) {return num + " " + str;}
    else {return num + " " + str + "s";}
  }

  var result = "";
  for (let i = 0; i <keys2.length; i++) {
    if (keys2.length === 1) {result += singleOrPlural(keys2[i], obj2[keys2[i]]);}
  
    if (keys2.length === 2) {
      if (i === 0) {result += singleOrPlural(keys2[i], obj2[keys2[i]]) + " and ";}
      else {result += singleOrPlural(keys2[i], obj2[keys2[i]]);}
    }
    if (keys2.length > 2) {
      if (i < keys2.length - 2) {result += singleOrPlural(keys2[i], obj2[keys2[i]]) + ", ";}
      if (i === keys2.length - 2) {result += singleOrPlural(keys2[i], obj2[keys2[i]]) + " and ";}
      if (i === keys2.length - 1) {result += singleOrPlural(keys2[i], obj2[keys2[i]]);}
     }
  } 
  return result;
}

formatDuration(8640 + 360 + 60 + 1);


