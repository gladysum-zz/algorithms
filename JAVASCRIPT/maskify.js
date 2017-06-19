//changes all but the last four characters into '#'

const maskify = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 4) {
      result += '#';
    }
    else {result += str[i];}
  }
  return result;
}

maskify('9766khjhjhjhj');
