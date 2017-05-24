let arr1 = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

function sudoku(arr){
  //check rows

  function rowChecker(arr) {
    for (let i = 0; i < arr.length-1; i ++) {
      if (arr[i].length !== 9) return false;
      for (let j = 1; j <=9; j ++) {
        if (!arr[i].includes(j)) return false;
      }
    }
    return true;
  }

  if (!rowChecker(arr)) return false;

  //check columns
  function transpose(arr) {
    let arrTranspose = [];
    for (let i = 0; i < arr.length-1; i ++) {
      let subArray = [];
      for (let j = 0; j < arr.length-1; j ++) {
        subArray.push(arr[j][i])
      }
      arrTranspose.push(subArray);
    }
    return arrTranspose;
  }

  if (!rowChecker(arrTranspose(arr))) return false;

  //check 3x3 subsquares
  function subsquare(arr) {
    let subsquare = [];

    return subsquare;
  }

}




