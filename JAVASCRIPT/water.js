function water(arr) {
  let arrCopy = arr;
  let result = 0;
  let level = arrCopy.sort().reverse()[0];
  while (level) {
    walls = [];
    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] >= level) {
        walls.push(i);
      }
    }
    for (let i = 0; i < walls.length; i++) {

    }
    level--;
  }
}