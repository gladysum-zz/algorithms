// Write a program to remove numerical characters from an array of strings.

const removeNumeric = arr => {
  return arr.map(str => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (!Number(str[i])) {
        newStr += str[i];
      }
    }
    return newStr;
  })
}

removeNumeric(["abc1", "def2"]);