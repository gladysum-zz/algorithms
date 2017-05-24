function MatrixSpiral(strArr) {
  let result = "";
  for (let j = 1; j <= strArr.length/2; j++) {
    for (let i = j - 1; i < strArr.length - j; i++) {
      result += strArr[j-1][i];
    }
    for (let i = j - 1; i < strArr.length - j; i++) {
      result += strArr[i][strArr.length-j];
    }
    for (let i = j - 1; i < strArr.length - j; i++) {
      result += strArr[strArr.length-j][strArr.length-j-i];
    }
    for (let i = j - 1; i < strArr.length - j; i++) {
      result += strArr[strArr.length-j-i][j-1];
    }
  }
}
  return result;
}

// keep this function call here
MatrixSpiral(readline());


















